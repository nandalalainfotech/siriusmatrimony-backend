import mongoose from "mongoose";

mongoose.pluralize(null);

const state = mongoose.model(
    "state001mb",
    new mongoose.Schema({
        'stateid': Number,
        'statename': String,
        'statedesc': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date
    }, { timestamps: false })
);

export default state;