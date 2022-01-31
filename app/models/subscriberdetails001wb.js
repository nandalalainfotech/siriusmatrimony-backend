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
        'roleid': [{
            type: mongoose.Types.ObjectId,
            ref: 'role001wb'
        }],
        // 'catcode': [{
        //     type: mongoose.Types.ObjectId,
        //     ref: 'categorydetails001mb'
        // }],
        'subcatcode': [{
            type: mongoose.Types.ObjectId,
            ref: 'subcategory001mb'
        }],
        'professionalid': [{
            type: mongoose.Types.ObjectId,
            ref: 'subscriberprofessionalinfo002wb'
        }],
        'categoryid': [{
            type: mongoose.Types.ObjectId,
            ref: 'categorydetails001mb'
        }],
        'languageid': [{
            type: mongoose.Types.ObjectId,
            ref: 'language001mb'
        }],
        'personalid': [{
            type: mongoose.Types.ObjectId,
            ref: 'subscriberpersonalinfo001wb'
        }],
        'contentid': [{
            type: mongoose.Types.ObjectId,
            ref: 'contentmaster001mb'
        }],
        'religionid': [{
            type: mongoose.Types.ObjectId,
            ref: 'religion001mb'
        }],
        'classificationid': [{
            type: mongoose.Types.ObjectId,
            ref: 'subcatclassification001mb'
        }],
        'subscsubspid': [{
            type: mongoose.Types.ObjectId,
            ref: 'subscribercontentauth001wb'
        }],
        'stateid': {
            type: mongoose.Types.ObjectId,
            ref: 'state001mb'
        },
        'cityid': {
            type: mongoose.Types.ObjectId,
            ref: 'city001mb'
        },
        'countryid': {
            type: mongoose.Types.ObjectId,
            ref: 'country001mb'
        },
        'subscid': Number,
        'subscname': String,
        'age': Number,
        'sex': String,
        'subscdesc': String,
        'aboutme': String,
        'address': String,
        'phoneno': Number,
        'subscstatus': String,
        'subscapproval': Boolean,
        'approvedby': String,
        'approvedon': String,
        'inserteduser': String,
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date,
        'status': String
    },
        { timestamps: false }));

export default subscriberdetails001wb;