import mongoose from "mongoose";

mongoose.pluralize(null);

const subscriberprofessionalinfo002wb = mongoose.model(
    "subscriberprofessionalinfo002wb",
    new mongoose.Schema({
        'professionaldetails': String,
        'professionid': Number,
        'job': String,
        'flex1': String,
        'flex2': String,
        'flex3': String,
        'flex4': String,
        'flex5': String,
        'flex6': String,
        'flex7': String,
        'flex8': String,
        'flex9': String,
        'flex10': String,
        'flex11': String,
        'flex12': String,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date,
        'subscid': {
            type: mongoose.Types.ObjectId,
            ref: 'subscriberdetails001wb'
        },
    }, { timestamps: false })
);

export default subscriberprofessionalinfo002wb;