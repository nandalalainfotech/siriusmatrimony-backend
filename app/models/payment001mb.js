import mongoose from "mongoose";

mongoose.pluralize(null);

const payment001mb = mongoose.model(
    "payment001mb",
    new mongoose.Schema({
        'subpid': {
            type: mongoose.Types.ObjectId,
            ref: 'subscriberdetails001wb'
        },
        'payid': Number,
        'payment': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String,
        'subscid': {
            type: mongoose.Types.ObjectId,
            ref: 'subscriberdetails001wb'
        }
    }, { timestamps: false })
);

export default payment001mb;