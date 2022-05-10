import mongoose from "mongoose";

mongoose.pluralize(null);

const video001wb = mongoose.model(
    "video001wb",
    new mongoose.Schema({
            'contentid': {
                type: mongoose.Types.ObjectId,
                ref: 'contentmaster001mb'
            },
            'fieldname': String,
            'filename': String,
            'originalname': String,
            'status': String,
            'content': Buffer,
            'inserteduser': String,
            'inserteddatetime': String,
            'updateduser': String,
            'updateddatetime': String,
            'flag':Boolean
        },

        { timestamps: false })
);

export default video001wb;