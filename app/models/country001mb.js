import mongoose from "mongoose";


mongoose.pluralize(null);

const country001mb = mongoose.model(
    "country001mb",
    new mongoose.Schema({
        'countryid': Number,
        'countryname': String,
        'countrydesc': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateddatetime': Date,
        'updateduser': String,
        'stateid': [{
            type: mongoose.Types.ObjectId,
            ref: 'state001mb'
        }]

    }, { timestamps: false })
);
export default country001mb;