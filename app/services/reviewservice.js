import db from "../models/main.js";
const Review001mb = db.review001mb;
const User001mb = db.user001mb;
export const createReview = async (req, res) => {
    const review = new Review001mb();
    review.username = req.body.username;
    review.rating = req.body.rating;
    review.body = req.body.body;
    review.save()
        .then((result) => {
            console.log("result------review", result);
            User001mb.findOne({ username: review.username }, (err, user) => {
                console.log("result------username", review.username);
                if (user) {
                    // The below two lines will add the newly saved review's 
                    // ObjectID to the the User's reviews array field
                     user.reviews.push(review);
                    user.save();
                    res.json({ message: 'Review created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};