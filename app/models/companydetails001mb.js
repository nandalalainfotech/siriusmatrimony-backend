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
			'regionalid': {
				type: mongoose.Types.ObjectId,
				ref: 'regionaldetails001mb'
			},
			'status': String,
			'inserteduser': String,
			'inserteddatetime': Date,
			'updateduser': String,
			'updateddatetime': Date,
			'subscid':  {
				type: mongoose.Types.ObjectId,
				ref: 'subscriberdetails001wb'
			},
		},
		{ timestamps: false }
	)
);
export default companydetails001mb;
