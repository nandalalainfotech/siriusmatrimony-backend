// import mongoose from "mongoose";
import db from "../models/main.js";
const Usersample001mb = db.usersample001mb;
const Review001mb = db.review001mb;
// import lodash from "lodash";


export const createUser = async (req, res) => {
    console.log("res", res);
    const user = new Usersample001mb();
    user.username = req.body.username;
    user.password = req.body.password;
    user.securityquestion = req.body.securityquestion;
    user.securityanswer = req.body.securityanswer;
    user.reviews = req.body.reviews;
    user.save()
        .then((result) => {
            console.log("result------user", result);
            Review001mb.findOne({ reviews: user.reviews }, (err, users) => {
                console.log("result------username", user.reviews);
                if (users) {
                    console.log("users", users);
                    users.user001mb.push(user);
                    console.log("user", user);
                    users.save();
                    res.json({ message: 'User created!' });
                }
            })
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};



// export const createUser = async (req, res, user) => {
// console.log("req", req.body, res);
// const user = new _.extend(User001mb);
// const user001mb = new User001mb();
// console.log("user001mb--------", user001mb);
// user001mb.username = req.body.username;
// user001mb.password = req.body.password;
// user001mb.securityquestion = req.body.securityquestion;
// user001mb.securityanswer = req.body.securityanswer;
// console.log(" user.securityanswer", user001mb.securityanswer);
// user001mb.reviews = req.body.reviews;
// console.log("reviews=======>", req.body.reviews);
//     if (user) {
//         console.log("user=======>", user);
//          let review = req.body.reviews.length;
//         for (let i = 0; i <review ; i++) {
//             console.log("testing");
//             //  r += review[i];
//            console.log("review------", review);
//         }
//     }


//     user001mb.save();

// };


// export const createUser = async (req, res) => {
//     console.log("req.body", req.body);
//     const user001mb = req.User001mb;
//     console.log("user001mb--user001mb", user001mb);
//     user.username = req.body.username;
//     user.password = req.body.password;
//     user.securityquestion = req.body.securityquestion;
//     user.securityanswer = req.body.securityanswer;
//     console.log(" user.securityanswer", user.securityanswer);
//     user.reviews = req.body.reviews;
//     console.log("reviews", user.reviews);
//     const User001mbs = _.extend(user001mb);
//     console.log("user001mb--createUser", User001mbs);
//     User001mbs.save();
//     if (err) {
//         return res.jsonp(500, {
//             error: 'Cannot update the article'
//         });
//     }
//     res.jsonp(article);

// };

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
export const getUser = (req, res) => {
    console.log("result------findone", req.body.id);
    Usersample001mb.findOne({ id: req.body.id })
        .populate('review001mb')
        .then((result) => {
            console.log("result------populate", result);
            res.json(result);
            console.log("result------populate3", result);
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};


// export const list = (req, res) => {
//     console.log("result------findone Country001mb", req.body.countryid);
//     Country001mb.findOne({ countryid: req.body.countryid })
//         .populate('state001mb')
//         .then((result) => {
//             console.log("result------populate Country001mb ", state001mb);
//             console.log("result------populate Country001mb ", result);
//             res.json(result);
//             console.log("result------populate3 Country001mb", result);
//         })
//         .catch((error) => {
//             res.status(500).json({ error });
//         });
// };

