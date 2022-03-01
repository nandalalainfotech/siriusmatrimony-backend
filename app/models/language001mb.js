import mongoose from "mongoose";
mongoose.pluralize(null);
const language001mb = mongoose.model(
    "language001mb",
    new mongoose.Schema({
        'languagename': String,
        'languagedesc': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String
    }, { timestamps: false })
);
export default language001mb;
