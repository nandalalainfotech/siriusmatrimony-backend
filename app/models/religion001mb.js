
import mongoose from "mongoose";

mongoose.pluralize(null);

const religion001mb = mongoose.model(
    "religion001mb",
    new mongoose.Schema({
        'religionname': String,
        'religiondesc': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String,
        'personid': {
            type: mongoose.Types.ObjectId,
            ref: 'person001mb'
        }
    }, { timestamps: false })
);

export default religion001mb;