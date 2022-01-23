import mongoose from "mongoose";

mongoose.pluralize(null);

const subcatclassification001mb = mongoose.model(
    "subcatclassification001mb",
    new mongoose.Schema({
        // 'catcode': String,
        'subcatcode':  {
            type: mongoose.Types.ObjectId,
            ref: 'subcategory001mb'
        },
        'classificationid': Number,
        'classificationname': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date,
        'subscid':  {
            type: mongoose.Types.ObjectId,
            ref: 'subscriberdetails001wb'
        },
    }, { timestamps: false })
);

export default subcatclassification001mb;