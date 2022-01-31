import mongoose from "mongoose";

mongoose.pluralize(null);

const photo001wb = mongoose.model(
    "photo001wb",
    new mongoose.Schema({
        'contentid': {  type: mongoose.Schema.Types.ObjectId,
            ref: 'contentmaster001mb'},
        'fieldname': String,
        'filename': String,
        'originalname': String,
        'content': Buffer,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String
    },

        { timestamps: false })
);

export default photo001wb;