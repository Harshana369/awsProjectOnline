import express from "express";
import RateCard from "../models/rateCards.js";
import User from "../models/users.js";
import Boq from "../models/boqs.js";
import verify from "../verifyToken.js";
const router = express.Router();

//ADD a new rate card
router.post("/addRateCard", verify, async (req, res) => {
  // console.log(req.currentUser)
  if (req.user.isAdmin) {
    await RateCard.create(req.body)
      .then((newRateCard) => {
        newRateCard.uploadedBy = req.user.id;
        newRateCard.uploadedDate = new Date();

        newRateCard
          .save()
          .then(() => {
            console.log("New RateCard added successfully");
            // console.log(newRateCard)
            res.json(newRateCard);
          })
          .catch((err) => {
            console.log("error occured during saving new ratecard" + err);
          });
      })
      .catch((err) => {
        console.log("error occured during creating new ratecard" + err);
      });
  } else {
    res.status(403).json("You cannot add new ratecards");
  }
});

//Update, Update data in a company
router.put("/updatRateCard/:id", verify, async (req, res) => {
  const rateCardValidFrom = req.body.rateCardValidFrom;
  const rateCardValidTo = req.body.rateCardValidTo;
  const activeStatus = req.body.activeStatus;

  await RateCard.findByIdAndUpdate(req.params.id, {
    rateCardValidFrom,
    rateCardValidTo,
    activeStatus,
  })
    .then((ratecard) => {
      res.json(ratecard);
    })
    .catch((err) => {
      console.log("error occured during updating a rateCard" + err);
    });
});

//Read, Get all rate cards
router.get("/allRateCards", verify, async (req, res) => {
  await RateCard.find()
    .populate([{ path: "rateCardSubcon", select: "companyName" }])
    .then((ratecards) => {
      // console.log(ratecards)
      res.json(ratecards);
    })
    .catch((err) => {
      console.log("error occured during read all rate cards" + err);
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
