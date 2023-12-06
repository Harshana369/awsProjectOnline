import express from "express";
import verify from "../verifyToken.js";
import User from "../models/users.js";

import Task from "../models/tasks.js";

const router = express.Router();

router.get("/getmpdsystem", verify, async (req, res) => {
  try {
    const tasks = await Task.find(
      {},
      "taskRef siteID siteName  project subProject assignedMobitelOfficer assignedSubcon taskHistory"
    )
      .populate("assignedMobitelOfficer", "name")
      .populate("assignedSubcon", "companyName")
      .lean();
    const modifiedTasks = tasks.map((task) => {
      return {
        Task_Ref: task.taskRef,
        Site_Id: task.siteID,
        Site_Name: task.siteName,
        Handover:
          task.taskHistory
            .find((history) => history.taskStatus === "Task handed over")
            ?.performedDate?.toISOString()
            .substr(0, 10) || null,
        Project: task.project,
        Scope: task.subProject,
        Site_Engineer: task.assignedMobitelOfficer
          ? task.assignedMobitelOfficer.name
          : null,
        Sub_Contractor: task.assignedSubcon
          ? task.assignedSubcon.companyName
          : null,
        Task_Assigned:
          task.taskHistory
            .find((history) => history.taskStatus === "Task accepted")
            ?.performedDate?.toISOString()
            .substr(0, 10) || null,
        Task_Commenced:
          task.taskHistory
            .find((history) => history.taskStatus === "Task commenced")
            ?.performedDate?.toISOString()
            .substr(0, 10) || null,
        Installation_Completed:
          task.taskHistory
            .find((history) => history.taskStatus === "Task completed")
            ?.performedDate?.toISOString()
            .substr(0, 10) || null,
        Commission:
          task.taskHistory
            .find((history) => history.comStatus === "Site Commissioned")
            ?.performedDate?.toISOString()
            .substr(0, 10) || null,
        PAT_Pass:
          task.taskHistory
            .find((history) => history.patStatus === "PAT Pass")
            ?.performedDate?.toISOString()
            .substr(0, 10) || null,
        SAR_Pass:
          task.taskHistory
            .find((history) => history.sarStatus === "SAR Pass")
            ?.performedDate?.toISOString()
            .substr(0, 10) || null,
        On_air:
          task.taskHistory
            .find((history) => history.onairStatus === "Site On-Air")
            ?.performedDate?.toISOString()
            .substr(0, 10) || null,
        BOQ_Submit:
          task.taskHistory
            .find((history) => history.taskStatus === "BOQ submitted")
            ?.performedDate?.toISOString()
            .substr(0, 10) || null,
        BOQ_Approve:
          task.taskHistory
            .find((history) => history.taskStatus === "BOQ Approved")
            ?.performedDate?.toISOString()
            .substr(0, 10) || null,
        PR_Raise:
          task.taskHistory
            .find((history) => history.taskStatus === "PR Raised")
            ?.performedDate?.toISOString()
            .substr(0, 10) || null,
        Withdraw_Approved:
          task.taskHistory
            .find((history) => history.taskStatus === "Withdraw approved")
            ?.performedDate?.toISOString()
            .substr(0, 10) || null,
      };
    });
    res.status(200).json(modifiedTasks);
  } catch (err) {
    console.log("error occurred while reading all tasks" + err);
    res.status(500).json({ message: "Failed to get tasks" });
  }
});

// router.get("/getmo", async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     res.status(200).json(tasks);
//   } catch (err) {
//     console.log("error occurred while reading all tasks" + err);
//     res.status(500).json({ error: err.message });
//   }
// });

export default router;
