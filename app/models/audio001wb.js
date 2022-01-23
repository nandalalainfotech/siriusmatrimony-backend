import mongoose from "mongoose";
mongoose.pluralize(null);

const audio001wb = mongoose.model(
    "audio001wb",
    new mongoose.Schema({
        'contentid': {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'contentmaster001mb'
        },
        'fieldname': String,
        'filename': String,
        'originalname': String,
        'content': Buffer,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date
    },

        { timestamps: false })
);

export default audio001wb;