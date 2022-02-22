import mongoose from "mongoose";

mongoose.pluralize(null);

const users001wb = mongoose.model(
    "users001wb",
    new mongoose.Schema({
        'personid': {
            type: mongoose.Types.ObjectId,
            ref: 'person001mb'
        },
           // 'rolename':String,
     'employeeid':String,
     'bankname':String,
     'accountnumber':String,
     'insurance':String,
     'accounttype':String,
     'status': String,
     'inserteddatetime': String,
     'updateduser': String,
     'updateddatetime': String,
    },

        { timestamps: false })
);
export default users001wb;