import mongoose from "mongoose";

mongoose.pluralize(null);

const religion001mb = mongoose.model(
	"religion001mb",
	new mongoose.Schema(
		{
			'religionid': Number,
			'religionname': String,
			'religiondesc': String,
			'status': String,
			'inserteduser': String,
			'inserteddatetime': Date,
			'updateduser': String,
			'updateddatetime': Date
		},
		{ timestamps: false }
	)
);

export default religion001mb;

