import mongoose from "mongoose";

mongoose.pluralize(null);

const role001wb = mongoose.model(
    "role001wb",
    new mongoose.Schema({
        'rolename': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date
    }, { timestamps: false })
);

export default role001wb;