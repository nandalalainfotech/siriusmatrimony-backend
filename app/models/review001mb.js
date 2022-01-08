import mongoose from "mongoose";

mongoose.pluralize(null);
// const ObjectId = mongoose.Types.ObjectId;
const review001mb = mongoose.model(
    "review001mb",
    new mongoose.Schema({
        'comments': String,
        'status': String,
        'rating':  Number,
     'user001mb':[{type: mongoose.Schema.Types.ObjectId, ref: 'user001mb' }],
    },
    { timestamps: false })
);

export default review001mb;