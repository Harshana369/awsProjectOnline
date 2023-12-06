import express from "express";
import HandoverChanges from "../models/handoverChanges.js";
import User from "../models/users.js";
import verify from "../verifyToken.js";

const router = express.Router();

//ADD new task changes
router.post("/addhandoverchanges", verify, async (req, res) => {
  await HandoverChanges.create({
    taskRef: req.body.taskRef,
    siteID: req.body.siteID,
    siteName: req.body.siteName,
    newProperties: req.body.newProperties,
    existingProperties: req.body.existingProperties,
    project: req.body.project,
    subProject: req.body.subProject,
    headerProperties: req.body.headerProperties,
    taskRefID: req.body.taskRefID,
    assignedProjectManager: req.body.assignedProjectManager,
    status: req.body.status,
    taskStatus: req.body.taskStatus,
    changeHandoverApprover: req.body.changeHandOverUser,
    comment: req.body.comment,
  })
    .then((newHandoverChanges) => {
      newHandoverChanges
        .save()
        .then(() => {
          console.log("Task changed successfully");
          res.json(newHandoverChanges);
        })
        .catch((err) => {
          console.log("error occured during saving task changes" + err);
        });
    })
    .catch((err) => {
      console.log("error occured during creating task changes " + err);
    });
});

//Read, Get all registered companies
router.get("/pendinghandoverchanges", verify, async (req, res) => {
  await HandoverChanges.find({
    status: "Pending",
    changeHandoverApprover: req.user.id,
  })
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      console.log("error occured during read all task changes" + err);
    });
});

//Read, Get all registered companies
router.get("/allhandoverchanges/:id", verify, async (req, res) => {
  switch (req.params.id) {
    case "all":
      await HandoverChanges.find()
        .then((tasks) => {
          res.json(
            tasks.filter((task) => task.status === "Change Acknowledged")
          );
        })
        .catch((err) => {
          console.log("error occured during read all task changes" + err);
        });

    case "approved":
      await HandoverChanges.find()
        .then((tasks) => {
          res.json(tasks.filter((task) => task.status === "Approved"));
        })
        .catch((err) => {
          console.log("error occured during read approved task changes" + err);
        });

    case "sideNav":
      await HandoverChanges.find()
        .then((tasks) => {
          res.json({
            setApproveCount: tasks.filter((task) => task.status === "Pending")
              .length,
            setApprovedCount: tasks.filter((task) => task.status === "Approved")
              .length,
            setAllCount: tasks.filter(
              (task) => task.status === "Change Acknowledged"
            ).length,
          });
        })
        .catch((err) => {
          console.log("error occured during read sideNav task changes" + err);
        });
  }
});

//Update, Update data in a task
router.put("/updatehandoverchanges/:task", verify, async (req, res) => {
  await HandoverChanges.findByIdAndUpdate(req.params.task, req.body)
    .then((tasks) => {
      console.log("Changes updated successfully");
      res.json(tasks);
    })
    .catch((err) => {
      console.log("error occured during updating a task" + err);
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

export default router;
