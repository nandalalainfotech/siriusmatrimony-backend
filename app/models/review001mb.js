import mongoose from "mongoose";

mongoose.pluralize(null);

const review001mb = mongoose.model(
    "review001mb",
    new mongoose.Schema({
        'body': String,
        'username': String,
        'rating':  Number
    },
        // {
        //     toJSON: {
        //   virtuals: true,
        // }},
    { timestamps: false })
);

export default review001mb;