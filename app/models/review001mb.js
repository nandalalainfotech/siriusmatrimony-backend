import mongoose from "mongoose";
mongoose.pluralize(null);
const review001mb = mongoose.model(
    "review001mb",
    new mongoose.Schema({
        'comments': String,
        'status': String,
        'rating': Number,
        'user001mb': { type: mongoose.Schema.Types.ObjectId, ref: 'usersample001mb' },
    },
        { timestamps: false })
);

export default review001mb;