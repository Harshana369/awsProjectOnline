import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    companyName: String,
    companyCategory: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    registeredRateCards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ratecard",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Company", companySchema);
