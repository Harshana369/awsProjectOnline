import mongoose from "mongoose"

const projectTemplateSchema = new mongoose.Schema({
	projectID:	Number,
    project: String,
	subProject: String,
	uploadedDate: Date,
    changedDate: Date,
	toList:[],
	ccList:[],
	properties: {},
	assignedProjectManager:	{
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
},
{timestamps: true}
);

export default mongoose.model("ProjectTemplate",projectTemplateSchema)