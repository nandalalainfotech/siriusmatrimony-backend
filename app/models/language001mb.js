import mongoose from "mongoose";
mongoose.pluralize(null);
const language001mb = mongoose.model(
	"language001mb",
	new mongoose.Schema(
		{
	'languageid' : Number,
	'languagename' : String,
	'languagedesc' : String,
	'status' : String,
	'inserteduser' : String,
	'inserteddatetime' : Date,
	'updateduser' : String,
	'updateddatetime' : Date
},
{ timestamps: false }
	)
);
export default language001mb;
// module.exports = mongoose.model('language001mb', language001mbSchema);
