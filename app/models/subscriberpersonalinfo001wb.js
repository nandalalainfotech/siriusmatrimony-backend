import mongoose from "mongoose";

mongoose.pluralize(null);

const subscriberpersonalinfo001wb = mongoose.model(
    "subscriberpersonalinfo001wb",
    new mongoose.Schema({
        'personaldetails': String,
        'hobbies': String,
        'flex1': String,
        'flex2': String,
        'flex3': String,
        'flex4': String,
        'flex5': String,
        'flex6': String,
        'flex7': String,
        'flex8': String,
        'flex9': String,
        'flex10': String,
        'flex11': String,
        'flex12': String,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String
    }, { timestamps: false })
);

export default subscriberpersonalinfo001wb;