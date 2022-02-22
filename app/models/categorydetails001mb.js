import mongoose from "mongoose";

mongoose.pluralize(null);

const categorydetails001mb = mongoose.model(
	"categorydetails001mb",
	new mongoose.Schema(
		{
			'personid':  {
				type: mongoose.Types.ObjectId,
				ref: 'person001mb'
			},
			// 'catcode': String,
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

