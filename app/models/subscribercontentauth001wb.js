import mongoose from "mongoose";

mongoose.pluralize(null);

const subscribercontentauth001wb = mongoose.model(
    "subscribercontentauth001wb",
    new mongoose.Schema({
        'subscid': {
            type: mongoose.Types.ObjectId,
            ref: 'subscriberdetails001wb'
        },
        'subscsubpid': Number,
        'subscsubpstatus': String,
        'subscsubpstartdate': Date,
        'subscsubpenddate': Date,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date
    }, { timestamps: false })
);

export default subscribercontentauth001wb;