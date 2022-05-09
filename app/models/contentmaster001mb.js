import mongoose from "mongoose";

mongoose.pluralize(null);

const contentmaster001mb = mongoose.model(
    "contentmaster001mb",
    new mongoose.Schema({
        'name': String,
        'description': String,
        'size': String,
        'quality': String,
        'format': String,
        'photo': [{
            type: mongoose.Types.ObjectId,
            ref: 'photo001wb'
        }],
        'video': [{
            type: mongoose.Types.ObjectId,
            ref: 'video001wb'
        }],
        'audio': [{
            type: mongoose.Types.ObjectId,
            ref: 'audio001wb'
        }],
        'status': String,
        'discountflag': Boolean,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String,
        'subid':  {
            type: mongoose.Types.ObjectId,
            ref: 'subscriberdetails001wb'
        }
    }, { timestamps: false })
);
export default contentmaster001mb;