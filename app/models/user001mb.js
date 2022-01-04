import mongoose from "mongoose";

mongoose.pluralize(null);

const user001mb = mongoose.model(
    "user001mb",
    new mongoose.Schema({
        'firstname': String,
        'lastname': String,
        'username': { type: String, unique: true },
       'reviews' : [{ type: mongoose.Types.ObjectId, ref: 'Review' }],
    }, 
   
    { timestamps: false })
);

export default user001mb;