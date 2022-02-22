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
    }, { timestamps: false })
);

export default payment001mb;