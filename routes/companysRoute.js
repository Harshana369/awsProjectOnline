import express from "express";
import Company from "../models/companys.js";
import User from "../models/users.js";
import verify from "../verifyToken.js";

const router = express.Router();

//ADD a new Company
router.post("/addcompany", verify, async (req, res) => {
  console.log(req.currentUser);

  if (req.user.isAdmin) {
    await Company.create({
      companyName: req.body.companyName,
      companyCategory: req.body.companyCategory,
      createdBy: req.user.id,
    })
      .then((newNewComapny) => {
        newNewComapny
          .save()
          .then(() => {
            console.log("New Company added successfully");
            res.json(newNewComapny);
          })
          .catch((err) => {
            console.log("error occured during saving new company" + err);
          });
      })
      .catch((err) => {
        console.log("error occured during creating new company" + err);
      });
  } else {
    res.status(403).json("You cannot add new companies");
  }
});

//Read, Get all registered companies
router.get("/allcompany", verify, async (req, res) => {
  await Company.find()
    .then((companys) => {
      console.log(companys);
      res.json(companys);
    })
    .catch((err) => {
      console.log("error occured during read all companies" + err);
    });
});

//Update, Update data in a company
router.put("/updatecompany/:companyId", verify, async (req, res) => {
  // console.log(req.params.companyId);
  if (req.user.isAdmin) {
    const companyName = req.body.companyName;
    const companyCategory = req.body.companyCategory;

    await Company.findByIdAndUpdate(req.params.companyId, {
      companyCategory,
      companyName,
    })
      .then((company) => {
        console.log("Company updated successfully");
        res.json(company);
      })
      .catch((err) => {
        console.log("error occured during updating a company" + err);
      });
  } else {
    res.status(403).json("You cannot update companies");
  }
});

//DELETE, Delete a comapny
router.delete("/deletecompany/:companyId", verify, async (req, res) => {
  if (req.currentUser.isAdmin) {
    await Task.findByIdAndDelete(req.params.taskId)
      .then(() => {
        console.log("Company deleted successfully");
        res.json("Company deleted successfully");
      })
      .catch((err) => {
        console.log("error occured during deleting a Company" + err);
      });
  } else {
    res.status(403).json("You cannot delete companies");
  }
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
    User.findById(req.user.id, (err, foundUser) => {
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
