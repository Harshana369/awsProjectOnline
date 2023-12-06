import express from "express";
import verify from "../verifyToken.js";
import User from "../models/users.js";
import Task from "../models/tasks.js";

const router = express.Router();

router.get("/getalltaskstoinframs", verify, async (req, res) => {
  try {
    const tasks = await Task.find(
      {},
      "taskRef siteID siteName  project subProject assignedMobitelOfficer assignedSubcon taskHistory"
    )
      .populate("assignedMobitelOfficer", "name")
      .populate("assignedSubcon", "companyName")
      .lean();
    const allProjectonlineTasks = tasks.map((task) => {
      return {
        Task_Ref: task.taskRef,
        Site_Id: task.siteID,

      };
    });
    res.status(200).json(allProjectonlineTasks);
  } catch (err) {
    console.log("error occurred while reading all tasks" + err);
    res.status(500).json({ message: "Failed to get tasks" });
  }
});


export default router;
