import mongoose from "mongoose";

mongoose.pluralize(null);

const subscribercontentauth001wb = mongoose.model(
    "subscribercontentauth001wb",
    new mongoose.Schema({
        'subscsubpstatus': String,
        'subscsubpstartdate': String,
        'subscsubpenddate': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String
    }, { timestamps: false })
);

export default subscribercontentauth001wb;