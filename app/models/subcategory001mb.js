import mongoose from "mongoose";

mongoose.pluralize(null);

const subcategory001mb = mongoose.model(
    "subcategory001mb",
    new mongoose.Schema({
        'catcode':  {
            type: mongoose.Types.ObjectId,
            ref: 'categorydetails001mb'
        },
        'subscid':  {
            type: mongoose.Types.ObjectId,
            ref: 'subscriberdetails001wb'
        },
        'subcatcode': String,
        'subcatname': String,
        'subcatstatus': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date
    }, { timestamps: false })
);

export default subcategory001mb;