import mongoose from "mongoose";

mongoose.pluralize(null);

const personrole001wb = mongoose.model(
    "personrole001wb",
    new mongoose.Schema({
        'person': [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'person'
        }],
        'role': [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'role'
        }],
        'personname': String,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date
    }, { timestamps: false })
);

export default personrole001wb;