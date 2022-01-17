import mongoose from "mongoose";

mongoose.pluralize(null);

const usersample001mb = mongoose.model(
    "usersample001mb",
    new mongoose.Schema({
        'username': String,
        'password': String,
        'securityquestion': String,
        'securityanswer': String,
        'reviews': [{ type: mongoose.Types.ObjectId, ref: 'review001mb' }],
    },

        { timestamps: false })
);

export default usersample001mb;