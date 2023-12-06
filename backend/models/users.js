import mongoose from "mongoose"
import passportLocalMongoose from "passport-local-mongoose"

const userSchema = new mongoose.Schema({
	name:	String,
	email:	{type:String, required: true, unique: true},
	company:	{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Company"
	},
	userDiv:	String,
	mobileNo:	{type:Number, required: true, unique: true},
	username:	{type:String, required: true, unique: true},
	password:	{type:String, required: true},
	adminRights:	{type:Boolean, default:false},
    activeStatus:	{type:Boolean, default:true},
	userCanAssignForTask:	Boolean,
	visbilityBasedOn: String,
	isProjectCoordinator:Boolean,
    projectCoordinator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	approvalPath: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	}],
    createdBy:{
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
    date:{
        type: Date,
        default: Date.now
    }
	
},
{timestamps: true}
);

userSchema.plugin(passportLocalMongoose);

export default mongoose.model("User",userSchema)