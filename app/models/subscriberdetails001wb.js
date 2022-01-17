import mongoose from "mongoose";

mongoose.pluralize(null);

const subscriberdetails001wb = mongoose.model(
    "subscriberdetails001wb",
    new mongoose.Schema({
        'regionalid': [{
            type: mongoose.Types.ObjectId,
            ref: 'regionaldetails001mb'
        }],
        'companycode': [{
            type: mongoose.Types.ObjectId,
            ref: 'companydetails001mb'
        }],
        'role': [{
            type: mongoose.Types.ObjectId,
            ref: 'role001wb'
        }],
        'catcode': [{
            type: mongoose.Types.ObjectId,
            ref: 'categorydetails001mb'
        }],
        'subcatcode': [{
            type: mongoose.Types.ObjectId,
            ref: 'subcategory001mb'
        }],
        'professionalid': [{
            type: mongoose.Types.ObjectId,
            ref: 'subscriberprofessionalinfo002wb'
        }],
        // 'categoryid': [{
        //     type: mongoose.Types.ObjectId,
        //     ref: 'photo001wb'
        // }],

        'subscid': Number,

        'classificationid': [{
            type: mongoose.Types.ObjectId,
            ref: 'subcatclassification001mb'
        }],
        'subscname': String,
        'age': Number,
        'sex': String,
        'subscdesc': String,
        'aboutme': String,
        // 'photo': [{
        //     type: mongoose.Types.ObjectId,
        //     ref: 'photo001wb'
        // }],
        // 'video': [{
        //     type: mongoose.Types.ObjectId,
        //     ref: 'video001wb'
        // }],
        // 'audio': [{
        //     type: mongoose.Types.ObjectId,
        //     ref: 'audio001wb'
        // }],
        'contentid': [{
            type: mongoose.Types.ObjectId,
            ref: 'contentmaster001mb'
        }],
        'address': String,
        'phoneno': Number,
        'subscstatus': String,
        'subscapproval': Boolean,
        'approvedby': String,
        'approvedon': String,
        'subscsubspid': [{
            type: mongoose.Types.ObjectId,
            ref: 'subscribercontentauth001wb'
        }],
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date,
        'status': String
    },
        { timestamps: false }));

export default subscriberdetails001wb;