import mongoose from "mongoose";

mongoose.pluralize(null);

const contentmaster001mb = mongoose.model(
	"contentmaster001mb",
	new mongoose.Schema(
		{
			'contentid': Number,
			'name': String,
			'description': String,
			'size': String,
			'quality': String,
			'format': String,
			'status': String,
			'discountflag': Boolean,
			'inserteduser': String,
			'inserteddatetime': Date,
			'updateduser': String,
			'updateddatetime': Date
		},
		{ timestamps: false }
	)
);
export default contentmaster001mb;

