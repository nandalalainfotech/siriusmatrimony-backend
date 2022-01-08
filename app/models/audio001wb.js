import mongoose from "mongoose";
mongoose.pluralize(null);

const audio001wb = mongoose.model(
    "audio001wb",
    new mongoose.Schema({
            'category': String,
            'filename': String,
            'originalfilename': String,
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