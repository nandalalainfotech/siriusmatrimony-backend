import mongoose from "mongoose";
mongoose.pluralize(null);
const language001mb = mongoose.model(
    "language001mb",
    new mongoose.Schema({
        'languageid': Number,
        'languagename': String,
        'languagedesc': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String,
        'subscid': {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subscriberdetails001wb'
        }
    }, { timestamps: false })
);
export default language001mb;
