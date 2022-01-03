import mongoose from "mongoose";

mongoose.pluralize(null);

const subscribercontent001wb = mongoose.model(
    "subscribercontent001mb",
    new mongoose.Schema({
        'subscid': Number,
        'subsccontentid1': Number,
        'subsccontentidattach1': Number,
        'subsccontentidappovalflag1': Boolean,
        'subsccontentidattach2': Number,
        'subsccontentidappovalflag2': Boolean,
        'subsccontentidattachn': Number,
        'subsccontentidappovalflagn': Boolean,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date
    }, { timestamps: false })
);

export default subscribercontent001wb;