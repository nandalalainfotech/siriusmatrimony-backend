import mongoose from "mongoose";

mongoose.pluralize(null);

const subscribercontentauth001wb = mongoose.model(
    "subscribercontentauth001wb",
    new mongoose.Schema({
        'subscid': Number,
        'subscsubpid': Number,
        'subscsubpstatus': String,
        'subscsubpstartdate': Date,
        'subscsupbenddate': Date,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date
    }, { timestamps: false })
);

export default subscribercontentauth001wb;