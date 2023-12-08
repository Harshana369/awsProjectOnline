import express from "express";
import Task from "../models/tasks.js";
import User from "../models/users.js";
import Boq from "../models/boqs.js";
import ProjectTemplate from "../models/projectTemplates.js";
import mongoose from "mongoose";
import multer from "multer";
import verify from "../verifyToken.js";
import nodemailer from "nodemailer";
import handoverChanges from "../models/handoverChanges.js";

const router = express.Router();
let establishedModels = {};

//Add a new Project Tempate
router.post("/addProjectTemplate", verify, async (req, res) => {
  // console.log(req.body);

  await ProjectTemplate.find({ subProject: req.body.subProject }).then(
    async (projTemplate) => {
      // console.log(projTemplate);
      if (!projTemplate.length) {
        await ProjectTemplate.create(req.body)
          .then((newProjectTemplate) => {
            newProjectTemplate
              .save()
              .then(() => {
                console.log("newProjectTemplate added successfully");
                //console.log(newTask)

                console.log(
                  new Date().toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                  })
                );
              })
              .catch((err) => {
                console.log(
                  "error occured during saving newProjectTemplate" + err
                );
                res.json({
                  msg: "Error occured during saving newProjectTemplate",
                  variant: "error",
                });
              });
          })
          .catch((err) => {
            console.log(
              "Error occured during creating newProjectTemplate" + err
            );
            res.json({
              msg: "Error occured during creating newProjectTemplate",
              variant: "error",
            });
          });

        res.json({
          msg: "New Template" + " added successfully",
          variant: "success",
        });
      } else {
        res.json({
          msg: "This sub project is already available",
          variant: "error",
        });
      }
    }
  );
});

//ADD a new Task
router.post("/addTask", verify, async (req, res) => {
  //console.log(req)
  // console.log("Jana");
  // console.log(req.body)
  let toList = [];
  let ccList = [];
  let priority = "";

  await ProjectTemplate.find({ projectID: req.body.projectID })
    .then(async (projTemplate) => {
      //console.log(projTemplate[0].toList)
      if (
        projTemplate[0].toList.length != 0 ||
        projTemplate[0].ccList.length != 0
      ) {
        toList = projTemplate[0].toList;
        ccList = projTemplate[0].ccList;
        // console.log("inxxx")
      } else {
        // console.log("outxxx")
        // toList=["manodw@mobitel.lk","manodw@mobitel.lk"]    // For testing only
        // ccList=["manodw@mobitel.lk","manodw@mobitel.lk"]    // For testing only
        //changes done-Start>>>>
        toList = [
          "isurug@mobitel.lk",
          "varunah@Mobitel.lk",
          "amilar@Mobitel.lk",
          "dhammikag@mobitel.lk",
          "malinduh@Mobitel.lk",
          "aluthwala@mobitel.lk",
          "mohamadImr@Mobitel.lk",
          "udaya_e@mobitel.lk",
          "chinthw@mobitel.lk",
          "priyantw@Mobitel.lk",
          "dumindar@Mobitel.lk",
          "Azeem_A@mobitel.lk",
          "scharith@mobitel.lk",
          "hasangas@Mobitel.lk",
          "Bhanushak@Mobitel.lk",
          "hasitha_a@Mobitel.lk",
          "lasithar@Mobitel.lk",
          "nimeshg@mobitel.lk",
          "DilshanMadushanka@mobitel.lk",
          "Nileshf@Mobitel.lk",
          "buddhimalar@mobitel.lk",
          "indunila@Mobitel.lk",
          "mohamadImr@Mobitel.lk",
          "sahand@mobitel.lk",
          "sasikaa@mobitel.lk",
          "thilankaw@mobitel.lk",
          "nuwanf@mobitel.lk",
          "sahand@mobitel.lk",
          "tharakad@mobitel.lk",
          "kdppjaya@Mobitel.lk",
          "sidathh@Mobitel.lk",
          "indunila@Mobitel.lk",
          "dimuthuh@mobitel.lk",
          "vireshd@Mobitel.lk",
          "charithku@mobitel.lk",
          "dumindar@Mobitel.lk",
          "kushana@Mobitel.lk",
          "geethalw@mobitel.lk",
          "chamaraj@mobitel.lk",
          "geethalw@mobitel.lk",
          "antont@mobitel.lk",
          "chathurangau@Mobitel.lk",
          "arjunaj@Mobitel.lk",
          "sumithsam@mobitel.lk",
          "sarathk@Mobitel.lk",
          "durgapa@mobitel.lk",
          "surangag@mobitel.lk",
          "yomalko@mobitel.lk",
          "sankhanipe@mobitel.lk",
          "pradeepja@mobitel.lk",
          "shashikani@mobitel.lk",
          "duminduc@mobitel.lk",
          "shehanpe@mobitel.lk",
          "Bhanushak@Mobitel.lk",
          "nuwanj@Mobitel.lk",
          "kasunkan@Mobitel.lk",
          "purnimah@mobitel.lk",
          "rakshithad@mobitel.lk",
          "prageethu@Mobitel.lk",
          "chamikan@mobitel.lk",
          "kanishkaw@mobitel.lk",
        ];
        ccList = [
          "chamithb@mobitel.lk",
          "nuwanc@Mobitel.lk",
          "anuvindad@Mobitel.lk",
          "supuns@mobitel.lk",
          "nuwanw@Mobitel.lk",
          "tireshc@Mobitel.lk",
          "sajithr@Mobitel.lk",
          "amilan@Mobitel.lk",
          "damithk@Mobitel.lk",
          "lbandara@Mobitel.lk",
          "jeevanp@Mobitel.lk",
          "harshaneer@Mobitel.lk",
          "rameshs@Mobitel.lk",
          "ravinlal@Mobitel.lk",
          "nimeshg@mobitel.lk",
          "DilshanMadushanka@mobitel.lk",
          "DilshanMadushanka@mobitel.lk",
          "r1to3@mobitel.lk",
          "chameerah@Mobitel.lk",
          "kokilaw@Mobitel.lk",
          "rohithaj@Mobitel.lk",
          "harshaneer@Mobitel.lk",
          "yasithah@mobitel.lk",
          "kemindap@mobitel.lk",
          "thilankaw@mobitel.lk",
          "nuwanf@mobitel.lk",
          "sahand@mobitel.lk",
          "melanw@mobitel.lk",
          "tharindura@mobitel.lk",
          "supuns@mobitel.lk",
          "nuradhath@mobitel.lk",
          "induwarac@mobitel.lk",
          "disnakam@mobitel.lk",
          "sasinduh@mobitel.lk",
          "shehanst@mobitel.lk",
          "adheeshaa@mobitel.lk",
          "nuwanc@Mobitel.lk",
          "sachithvip@mobitel.lk",
          "pasinduse@mobitel.lk",
          "mahindad@Mobitel.lk",
          "ishank@mobitel.lk",
          "vimarshanah@mobitel.lk",
          "mohanw@Mobitel.lk",
          "melanw@mobitel.lk",
          "sachithvip@mobitel.lk",
          "tharakarath@mobitel.lk",
          "thilakasirirat@mobitel.lk",
          "pasinduse@mobitel.lk",
          "dimalshapa@mobitel.lk",
          "thilakshik@mobitel.lk",
          "chamodp@ibteng.lk",
          "dewdunuw@ibteng.lk",
          "ruwanra@Mobitel.lk",
        ];
        //changes done-End>>>>
        //console.log("out")
      }
      //console.log(projTemplate)
      // }).catnodech((err)=>{
    })
    .catch((err) => {
      console.log(
        "Error occured during searching a new project template" + err
      );
    });

  if (req.body.priority == "VIP" || req.body.priority == "High Priority") {
    priority = "Please note that this is a " + req.body.priority + " request.";
  } else {
    priority = "";
  }

  let message = {
    from: "projectonline@mobitel.lk",
    to: toList,
    cc: ccList,
    subject: "Implementation Site Handover (Site HO)",
    html:
      "<p>Dear All,<br><br>Please find the attached implementation site HO. <strong>" +
      priority +
      "</strong><br><br>Thank You,<br>" +
      req.user.name +
      "</p>",
    text: "Dear All",
    attachments: {
      // file on disk as an attachment
      filename: req.body.handoverFiles[0].slice(
        req.body.handoverFiles[0].indexOf("-") + 1
      ),
      path: "./public/" + req.body.handoverFiles[0], // stream this file
    },
  };

  for (var i = 0; i < req.body.properties.length; i++) {
    await Task.create(req.body)
      .then((newTask) => {
        const taskHistory = {};
        taskHistory.performedDate = new Date();
        taskHistory.performedBy = req.user.id;
        taskHistory.taskStatus = req.body.taskStatus;

        newTask.siteID = req.body.properties[i][1];
        newTask.siteName = req.body.properties[i][2];
        //newTask.taskStatus = req.body.taskStatus
        newTask.properties = req.body.properties[i];
        //newTask.project = req.body.project
        //newTask.subProject = req.body.subProject
        //newTask.taskAssignedFromDiV = req.body.taskAssignedFromDiV
        //newTask.taskAssignedDiv = req.body.taskAssignedDiv
        newTask.taskHistory.push(taskHistory);
        //newTask.headerProperties = req.body.headerProperties
        newTask.taskRef =
          req.body.project +
          "_" +
          req.body.subProject +
          "_" +
          req.body.properties[i][0] +
          "_" +
          Date.now();

        newTask
          .save()
          .then(() => {
            sendEmail(message);
            console.log("New task added successfully");
            //console.log(newTask)

            console.log(
              new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
            );
          })
          .catch((err) => {
            console.log("error occured during saving new task" + err);
            res.json({
              msg: "Error occured during saving new task",
              variant: "error",
            });
          });
      })
      .catch((err) => {
        console.log("Error occured during creating new task" + err);
        res.json({
          msg: "Error occured during creating new task",
          variant: "error",
        });
      });
  }

  res.json({
    msg: "New task/s (" + ") added successfully",
    variant: "success",
  });
});

//Read, Get all Project Templates

router.get("/project", verify, async (req, res) => {
  await ProjectTemplate.find()
    .populate([{ path: "assignedProjectManager", select: "name" }])
    .select("project subProject properties projectID assignedProjectManager")
    .then(async (projTemplates) => {
      await Task.find()
        .select(
          "taskRef project subProject headerProperties properties taskStatus"
        )
        .then((tasks) => {
          // console.log(projTemplates)
          res.json({ projTemplates: projTemplates, tasks: tasks });
        })
        .catch((err) => {
          console.log("error occured during read projTemplates" + err);
        });
    })
    .catch((err) => {
      console.log("error occured during read projTemplates" + err);
    });
});

// router.get("/venderProject", verify, async (req, res) => {
//   // task eke company id eka thiyanawa eken ee company eka karana okkoma project tika gannawaa

//   const myCompanyId = req.headers.company_id;
//   const myCompanyTasks = await Task.find({ assignedSubcon: myCompanyId });

//   // Create an object to group tasks by project details
//   const groupedTasks = {};

//   myCompanyTasks.forEach((task) => {
//     const { projectID, subProject, project } = task;

//     // Generate a unique identifier for the project details
//     const identifier = `${projectID}-${subProject}-${project}`;

//     if (!groupedTasks[identifier]) {
//       groupedTasks[identifier] = {
//         projectID,
//         subProject,
//         project,
//       };
//     }
//   });

//   const groupedTasksArray = Object.values(groupedTasks);

//   console.log(groupedTasksArray);
//   await ProjectTemplate.find()

//     .then(async () => {
//       await Task.find()
//         .select(
//           "taskRef project subProject headerProperties properties taskStatus"
//         )
//         .then((tasks) => {
//           // console.log(projTemplates)
//           res.json({ projTemplates: a, tasks: tasks });
//         })
//         .catch((err) => {
//           console.log("error occured during read projTemplates" + err);
//         });
//   })
//   .catch((err) => {
//     console.log("error occured during read projTemplates" + err);
//   });
// });

//Update, Update data in a project template

router.get("/venderProject", verify, async (req, res) => {
  try {
    const myCompanyId = req.headers.company_id;

    // Fetch tasks for the given company ID
    const myCompanyTasks = await Task.find({ assignedSubcon: myCompanyId });

    // Create an object to group tasks by project details
    const groupedTasks = {};

    myCompanyTasks.forEach((task) => {
      const { projectID, subProject, project } = task;
      const identifier = `${projectID}-${subProject}-${project}`;

      if (!groupedTasks[identifier]) {
        groupedTasks[identifier] = {
          projectID,
          subProject,
          project,
        };
      }
    });

    const groupedTasksArray = Object.values(groupedTasks);

    // console.log(groupedTasksArray);

    const tasks = await Task.find().select(
      "taskRef project subProject headerProperties properties taskStatus"
    );

    // Send the response with grouped tasks and additional task data
    res.json({ projTemplates: groupedTasksArray, tasks: tasks });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.put("/updateprojecttemp/:projectID", verify, async (req, res) => {
  // const project = req.body.project
  // const subProject = req.body.subProject
  const assignedProjectManager = req.body.assignedProjectManager;

  await ProjectTemplate.findByIdAndUpdate(req.params.projectID, {
    project,
    subProject,
    assignedProjectManager,
  })
    .then((project) => {
      // console.log("Project Template updated successfully");
      res.json({
        msg: "Project Template updated successfully",
        variant: "success",
      });
    })
    .catch((err) => {
      console.log("error occured during updating a project template" + err);
    });
});

//Read, Get all Tasks
router.get("/", verify, async (req, res) => {
  await Task.find()
    .then((tasks) => {
      // console.log(tasks);
      res.json(tasks);
    })
    .catch((err) => {
      console.log("error occured during read all tasks" + err);
    });
});

//File upload support
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("multer.diskStorage");
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    console.log("multer.Filefilter TRUE");
    cb(null, true);
  } else {
    cb(null, true);
    console.log("multer.Filefilter False");
  }
};

var upload = multer({ storage: storage, fileFilter: fileFilter });

//Upload a file
router.post("/upload", upload.array("files"), verify, async (req, res) => {
  console.log(req.files.map((ele) => ele.filename));
  res.send(req.files.map((ele) => ele.filename));
});

//Assign subcontractor

router.post("/update", upload.array("files"), verify, async (req, res) => {
  for (var i = 0; i < req.body.tasks.length; i++) {
    await Task.findByIdAndUpdate(req.body.tasks[i]._id, req.body.taskObject)
      .then((newTask) => {
        //var upload = multer({ storage: storage }).array('files')

        req.body.taskHistory.performedDate = new Date();
        req.body.taskHistory.performedBy = req.user.id;

        newTask.taskHistory.push(req.body.taskHistory);

        newTask.siteID = req.body.tasks[i].siteID;
        newTask.siteName = req.body.tasks[i].siteName;

        newTask
          .save()
          .then(() => {
            console.log("Task saved successfully");
            //console.log(newTask)

            console.log(
              new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
            );
          })
          .catch((err) => {
            console.log("error occured during updating a task" + err);
            res.json({
              msg: "error occured during updating a task",
              variant: "error",
            });
          });
      })
      .catch((err) => {
        console.log("Error occured during finding a task" + err);
        res.json({
          msg: "Error occured during finding a task",
          variant: "error",
        });
      });
  }
  res.json({
    msg: i + " Task/s (" + ") updated successfully",
    variant: "success",
  });
});

//Get Files
router.get("/file/:fileName", verify, async (req, res) => {
  // console.log(req.params.fileName);
  res.download("./public/" + req.params.fileName);
});

// Update, Update data in a task
router.put("/update/:taskId", verify, async (req, res) => {
  await Task.findByIdAndUpdate(
    req.params.taskId,
    req.body.taskObject,
    req.body.handOverDataChange
  )

    .then(async (task) => {
      req.body.taskHistory.performedDate = new Date();
      req.body.taskHistory.performedBy = req.user.id;

      task.taskHistory.push(req.body.taskHistory);

      if (
        req.body.taskObject.taskStatus === "BOQ submitted" ||
        req.body.taskObject.taskStatus === "BOQ Verified_0" ||
        req.body.taskObject.taskStatus === "BOQ Verified_1" ||
        req.body.taskObject.taskStatus === "BOQ Verified_2" ||
        req.body.taskObject.taskStatus === "BOQ Approved" ||
        req.body.taskObject.taskStatus === "BOQ Rejected"
      ) {
        // console.log(req.body);
        await Boq.create(req.body)
          .then((newBoq) => {
            newBoq.taskRef = req.params.taskId;
            newBoq.sumbittedDate = new Date();
            newBoq.sumbittedBy = req.user.id;
            newBoq.totalCost = req.body.totalCost;

            task.boqs.push(newBoq._id);

            //console.log(newBoq)
            newBoq
              .save()
              .then(() => {
                console.log("BOQ Saved successfully");
                //res.json({alart:'BOQ Saved successfully', severity: 'success'})
              })
              .catch((err) => {
                console.log("error occured during BOQ saving" + err);
                //res.json({alart:'Error occured during BOQ saving', severity: 'error'})
              });
          })
          .catch((err) => {
            console.log("error occured during BOQ creation" + err);
            //res.json({alart:'Error occured during BOQ creation', severity: 'error'})
            //res.json("error occured during BOQ creation")
          });
      }

      task
        .save()
        .then(() => {
          console.log("Task updated successfully during Task Acceptance");
          res.json({ alart: "Task updated successfully", severity: "success" });
        })
        .catch((err) => {
          console.log("error occured during Task Acceptance" + err);
          res.json({
            alart: "Error occured during updating task",
            severity: "error",
          });
        });
    })
    .catch((err) => {
      console.log("error occured during updating a task" + err);
      res.json({
        alart: "Error occured during updating a task",
        severity: "error",
      });
    });
});

// Your Express router definition
router.put("/update/:taskId", verify, async (req, res) => {
  const changeHandOverUserId = req.body.handOverDataChange.changeHandOverUser;
  // console.log(changeHandOverUserId);
  // console.log(req.params.taskId);
  try {
    // Get the handover change document
    const updatedHandover = await handoverChanges.find({
      taskRefID: req.params.taskId,
    });

    // Assign the changeHandoverApprover property
    updatedHandover[0].changeHandoverApprover = changeHandOverUserId;

    // Save the updated handover change document
    await updatedHandover[0].save();

    res.status(200).json(updatedHandover);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//DELETE, Delete a task
router.delete("/delete/:taskId", verify, async (req, res) => {
  if (req.user.isAdmin) {
    await Task.findByIdAndDelete(req.params.taskId)
      .then(() => {
        console.log("Task deleted successfully");
        res.json("Task deleted successfully");
      })
      .catch((err) => {
        console.log("error occured during deleting a task" + err);
      });
  } else {
    res.status(403).json("You cannot delete tasks");
  }
});

router.put("/boqProjectRequirement/:id", verify, async (req, res) => {
  try {
    const promises = [];
    req.body.forEach(async (item) => {
      // Use await here to ensure the update is completed before moving to the next iteration
      await Task.findByIdAndUpdate(item._id, {
        boqprojectrequirement: req.params.id,
      });
    });

    // Wait for all updates to complete
    await Promise.all(promises);

    return res.json({
      msg: "Tasks updated successfully",
      variant: "success",
    });
  } catch (error) {
    console.error("Error updating documents:", error);
    res.json({
      alert: "Error occurred during updating tasks",
      severity: "error",
    });
  }
});

//Get tasks based on Company,Div,User of a task
router.get("/gettasks", verify, async (req, res) => {
  // console.log(req.user.visbilityBasedOn);
  // console.log(req.user.userDiv);
  let chartData;
  switch (req.user.visbilityBasedOn) {
    case "Admin":
      await Task.find({})
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "mobileNo" },
        ])
        .then((tasks) => {
          chartData = getChartData(tasks);
          res.send({ tasks: tasks, chartData: chartData });
        })
        .catch((err) => {
          console.log("error occured during read mobitel company tasks" + err);
        });
      break;
    case "Planning":
      await Task.find({})
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "mobileNo" },
        ])
        .then((tasks) => {
          //console.log(tasks)
          chartData = getChartData(tasks);
          res.send({ tasks: tasks, chartData: chartData });
        })
        .catch((err) => {
          console.log("error occured during read mobitel company tasks" + err);
        });
      break;
    case "Subcon":
      await Task.find({ assignedSubcon: req.user.company })
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "mobileNo" },
        ])
        .then((tasks) => {
          chartData = getChartData(tasks);
          res.send({ tasks: tasks, chartData: chartData });
        })
        .catch((err) => {
          console.log("error occured during read subcon company tasks" + err);
        });
      break;
    case "Project_Div_Head":
      await Task.find({ taskAssignedDiv: req.user.userDiv })
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "mobileNo" },
        ])
        .then((tasks) => {
          chartData = getChartData(tasks);
          res.send({ tasks: tasks, chartData: chartData });
        })
        .catch((err) => {
          console.log("error occured during read specific div tasks" + err);
        });
      break;
    case "Project_TO":
      await Task.find({ assignedMobitelOfficer: req.user.id })
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "mobileNo" },
        ])
        .then((tasks) => {
          chartData = getChartData(tasks);
          res.send({ tasks: tasks, chartData: chartData });
        })
        .catch((err) => {
          console.log("error occured during read specific user tasks" + err);
        });
      break;
    case "Project_PM":
      await Task.find({ assignedProjectManager: req.user.id })
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "mobileNo" },
        ])
        .then((tasks) => {
          chartData = getChartData(tasks);
          res.send({ tasks: tasks, chartData: chartData });
        })
        .catch((err) => {
          console.log("error occured during read specific user tasks" + err);
        });
      break;
    case "Project_Coor":
      await Task.find({ taskAssignedDiv: req.user.userDiv })
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "mobileNo" },
        ])
        .then((tasks) => {
          chartData = getChartData(tasks);
          res.send({ tasks: tasks, chartData: chartData });
          console.log("Project_Coor");
        })
        .catch((err) => {
          console.log("error occured during read specific div tasks" + err);
        });
      break;

    case "Vender":
      await Task.find({ assignedSubcon: req.user.company })
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "mobileNo" },
        ])
        .then((tasks) => {
          chartData = getChartData(tasks);
          res.send({ tasks: tasks, chartData: chartData });
          console.log("Vender");
        })
        .catch((err) => {
          console.log("error occured during read specific div tasks" + err);
        });
      break;
  }
});

//Get tasks based on Company,Div,User of a task
router.get("/gettasks/:id", verify, async (req, res) => {
  // console.log(req.params.id);
  let filteredTasks;
  switch (req.user.visbilityBasedOn) {
    case "Admin":
      await Task.find({})
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "name mobileNo" },
        ])
        .then((tasks) => {
          //console.log(tasks)

          filteredTasks = getFilteredTasks(req, tasks);

          res.send({ tasks: filteredTasks });
        })
        .catch((err) => {
          console.log("error occured during read mobitel company tasks" + err);
        });
      break;
    case "Planning":
      await Task.find({})
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "name mobileNo" },
        ])
        .then((tasks) => {
          //console.log(tasks)
          filteredTasks = getFilteredTasks(req, tasks);

          res.send({ tasks: filteredTasks });
        })
        .catch((err) => {
          console.log("error occured during read mobitel company tasks" + err);
        });
      break;
    case "Subcon":
      await Task.find({ assignedSubcon: req.user.company })
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "name mobileNo" },
        ])
        .then((tasks) => {
          filteredTasks = getFilteredTasks(req, tasks);

          res.send({ tasks: filteredTasks });
        })
        .catch((err) => {
          console.log("error occured during read subcon company tasks" + err);
        });
      break;
    case "Project_Div_Head":
      await Task.find({ taskAssignedDiv: req.user.userDiv })
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "name mobileNo" },
        ])
        .then((tasks) => {
          filteredTasks = getFilteredTasks(req, tasks);

          res.send({ tasks: filteredTasks });
        })
        .catch((err) => {
          console.log("error occured during read specific div tasks" + err);
        });
      break;
    case "Project_TO":
      await Task.find({ assignedMobitelOfficer: req.user.id })
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "name mobileNo" },
        ])
        .then((tasks) => {
          filteredTasks = getFilteredTasks(req, tasks);

          res.send({ tasks: filteredTasks });
        })
        .catch((err) => {
          console.log("error occured during read specific user tasks" + err);
        });
      break;
    case "Project_PM":
      await Task.find({ assignedProjectManager: req.user.id })
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "name mobileNo" },
        ])
        .then((tasks) => {
          filteredTasks = getFilteredTasks(req, tasks);

          res.send({ tasks: filteredTasks });
        })
        .catch((err) => {
          console.log("error occured during read specific user tasks" + err);
        });
      break;
    case "Project_Coor":
      await Task.find({ taskAssignedDiv: req.user.userDiv })
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "name mobileNo" },
        ])
        .then((tasks) => {
          filteredTasks = getFilteredTasks(req, tasks);

          res.send({ tasks: filteredTasks });
          console.log("Project_Coor");
        })
        .catch((err) => {
          console.log("error occured during read specific div tasks" + err);
        });
      break;
    case "Vender":
      await Task.find({ assignedSubcon: req.user.company })
        .populate([
          { path: "taskHistory.performedBy", select: "name" },
          "assignedSubcon",
          "assignedMobitelOfficer",
          "boqs",
          { path: "approvalPath.assignedOfficer", select: "name mobileNo" },
        ])
        .then((tasks) => {
          filteredTasks = getFilteredTasks(req, tasks);

          res.send({ tasks: filteredTasks });
        })
        .catch((err) => {
          console.log("error occured during read subcon company tasks" + err);
        });
      break;
  }
});

//Get filtered tasks based on the user visibility
function getFilteredTasks(req, tasks) {
  switch (req.params.id) {
    case "toBeVerifedBoq":
      return tasks.filter(
        (obj) =>
          (obj.taskStatus === "BOQ submitted" &&
            obj.approvalPath[0].assignedOfficer.id === req.user.id) ||
          (obj.taskStatus === "BOQ Verified_0" &&
            obj.approvalPath.length === 4 &&
            obj.approvalPath[1].assignedOfficer.id === req.user.id) ||
          (obj.taskStatus === "BOQ Verified_0" &&
            obj.approvalPath.length === 3 &&
            obj.approvalPath[1].assignedOfficer.id === req.user.id) ||
          (obj.taskStatus === "BOQ Verified_1" &&
            obj.approvalPath[2].assignedOfficer.id === req.user.id)
      );

    case "toBeApprovedBoq":
      return tasks.filter(
        (obj) =>
          obj["taskStatus"] === "BOQ Verified_2" &&
          obj.approvalPath[obj.approvalPath.length - 1].assignedOfficer.id ===
            req.user.id
      );

    case "toBeRaisedPr":
      return tasks.filter((obj) => obj["taskStatus"] === "BOQ Approved");

    case "alreadyWithdrawTask":
      return tasks.filter((obj) => obj["taskStatus"] === "Withdraw");

    case "toBeSubmitedBoq":
      return tasks.filter(
        (obj) =>
          (obj["taskStatus"] === "Task completed" ||
            obj["taskStatus"] === "BOQ Rejected") &&
          (obj["boqprojectrequirement"] === true ||
            obj["boqprojectrequirement"] === undefined)
      );
    case "toBeCompletedTasks":
      return tasks.filter((obj) => obj["taskStatus"] === "Task commenced");

    case "toBeSubconAllocated":
      return tasks.filter(
        (obj) =>
          obj["taskStatus"] === "Task handed over" ||
          obj["taskStatus"] === "Task rejected"
      );

    case "toBeModifiedTask":
      return tasks.filter(
        (obj) =>
          obj["taskStatus"] !== "Task handed over" ||
          obj["taskStatus"] !== "Task rejected" ||
          obj["taskStatus"] !== "BOQ Approved" ||
          obj["taskStatus"] !== "PR Raised" ||
          obj["taskStatus"] !== "Withdraw"
      );

    case "toBeAccepted":
      // return tasks.filter((obj) => {
      //   return (
      //     obj["taskStatus"] === "Subcon allocated" &&
      //     obj.assignedSubcon.companyCategory !== "Vender"
      //   );
      // });

      return tasks.filter((obj) => obj["taskStatus"] === "Subcon allocated");

    case "toBeCommenced":
      return tasks.filter((obj) => obj["taskStatus"] === "Task accepted");

    case "alreadyWithdrawTask": // create for the withdraw tasks
      return tasks.filter((obj) => obj["taskStatus"] === "Withdraw");

    case "alreadyCompletedTask": // create for the completed tasks
      return tasks.filter((obj) => obj["taskStatus"] === "PR Raised");

    case "alreadyCompletedTaskVender":
      return tasks.filter(
        (obj) =>
          obj["boqprojectrequirement"] === false &&
          obj["patStatus"] === "PAT Pass" &&
          obj["onairStatus"] === "Site On-Air"
      );
    case "sideNav":
      return {
        setSubconCount: tasks.filter(
          (obj) =>
            obj["taskStatus"] === "Task handed over" ||
            obj["taskStatus"] === "Task rejected"
        ).length,
        setAcceptCount: tasks.filter(
          (obj) => obj["taskStatus"] === "Subcon allocated"
        ).length,
        setworkcomCount: tasks.filter(
          (obj) => obj["taskStatus"] === "Task accepted"
        ).length,
        setworkcompleteCount: tasks.filter(
          (obj) => obj["taskStatus"] === "Task commenced"
        ).length,
        setboqCount: tasks.filter(
          (obj) =>
            (obj["taskStatus"] === "Task completed" ||
              obj["taskStatus"] === "BOQ Rejected") &&
            (obj["boqprojectrequirement"] === true ||
              obj["boqprojectrequirement"] === undefined)
        ).length,
        setverifyBoqCount: tasks.filter(
          (obj) =>
            (obj.taskStatus === "BOQ submitted" &&
              obj.approvalPath[0].assignedOfficer.id === req.user.id) ||
            (obj.taskStatus === "BOQ Verified_0" &&
              obj.approvalPath.length === 4 &&
              obj.approvalPath[1].assignedOfficer.id === req.user.id) ||
            (obj.taskStatus === "BOQ Verified_0" &&
              obj.approvalPath.length === 3 &&
              obj.approvalPath[1].assignedOfficer.id === req.user.id) ||
            (obj.taskStatus === "BOQ Verified_1" &&
              obj.approvalPath[2].assignedOfficer.id === req.user.id)
        ).length,
        setraisePrCount: tasks.filter(
          (obj) => obj["taskStatus"] === "BOQ Approved"
        ).length,
        setapproveBoqCount: tasks.filter(
          (obj) =>
            obj["taskStatus"] === "BOQ Verified_2" &&
            obj.approvalPath[obj.approvalPath.length - 1].assignedOfficer.id ===
              req.user.id
        ).length,
        setraisePrCount: tasks.filter(
          (obj) => obj["taskStatus"] === "BOQ Approved"
        ).length,
        setwithdrawTaskCount: tasks.filter(
          (obj) => obj["taskStatus"] === "Withdraw"
        ).length,
        // setcompletedTaskCount:tasks.filter((obj) => ((obj["taskStatus"] === 'PR Raised'))).length,   // Count not required to see in nav panel

        setpendingCommissioningTaskCount: tasks.filter(
          (obj) =>
            obj["comStatus"] !== "Site Commissioned" &&
            obj["taskStatus"] !== "Task handed over" &&
            obj["taskStatus"] !== "Subcon allocated" &&
            obj["taskStatus"] !== "Task rejected" &&
            obj["taskStatus"] !== "Task accepted" &&
            obj["taskStatus"] !== "Task commenced" &&
            obj["taskStatus"] !== "Withdraw"
        ).length,
        setpendingSARCount: tasks.filter(
          (obj) =>
            obj["sarStatus"] !== "SAR Pass" &&
            obj["taskStatus"] !== "Task handed over" &&
            obj["taskStatus"] !== "Subcon allocated" &&
            obj["taskStatus"] !== "Task rejected" &&
            obj["taskStatus"] !== "Task accepted" &&
            obj["taskStatus"] !== "Task commenced" &&
            obj["taskStatus"] !== "Withdraw"
        ).length,
        setpendingPATCount: tasks.filter(
          (obj) =>
            obj["patStatus"] !== "PAT Pass" &&
            obj["taskStatus"] !== "Task handed over" &&
            obj["taskStatus"] !== "Subcon allocated" &&
            obj["taskStatus"] !== "Task rejected" &&
            obj["taskStatus"] !== "Task accepted" &&
            obj["taskStatus"] !== "Task commenced" &&
            obj["taskStatus"] !== "Withdraw"
        ).length,
        setpendingOnairCount: tasks.filter(
          (obj) =>
            obj["onairStatus"] !== "Site On-Air" &&
            obj["taskStatus"] !== "Task handed over" &&
            obj["taskStatus"] !== "Subcon allocated" &&
            obj["taskStatus"] !== "Task rejected" &&
            obj["taskStatus"] !== "Task accepted" &&
            obj["taskStatus"] !== "Task commenced" &&
            obj["taskStatus"] !== "Withdraw"
        ).length,
      };

    case "venderSideNav":
      return {
        setSubconCount: tasks.filter(
          (obj) =>
            obj["taskStatus"] === "Task handed over" ||
            obj["taskStatus"] === "Task rejected"
        ).length,
        setAcceptCount: tasks.filter(
          (obj) => obj["taskStatus"] === "Subcon allocated"
        ).length,
        setworkcomCount: tasks.filter(
          (obj) => obj["taskStatus"] === "Task accepted"
        ).length,
        setworkcompleteCount: tasks.filter(
          (obj) => obj["taskStatus"] === "Task commenced"
        ).length,
        setboqCount: tasks.filter(
          (obj) =>
            (obj["taskStatus"] === "Task completed" ||
              obj["taskStatus"] === "BOQ Rejected") &&
            (obj["boqprojectrequirement"] === true ||
              obj["boqprojectrequirement"] === undefined)
        ).length,
        setverifyBoqCount: tasks.filter(
          (obj) =>
            (obj.taskStatus === "BOQ submitted" &&
              obj.approvalPath[0].assignedOfficer.id === req.user.id) ||
            (obj.taskStatus === "BOQ Verified_0" &&
              obj.approvalPath.length === 4 &&
              obj.approvalPath[1].assignedOfficer.id === req.user.id) ||
            (obj.taskStatus === "BOQ Verified_0" &&
              obj.approvalPath.length === 3 &&
              obj.approvalPath[1].assignedOfficer.id === req.user.id) ||
            (obj.taskStatus === "BOQ Verified_1" &&
              obj.approvalPath[2].assignedOfficer.id === req.user.id)
        ).length,
        setraisePrCount: tasks.filter(
          (obj) => obj["taskStatus"] === "BOQ Approved"
        ).length,
        setapproveBoqCount: tasks.filter(
          (obj) =>
            obj["taskStatus"] === "BOQ Verified_2" &&
            obj.approvalPath[obj.approvalPath.length - 1].assignedOfficer.id ===
              req.user.id
        ).length,
        setraisePrCount: tasks.filter(
          (obj) => obj["taskStatus"] === "BOQ Approved"
        ).length,
        setwithdrawTaskCount: tasks.filter(
          (obj) => obj["taskStatus"] === "Withdraw"
        ).length,
        // setcompletedTaskCount:tasks.filter((obj) => ((obj["taskStatus"] === 'PR Raised'))).length,   // Count not required to see in nav panel

        setpendingCommissioningTaskCount: tasks.filter(
          (obj) =>
            obj["comStatus"] !== "Site Commissioned" &&
            obj["taskStatus"] !== "Task handed over" &&
            obj["taskStatus"] !== "Subcon allocated" &&
            obj["taskStatus"] !== "Task rejected" &&
            obj["taskStatus"] !== "Task accepted" &&
            obj["taskStatus"] !== "Task commenced" &&
            obj["taskStatus"] !== "Withdraw"
        ).length,
        setpendingSARCount: tasks.filter(
          (obj) =>
            obj["sarStatus"] !== "SAR Pass" &&
            obj["taskStatus"] !== "Task handed over" &&
            obj["taskStatus"] !== "Subcon allocated" &&
            obj["taskStatus"] !== "Task rejected" &&
            obj["taskStatus"] !== "Task accepted" &&
            obj["taskStatus"] !== "Task commenced" &&
            obj["taskStatus"] !== "Withdraw"
        ).length,
        setpendingPATCount: tasks.filter(
          (obj) =>
            obj["patStatus"] !== "PAT Pass" &&
            obj["taskStatus"] !== "Task handed over" &&
            obj["taskStatus"] !== "Subcon allocated" &&
            obj["taskStatus"] !== "Task rejected" &&
            obj["taskStatus"] !== "Task accepted" &&
            obj["taskStatus"] !== "Task commenced" &&
            obj["taskStatus"] !== "Withdraw"
        ).length,
        setpendingOnairCount: tasks.filter(
          (obj) =>
            obj["onairStatus"] !== "Site On-Air" &&
            obj["taskStatus"] !== "Task handed over" &&
            obj["taskStatus"] !== "Subcon allocated" &&
            obj["taskStatus"] !== "Task rejected" &&
            obj["taskStatus"] !== "Task accepted" &&
            obj["taskStatus"] !== "Task commenced" &&
            obj["taskStatus"] !== "Withdraw"
        ).length,
      };

    // case 'toSubmitCommission':                                                           // create for the commission pending tasks
    //     return tasks.filter((obj) => (obj["taskStatus"] !== 'Task handed over'))         // Test codes
    //     return tasks.filter((obj) => (obj["taskStatus"] !== 'Subcon allocated'))
    //     return tasks.filter((obj) => (obj["taskStatus"] !== 'Task rejected'))
    //     return tasks.filter((obj) => (obj["taskStatus"] !== 'Task accepted'))
    //     return tasks.filter((obj) => (obj["taskStatus"] !== 'Task commenced'))
    //     return tasks.filter((obj) => (obj["taskStatus"] !== 'Withdraw'))

    case "toSubmitCommission":
      return tasks.filter(
        (obj) =>
          obj["taskStatus"] !== "Task handed over" &&
          obj["taskStatus"] !== "Subcon allocated" &&
          obj["taskStatus"] !== "Task rejected" &&
          obj["taskStatus"] !== "Task accepted" &&
          obj["taskStatus"] !== "Task commenced" &&
          obj["taskStatus"] !== "Withdraw"
      );
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
        if (foundUser.adminRights) {
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
    console.log(
      "You need to be logged in to do that!!, Admin Rights, Task Routes"
    );
    res.json(
      "You need to be logged in to do that!!, Admin Rights, Task Routes"
    );
    //res.redirect("/login");
  }
}

// API for Imp Dashboard

router.get("/webapi_project", async (req, res) => {
  if (
    req.body.username === "WEBAPI@PROJECT" &&
    req.body.password === "WEBAPI@PROJECT"
  )
    await Task.find({})
      .populate([
        { path: "taskHistory.performedBy", select: "name" },
        "assignedSubcon",
        "assignedMobitelOfficer",
        "boqs",
        { path: "approvalPath.assignedOfficer", select: "mobileNo" },
      ])
      .then((tasks) => {
        res.send({ tasks: tasks });
      })
      .catch((err) => {
        console.log("error occured during read mobitel company tasks" + err);
      });
});

/////////////////

function getChartData(tasks) {
  var chartData = [];
  var date = new Date();
  date.setDate(date.getDate() - 30);

  for (var i = 0; i <= 30; i++) {
    chartData[i] = {
      date: date.toISOString().split("T")[0],
      subconAllocated: tasks
        .filter(
          (obj) =>
            typeof obj.taskHistory.find(
              (x) => x.taskStatus === "Subcon allocated"
            ) !== "undefined"
        )
        .filter(
          (obj) =>
            obj.taskHistory
              .find((x) => x.taskStatus === "Subcon allocated")
              .performedDate.toISOString()
              .split("T")[0] == date.toISOString().split("T")[0]
        ).length,
      taskAccept: tasks
        .filter(
          (obj) =>
            typeof obj.taskHistory.find(
              (x) => x.taskStatus === "Task accepted"
            ) !== "undefined"
        )
        .filter(
          (obj) =>
            obj.taskHistory
              .find((x) => x.taskStatus === "Task accepted")
              .performedDate.toISOString()
              .split("T")[0] == date.toISOString().split("T")[0]
        ).length,
      taskComplete: tasks
        .filter(
          (obj) =>
            typeof obj.taskHistory.find(
              (x) => x.taskStatus === "Task completed"
            ) !== "undefined"
        )
        .filter(
          (obj) =>
            obj.taskHistory
              .find((x) => x.taskStatus === "Task completed")
              .performedDate.toISOString()
              .split("T")[0] == date.toISOString().split("T")[0]
        ).length,
      boqSubmitted: tasks
        .filter(
          (obj) =>
            typeof obj.taskHistory.find(
              (x) => x.taskStatus === "BOQ submitted"
            ) !== "undefined"
        )
        .filter(
          (obj) =>
            obj.taskHistory
              .find((x) => x.taskStatus === "BOQ submitted")
              .performedDate.toISOString()
              .split("T")[0] == date.toISOString().split("T")[0]
        ).length,
      boqApproved: tasks
        .filter(
          (obj) =>
            typeof obj.taskHistory.find(
              (x) => x.taskStatus === "BOQ approved"
            ) !== "undefined"
        )
        .filter(
          (obj) =>
            obj.taskHistory
              .find((x) => x.taskStatus === "BOQ approved")
              .performedDate.toISOString()
              .split("T")[0] == date.toISOString().split("T")[0]
        ).length,
      prRaised: tasks
        .filter(
          (obj) =>
            typeof obj.taskHistory.find((x) => x.taskStatus === "PR Raised") !==
            "undefined"
        )
        .filter(
          (obj) =>
            obj.taskHistory
              .find((x) => x.taskStatus === "PR Raised")
              .performedDate.toISOString()
              .split("T")[0] == date.toISOString().split("T")[0]
        ).length,
    };

    date.setDate(date.getDate() + 1);
  }
  return chartData;
}
function createModelForName(name) {
  let Schema = mongoose.Schema;
  if (!(name in establishedModels)) {
    var Any = new Schema({ any: Schema.Types.Mixed });
    establishedModels[name] = mongoose.model(name, Any);
  }
  return establishedModels[name];
}

async function sendEmail(message) {
  try {
    const transportOptions = {
      host: "webmail.mobitel.lk",
      port: "25",
      auth: { user: "projectonline@mobitel.lk", pass: "Mobitel@mis" },
      secureConnection: true,
      tls: { rejectUnauthorized: false },
    };

    const mailTransport = nodemailer.createTransport(transportOptions);

    await mailTransport.sendMail({
      from: message.from,
      to: message.to,
      replyTo: message.from,
      subject: message.subject,
      text: message.text,
      html: message.html,
      cc: message.cc,
      attachments: message.attachments,
    });
    console.log("Mail sent sucessfully");
  } catch (err) {
    console.error(`sendEmail: An error occurred:`, err);
  }
}

export default router;
