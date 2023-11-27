import express from "express";
import passport from "passport";
import User from "../models/users.js";
import Company from "../models/companys.js";
import ProjectTemplates from "../models/projectTemplates.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import verify from "../verifyToken.js";

const router = express.Router();

//Login a user
router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: "Invalid username or password.",
    session: true,
  }),
  (req, res) => {
    res.json(req.session.passport.user);
    //console.log("User logged in suceesfully"+ req.user.name)
  }
);

//Register a user
router.post("/signup", checkAdminRights, async (req, res) => {
  //(req.body.adminRights);
  await User.register(
    new User({
      username: req.body.username,
      adminRights: req.body.adminRights,
      name: req.body.name,
      email: req.body.email,
      company: req.body.company,
      userDiv: req.body.userDiv,
      mobileNo: req.body.mobileNo,
      activeStatus: req.body.activeStatus,
      userCanAssignForTask: req.body.userCanAssignForTask,
      visbilityBasedOn: req.body.visbilityBasedOn,
      projectCoordinator: req.body.projectCoordinator,
      approvalPath: [req.body.approvalPath],
      createdBy: req.user._id,
    }),
    req.body.password,
    (err, newUser) => {
      if (err) {
        //console.log("Erro while registering a user"+ err)
        res.json(err);
      } else {
        //console.log("New user registered sucessfully")
        res.json(newUser);
      }
    }
  );
});

//Change the password
router.post("/changepw", verify, async (req, res) => {
  if (req.body.newPassword1 === req.body.newPassword2) {
    await User.findByIdAndUpdate(req.user.id)
      .then((user) => {
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (originalPassword != req.body.oldPassword) {
          //req.flash("error", err.message);
          //res.redirect("/changepw");
          //console.log("Error during password change "+ err)
          res.status(202).json("Error during password change " + err);
        }
        user.password = CryptoJS.AES.encrypt(
          req.body.newPassword1,
          process.env.SECRET
        ).toString();
        user.save();
        //req.flash("success", "Welcome to IBS Dashboard" + user.username);
        //res.redirect("/dashboard");
        //console.log("Password changed sucessfully")
        res.status(200).json("Password changed sucessfully " + req.user);
        //req.flash("success", "Welcome to IBS Dashboard" + user.username);
        //res.redirect("/dashboard");
        //console.log("Password changed sucessfully")
      })
      .catch((err) => {
        //console.log("User not found while changing password "+ err)
        res.json(err);
      });
  } else {
    //req.flash("error", "New password doesnt match each other");
    //res.redirect("/changepw");
    //console.log("New password doesnt match each other ")
    res.status(402).json("New password doesnt match each other");
  }
});

//Update, Update user data
router.put("/user/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET
      ).toString();
    }
    try {
      console.log(req.body);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      //console.log(updatedUser)
      res.json({ msg: "User updated successfully", variant: "success" });
    } catch (err) {
      res.json({ msg: "Error occured during updating user", variant: "error" });
    }
  } else {
    res.json({ msg: "You cannot update a user", variant: "error" });
  }
});

//DELETE, Delete a user
router.delete("user/:id", verify, async (req, res) => {
  if (req.currentUser.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can delete only your account");
  }
});

//Get a User
router.get("/user/:id", verify, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;

    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get users
router.get("/users", verify, async (req, res) => {
  await User.find()
    .populate([
      { path: "approvalPath", select: "name" },
      { path: "company", select: "companyName" },
    ])
    .select(
      "name username userCanAssignForTask approvalPath company activeStatus adminRights email mobileNo userDiv visbilityBasedOn isProjectCoordinator projectCoordinator "
    )
    .then((users) => {
      //console.log("User deleted successfully");
      Company.find()
        .select("companyName companyCategory")
        .then((companys) => {
          ProjectTemplates.find()
            .select("project subProject properties projectID")
            .then((projects) => {
              res.send({
                users: users,
                companys: companys,
                projects: projects,
              });
            })
            .catch((err) => {
              //console.log("error occured during getting a Projects template sata" + err)
            });
        })
        .catch((err) => {
          //console.log("error occured during getting a company sata" + err)
        });
    })
    .catch((err) => {
      console.log("error occured during geeting User data" + err);
    });
});

//get mobitel users
router.get("/mobitelusers", verify, async (req, res) => {
  await User.find()
    .populate([{ path: "company", select: "companyName" }])
    .then((users) => {
      users = users.filter((user) => {
        if (user.company.companyName == "Mobitel") return user;
      });
      res.send(users);
    })
    .catch((err) => {
      console.log(
        "error occured during getting a Projects template sata" + err
      );
    });
});

//Logout a user
router.get("/logout", verify, (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.error("Error while logging out:", err);
      res.status(500).json("Error while logging out");
    } else {
      console.log("User logout successfully");
      res.json("User logout successfully");
    }
  });
});

//Check Loging status
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    //req.flash("error","You need to be logged in to do that!!!");
    console.log("You need to be logged in to do that!!");
    res.json("You need to be logged in to do that!!");
    //res.redirect("/login");
  }
}

//Check admin rights status
function checkAdminRights(req, res, next) {
  if (req.isAuthenticated()) {
    User.findById(req.user._id, (err, foundUser) => {
      if (err) {
        //req.flash("error", err.message);
        console.log("User not found while checking admin right " + err);
        res.json(err);
        //return res.redirect("/login");
      } else {
        if (foundUser.isAdmin) {
          next();
        } else {
          //req.flash("error", "You don't have permission to do that, Please login from Admin acccount");
          console.log(
            "You don't have permission to do that, Please login from Admin acccount "
          );
          res.json(
            "You don't have permission to do that, Please login from Admin acccount" +
              foundUser.username
          );
          //  return res.redirect("/login");
        }
      }
    });
  } else {
    //req.flash("error","You need to be logged in to do that!!!");
    console.log("You need to be logged in to do that!!");
    res.json("You need to be logged in to do that!!");
    //res.redirect("/login");
  }
}

export default router;
