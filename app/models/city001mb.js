import mongoose from "mongoose";


mongoose.pluralize(null);

const city001mb = mongoose.model(
	"city001mb",
	new mongoose.Schema(
		{
			'stateid': {
				type: mongoose.Schema.Types.ObjectId,
				ref: "state001mb",
			},
			'cityname': String,
			'citydesc': String,
			'status': String,
			'inserteduser': String,
			'inserteddatetime': String,
			'updateddatetime': String,
			'updateduser': String,

		},
		{ timestamps: false }
	)
);
export default city001mb;




