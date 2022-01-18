import mongoose from "mongoose";

mongoose.pluralize(null);

const role001wb = mongoose.model(
    "role001wb",
    new mongoose.Schema({
        'roleid': Number,
        'rolename': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date,
        'subscid':  {
            type: mongoose.Types.ObjectId,
            ref: 'subscriberdetails001wb'
        },
    }, { timestamps: false })
);

export default role001wb;