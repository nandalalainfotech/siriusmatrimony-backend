import mongoose from "mongoose";

mongoose.pluralize(null);

const companydetails001mb = mongoose.model(
	"companydetails001mb",
	new mongoose.Schema(
		{
			'companyname': String,
			'address': String,
			'phonenumber': Number,
			'regionalid': {
				type: mongoose.Types.ObjectId,
				ref: 'regionaldetails001mb'
			},
			'status': String,
			'inserteduser': String,
			'inserteddatetime': String,
			'updateduser': String,
			'updateddatetime': String,
		},
		{ timestamps: false }
	)
);
export default companydetails001mb;
