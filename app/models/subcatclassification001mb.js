import mongoose from "mongoose";

mongoose.pluralize(null);

const subcatclassification001mb = mongoose.model(
    "subcatclassification001mb",
    new mongoose.Schema({
        'catcode':  {
            type: mongoose.Types.ObjectId,
            ref: 'categorydetails001mb'
        },
        'subcatcode':  {
            type: mongoose.Types.ObjectId,
            ref: 'subcategory001mb'
        },
        'classificationname': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String,
        'personid': {
            type: mongoose.Types.ObjectId,
            ref: 'person001mb'
        },
    }, { timestamps: false })
);

export default subcatclassification001mb;