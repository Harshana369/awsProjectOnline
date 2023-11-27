import mongoose from "mongoose";

const taskChangesSchema = new mongoose.Schema(
  {
    taskRef: String,
    newProperties: {},
    existingProperties: {},
    headerProperties: {},
    siteID: String,
    siteName: String,
    project: String,
    subProject: String,
    taskRefID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
    assignedProjectManager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: String,

    changeHandoverApprover: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    taskStatus: String,
    comment: String,
    comStatus: String,
    sarStatus: String,
    patStatus: String,
    onairStatus: String,
    approveComment: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

export default mongoose.model("HandoverChanges", taskChangesSchema);
