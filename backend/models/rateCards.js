import mongoose from "mongoose"

const rateCardSchema = new mongoose.Schema({
	rateCardDiv:	String,
    rateCardSubcon: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Company"
	},
	uploadedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	uploadedDate: Date,
    rateCardValidFrom:	Date,
	rateCardValidTo:	Date,
	rateCardItems: [{
		erpCode: String,
		itemNo: String,
        itemDiscreption: String,
        itemUom:String,
        itemRate: Number,
        itemComment: String
	}],
	activeStatus:	{type:Boolean, default:true},
},
{timestamps: true}
);

export default mongoose.model("RateCard",rateCardSchema)