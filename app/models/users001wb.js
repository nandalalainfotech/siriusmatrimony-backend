import mongoose from "mongoose";

mongoose.pluralize(null);

const users001wb = mongoose.model(
    "users001wb",
    new mongoose.Schema({
        'token': String,
        'firstname': String,
        'password': String,
        'lasttname': String,
        'zipcode': Number,
        'employeeid': Number,
        'dob': String,
        'email': String,
        'confirmemail': String,
        'sex': String,
        'verified': Boolean,
        'address1': String,
        'address2': String,
        'address3': String,
        'city': String,
        'state': String,
        'country': String,
        'mobile': Number,
        'landline': Number,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String,
        'subscid': {
            type: mongoose.Types.ObjectId,
            ref: 'subscriberdetails001wb'
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
        'personid': {
            type: mongoose.Types.ObjectId,
            ref: 'person001mb'
        },
        'rolename': { type: String, ref: 'role001wb' },
    },

        { timestamps: false })
);
export default users001wb;