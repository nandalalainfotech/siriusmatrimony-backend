import mongoose from "mongoose";

mongoose.pluralize(null);

const categorydetails001mb = mongoose.model(
	"categorydetails001mb",
	new mongoose.Schema(
		{
			'catname': String,
			'status': String,
			'inserteduser': String,
			'inserteddatetime': String,
			'updateduser': String,
			'updateddatetime': String
		},
		{ timestamps: false }
	)
);
export default categorydetails001mb;

