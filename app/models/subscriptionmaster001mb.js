import mongoose from "mongoose";

mongoose.pluralize(null);

const subscriptionmaster001mb = mongoose.model(
    "subscriptionmaster001mb",
    new mongoose.Schema({
        'subpid': Number,
        'subpname': String,
        'description': String,
        'tenure': String,
        'amount': Number,
        'status': String,
        'discountflag': Boolean,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String
    }, { timestamps: false })
);

export default subscriptionmaster001mb;