import mongoose from "mongoose";

mongoose.pluralize(null);

const subscriberdetails001wb = mongoose.model(
	"subscriberdetails001wb",
	new mongoose.Schema(
		{
			'regionalid': Number,
			'companycode': Number,
			'catcode': Number,
			'subcatcode': Number,
			'categoryid': Number,
			'subscid': Number,
			'subscname': String,
			'age': Number,
			'sex': String,
			'subscdesc': String,
			'aboutme': String,
			'address': String,
			'phoneno': Number,
			'subscstatus': String,
			'subscapproval': Boolean,
			'approvedby': String,
			'approvedon': String,
			'subscsubspid': Number,
			'inserteduser': String,
			'inserteddatetime': Date,
			'updateduser': String,
			'updateddatetime': Date,
			'status': String
		},
		{ timestamps: false }
	));
	
export default subscriberdetails001wb;
