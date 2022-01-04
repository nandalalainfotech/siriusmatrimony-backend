import mongoose from "mongoose";

mongoose.pluralize(null);

const video001wb = mongoose.model(
    "video001wb",
    new mongoose.Schema({
        'category': String,
        'filename': String,
        'originalfilename': String,
        'status': String,
        'content': Buffer,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date,
        'person': [{ type: mongoose.Types.ObjectId, ref: 'person' }],
    },

        { timestamps: false })
);

export default video001wb;