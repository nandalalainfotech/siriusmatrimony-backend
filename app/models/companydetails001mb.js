import mongoose from "mongoose";

mongoose.pluralize(null);

const companydetails001mb = mongoose.model(
	"companydetails001mb",
	new mongoose.Schema(
		{
			'companycode': String,
			'companyname': String,
			'address': String,
			'phonenumber': Number,
			'regionalid': Number,
			'status': String,
			'inserteduser': String,
			'inserteddatetime': Date,
			'updateduser': String,
			'updateddatetime': Date
		},
		{ timestamps: false }
	)
);
export default companydetails001mb;
