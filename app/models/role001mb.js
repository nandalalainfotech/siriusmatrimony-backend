import mongoose from "mongoose";

mongoose.pluralize(null);

const role001wb = mongoose.model(
    "role001mb",
    new mongoose.Schema({
        'rolename': String
    }, { timestamps: false })
);

export default role001wb;