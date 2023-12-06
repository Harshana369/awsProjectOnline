import mongoose from "mongoose"

const boqSchema = new mongoose.Schema({
	boqRevision: Number,
    taskRef: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Task"
	},
	sumbittedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	sumbittedDate: Date,
	boqData: [{
		rateCardDiv:String,
		erpCode: String,
		itemNo: String,
        itemDiscreption: String,
        itemUom:String,
        itemRate: Number,
		itemTotal:Number,
		itemQty:Number,
		capexopexLine: String,	
        itemComment: String
	}],
	totalCost:Number,	
	totalCapexOpexCost:Number, // temporary used to test code	
	
	CapexPrAmount:Number,
	OpexPrAmount:Number,
},
{timestamps: true}
);

export default mongoose.model("Boq",boqSchema)