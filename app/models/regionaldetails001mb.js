import mongoose from "mongoose";

mongoose.pluralize(null);

const regionaldetails001mb = mongoose.model(
	"regionaldetails001mb",
	new mongoose.Schema(
		{
			'regionalid': Number,
			'regionalname': String,
			'regionaldesc': String,
			'status': String,
			'inserteduser': String,
			'inserteddatetime': Date,
			'updateduser': String,
			'updateddatetime': Date
		},
		{ timestamps: false }
	)
);

export default regionaldetails001mb;

