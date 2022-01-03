import mongoose from "mongoose";

mongoose.pluralize(null);

const subcatclassification001mb = mongoose.model(
    "subcatclassification001mb",
    new mongoose.Schema({
        'catcode': String,
        'subcatcode': String,
        'classificationid': Number,
        'classificationname': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date
    }, { timestamps: false })
);

export default subcatclassification001mb;