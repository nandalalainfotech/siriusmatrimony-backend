import mongoose from "mongoose";

mongoose.pluralize(null);

const subscriberprofessionalinfo002wb = mongoose.model(
    "subscriberprofessionalinfo002wb",
    new mongoose.Schema({
        'countryid': Number,
        'countryname': String,
        'countrydesc': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateddatetime': Date,
        'updateduser': String
    }, { timestamps: false })
);

export default subscriberprofessionalinfo002wb;