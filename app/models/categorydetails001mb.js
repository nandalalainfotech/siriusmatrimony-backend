import mongoose from "mongoose";

mongoose.pluralize(null);

const categorydetails001mb = mongoose.model(
	"categorydetails001mb",
	new mongoose.Schema(
		{
			'catcode': String,
			'catname': String,
			'status': String,
			'inserteduser': String,
			'inserteddatetime': Date,
			'updateduser': String,
			'updateddatetime': Date
		},
		{ timestamps: false }
	)
);
export default categorydetails001mb;

