import mongoose from "mongoose";
mongoose.pluralize(null);
const login001mb = mongoose.model(
    "login001mb",
    new mongoose.Schema({
        'token':String,
        'username':String,
        'personid': {
            type: mongoose.Types.ObjectId,
            ref: 'person001mb'
        },
        'roleid': {
            type: mongoose.Types.ObjectId,
            ref: 'role001wb'
        },
        'password': String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String,
        'theme':String,
    }, { timestamps: false })
);
export default login001mb;
