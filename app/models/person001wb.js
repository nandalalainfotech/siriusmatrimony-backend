import mongoose from "mongoose";

mongoose.pluralize(null);

const person001wb = mongoose.model(
    "person001wb",
    new mongoose.Schema({
        'firstname': String,
        'lasttname': String,
        'zipcode': Number,
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
       'personrole': [{ type: mongoose.Types.ObjectId, ref: 'personrole' }],
       'photo': [{ type: mongoose.Types.ObjectId, ref: 'photo' }],
       'video': [{ type: mongoose.Types.ObjectId, ref: 'video' }],
    },

        { timestamps: false })
);

export default person001wb;