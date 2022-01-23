import mongoose from "mongoose";

mongoose.pluralize(null);

const state = mongoose.model(
    "state001mb",
    new mongoose.Schema({
        'stateid': Number,
        'statename': String,
        'statedesc': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date,
        'cityid': [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "city001mb",
        }],
        'countryid': {
            type: mongoose.Types.ObjectId,
            ref: 'country001mb'
        }
    }, { timestamps: false })
);

export default state;