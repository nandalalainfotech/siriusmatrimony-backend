import mongoose from "mongoose";
mongoose.pluralize(null);
const login001mb = mongoose.model(
    "login001mb",
    new mongoose.Schema({
        'email': String,
        'password': String,
        'rolename': { type: String, ref: 'role001wb' },
        'status': String,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String,
    }, { timestamps: false })
);
export default login001mb;
