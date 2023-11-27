import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    taskRef: String,
    taskAssignedDiv: String,
    taskAssignedFromDiV: String,
    properties: {},
    headerProperties: {},
    projectID: Number,
    project: String,
    // projectManager: {
    // 	type:
    // },
    subProject: String,
    taskHoDate: Date,
    siteID: String,
    siteName: String,
    plannedTaskStartDate: Date,
    targetTaskComDate: Date,
    boqprojectrequirement: Boolean,
    workScope: String,
    assignedSubcon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    assignedProjectManager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    assignedMobitelOfficer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    boqs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Boq",
      },
    ],
    taskassignedSubconOfficer: String,
    taskassignedMobileNo: Number,
    approvalPathChange: Boolean,
    approvalPath: [
      {
        approvalLevel: String,
        assignedOfficer: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    taskHistory: [
      {
        taskStatus: String,
        performedDate: Date,
        comment: String,
        performedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        comStatus: String,
        sarStatus: String,
        patStatus: String,
        onairStatus: String,
      },
    ],
    taskStatus: String,
    comStatus: String,
    sarStatus: String,
    patStatus: String,
    onairStatus: String,
    files: {
      type: Array,
    },
    priority: String,
    PRnumber: String,
    budgetCode: String, // Initially used Budget code(Capex/Opex mixedly used)
    budgetCodeCapex: String, // Newly created For Capex
    budgetCodeOpex: String, // Newly created For Opex
    capexopex: String,

    totalCost: Number,
    CapexPrAmount: Number,
    OpexPrAmount: Number,

    commissionStatus: String, // these 4 created newly
    sarStatus: String,
    patStatus: String,
    onairStatus: String,
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
