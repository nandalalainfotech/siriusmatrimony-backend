import mongoose from "mongoose";

mongoose.pluralize(null);

const photo001wb = mongoose.model(
    "photo001wb",
    new mongoose.Schema({
            'contentid': {
                type: mongoose.Types.ObjectId,
                ref: 'contentmaster001mb'
            },
            'fileid': {
                type: mongoose.Types.ObjectId,
                ref: 'upload.files'
            },
            'fieldname': String,
            'filename': String,
            'originalname': String,
            'content': Buffer,
            'status': String,
            'inserteduser': String,
            'inserteddatetime': String,
            'updateduser': String,
            'updateddatetime': String,
            'flag':Boolean,
        },

        { timestamps: false })
);

export default photo001wb;