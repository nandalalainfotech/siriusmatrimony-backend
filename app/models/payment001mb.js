import mongoose from "mongoose";

mongoose.pluralize(null);

const payment001mb = mongoose.model(
    "payment001mb",
    new mongoose.Schema({
        'payment': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String,
        'subpid':{
            type: mongoose.Types.ObjectId,
            ref: 'subscriptionmaster001mb'
        },
        'subcid':{
            type: mongoose.Types.ObjectId,
            ref: 'subscriberdetails001wb'
        },
    }, { timestamps: false })
);

export default payment001mb;