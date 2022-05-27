import mongoose from "mongoose";

mongoose.pluralize(null);

const person001mb = mongoose.model(
    "person001mb",
    new mongoose.Schema({
            'regionalid': {
                type: mongoose.Types.ObjectId,
                ref: 'regionaldetails001mb'
            },
            'loginid': {
                type: mongoose.Types.ObjectId,
                ref: 'login001mb'
            },
            'usersid': {
                type: mongoose.Types.ObjectId,
                ref: 'Users001wb'
            },
            'subscriberdetailsid': {
                type: mongoose.Types.ObjectId,
                ref: 'subscriberdetails001wb'
            },
            'companycode': {
                type: mongoose.Types.ObjectId,
                ref: 'companydetails001mb'
            },
            'roleid': {
                type: mongoose.Types.ObjectId,
                ref: 'role001wb'
            },
            'subcatcode': {
                type: mongoose.Types.ObjectId,
                ref: 'subcategory001mb'
            },
            'professionalid': {
                type: mongoose.Types.ObjectId,
                ref: 'subscriberprofessionalinfo002wb'
            },
            'categoryid': {
                type: mongoose.Types.ObjectId,
                ref: 'categorydetails001mb'
            },
            'languageid': {
                type: mongoose.Types.ObjectId,
                ref: 'language001mb'
            },
            'personalid': {
                type: mongoose.Types.ObjectId,
                ref: 'subscriberpersonalinfo001wb'
            },
            'religionid': {
                type: mongoose.Types.ObjectId,
                ref: 'religion001mb'
            },
            'classificationid': {
                type: mongoose.Types.ObjectId,
                ref: 'subcatclassification001mb'
            },
            'subscsubspid': {
                type: mongoose.Types.ObjectId,
                ref: 'subscribercontentauth001wb'
            },
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
            'lastname':String,
            'token': String,
            'firstname': String,
            'lasttname': String,
            'zipcode': String,
            'dob': String,
            'confirmemail': String,
            'landline': String,
            'age': Number,
            'sex': String,
            'email': String,
            'address': String,
            'phoneno': Number,
            'verified':Boolean,
            'inserteduser': String,
            'status': String,
            'inserteddatetime': String,
            'updateduser': String,
            'updateddatetime': String,
        },

        { timestamps: false })
);

export default person001mb;