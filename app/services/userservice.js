
import db from "../models/main.js";
const User001mb = db.user001mb;


export const createUser = async (req, res) => {
    console.log("res",res);
    const user = new User001mb();
    user.username = req.body.username;
    user.email = req.body.email;
    user.save()
        .then((result) => {
            console.log("result------user", result);
            res.json({ message: 'User created!', result });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

// . . .
// returns the user object associated with the username if any
// with the reviews field containing an array of review objects 
// consisting of the reviews created by the user

// export const list = async (req, res) => {
//     User001mb.find(function (err, User001mb) {
//         if (err) {
//             return res.status(500).json({
//                 message: 'Error when getting User001mb.',
//                 error: err
//             });
//         }

//         return res.json(user001mb);
//     });
// };
export const getUser =  (req, res) => {
    console.log("result------findone",req.body.username);
    User001mb.findOne({ username: req.body.username })
    .populate('review001mb')
    .then((result) => {
        console.log("result------populate",result);
            res.json(result);
            console.log("result------populate3", result);
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

