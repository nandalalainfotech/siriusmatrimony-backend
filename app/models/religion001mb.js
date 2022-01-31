import mongoose from "mongoose";

mongoose.pluralize(null);

const religion001mb = mongoose.model(
    "religion001mb",
    new mongoose.Schema({
        'religionid': Number,
        'religionname': String,
        'religiondesc': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String,
        'subscid': {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subscriberdetails001wb'
        }
    }, { timestamps: false })
);

export default religion001mb;