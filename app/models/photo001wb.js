import mongoose from "mongoose";

mongoose.pluralize(null);

const photo001wb = mongoose.model(
    "photo001wb",
    new mongoose.Schema({
        'fieldname': String,
        'filename': String,
        'originalname': String,
        'content': Buffer,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date
    },

        { timestamps: false })
);

export default photo001wb;