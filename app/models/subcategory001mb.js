import mongoose from "mongoose";

mongoose.pluralize(null);

const subcategory001mb = mongoose.model(
    "subcategory001mb",
    new mongoose.Schema({
        'catcode':  {
            type: mongoose.Types.ObjectId,
            ref: 'categorydetails001mb'
        },
        'personid': {
            type: mongoose.Types.ObjectId,
            ref: 'person001mb'
        },
        // 'subcatcode': String,
        'subcatname': String,
        'subcatstatus': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String
    }, { timestamps: false })
);

export default subcategory001mb;