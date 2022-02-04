import mongoose from "mongoose";

mongoose.pluralize(null);

const person001mb = mongoose.model(
    "person001mb",
    new mongoose.Schema({
            'personid':Number,
            'subscid': { type: mongoose.Types.ObjectId, ref: 'subscriberdetails001mb' },
            'userid': { type: mongoose.Types.ObjectId, ref: 'user001mb' },
            'inserteduser': String,
            'status': String,
            'inserteddatetime': String,
            'updateduser': String,
            'updateddatetime': String,
        },

        { timestamps: false })
);

export default person001mb;