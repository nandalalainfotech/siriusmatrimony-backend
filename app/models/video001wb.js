import mongoose from "mongoose";

mongoose.pluralize(null);

const video001wb = mongoose.model(
    "video001wb",
    new mongoose.Schema({
            'contentid': {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'contentmaster001mb'
            },
            'fieldname': String,
            'filename': String,
            'originalname': String,
            'status': String,
            'content': Buffer,
            'inserteduser': String,
            'inserteddatetime': Date,
            'updateduser': String,
            'updateddatetime': Date
        },

        { timestamps: false })
);

export default video001wb;