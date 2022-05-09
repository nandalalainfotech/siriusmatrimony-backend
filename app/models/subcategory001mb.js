import mongoose from "mongoose";

mongoose.pluralize(null);

const subcategory001mb = mongoose.model(
    "subcategory001mb",
    new mongoose.Schema({
        'catcode':  {
            type: mongoose.Types.ObjectId,
            ref: 'categorydetails001mb'
        },
        'subcatname': String,
        'subcatstatus': String,
        'status': String,
        'insertUser': String,
        'insertDatetime': String,
        'updatedUser': String,
        'updatedDatetime': String
    }, { timestamps: false })
);

export default subcategory001mb;