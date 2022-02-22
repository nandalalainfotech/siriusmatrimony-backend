import mongoose from "mongoose";

mongoose.pluralize(null);

const regionaldetails001mb = mongoose.model(
	"regionaldetails001mb",
	new mongoose.Schema(
		{
			'regionalname': String,
			'regionaldesc': String,
			'status': String,
			'inserteduser': String,
			'inserteddatetime': String,
			'updateduser': String,
			'updateddatetime': String,
			'personid': {
				type: mongoose.Types.ObjectId,
				ref: 'person001mb'
			},
		},
		{ timestamps: false }
	)
);

export default regionaldetails001mb;

