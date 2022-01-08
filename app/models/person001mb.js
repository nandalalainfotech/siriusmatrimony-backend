import mongoose from "mongoose";

mongoose.pluralize(null);

const person001mb = mongoose.model(
    "person001mb",
    new mongoose.Schema({
            'subscriberdetails': [{ type: mongoose.Types.ObjectId, ref: 'subscriberdetails001mb' }],
            'user': [{ type: mongoose.Types.ObjectId, ref: 'user001mb' }],
            'inserteduser': String,
            'inserteddatetime': Date,
            'updateduser': String,
            'updateddatetime': Date,
        },

        { timestamps: false })
);

export default person001mb;