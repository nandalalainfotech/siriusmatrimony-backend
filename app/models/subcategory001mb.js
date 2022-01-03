import mongoose from "mongoose";

mongoose.pluralize(null);

const subcategory001mb = mongoose.model(
    "subcategory001mb",
    new mongoose.Schema({
        'catcode': String,
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