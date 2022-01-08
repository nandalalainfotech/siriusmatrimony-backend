import mongoose from "mongoose";

mongoose.pluralize(null);

const subscriberdetails001wb = mongoose.model(
    "subscriberdetails001wb",
    new mongoose.Schema({
        'regionalid': Number,
        'companycode': Number,
        'catcode': Number,
        'subcatcode': Number,
        'categoryid': Number,
        'subscid': Number,
        'classificationid':Number,
        'subscname': String,
        'age': Number,
        'sex': String,
        'subscdesc': String,
        'aboutme': String,
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
        'address': String,
        'phoneno': Number,
        'subscstatus': String,
        'subscapproval': Boolean,
        'approvedby': String,
        'approvedon': String,
        'subscsubspid': Number,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date,
        'status': String
    }, { timestamps: false }));

export default subscriberdetails001wb;