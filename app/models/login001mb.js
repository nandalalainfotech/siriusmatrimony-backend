import mongoose from "mongoose";
mongoose.pluralize(null);
const login001mb = mongoose.model(
    "login001mb",
    new mongoose.Schema({
        'email': String,
        'password': String,
        'role':String,
        'token':String,
        'status': String,
        'inserteduser': String,
        'inserteddatetime': String,
        'updateduser': String,
        'updateddatetime': String,
    }, { timestamps: false })
);
export default login001mb;


// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(login001mb.password, salt, (err, hash) => {
//         if (err)
//             throw (err);
//         // Create token
//         const token = jwt.sign({ _id: login001mb.password },
//             process.env.TOKEN_KEY, {
//             expiresIn: "2h",
//         });
//         // save user token
//         login001mb.token = token;
//         // user
//         // res.status(200).json(login001mb);
//         login001mb.save()
//             .then((result) => {
//                 res.json({ message: 'Login created' });
//             })
//             .catch((error) => {
//                 res.status(500).json({ error });
//             });
//     });
// })