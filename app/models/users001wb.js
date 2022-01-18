import mongoose from "mongoose";

mongoose.pluralize(null);

const users001wb = mongoose.model(
    "users001wb",
    new mongoose.Schema({
        'firstname': String,
        'lasttname': String,
        'zipcode': Number,
        'employeeid': Number,
        'dob': Date,
        'email': String,
        'confirmemail': String,
        'sex': String,
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
        'inserteddatetime': Date,
        'updateduser': String,
        'updateddatetime': Date,
        'subscid':  {
            type: mongoose.Types.ObjectId,
            ref: 'subscriberdetails001wb'
        },
       'role': [{ type: mongoose.Types.ObjectId, ref: 'role' }],
       'photo': [{ type: mongoose.Types.ObjectId, ref: 'photo' }],
       'video': [{ type: mongoose.Types.ObjectId, ref: 'video' }],
    },

        { timestamps: false })
);

export default users001wb;