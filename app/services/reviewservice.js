
import db from "../models/main.js";
const Review001mb = db.review001mb;
const Usersample001mb = db.usersample001mb;

export const createReview = async (req, res) => {
    const review = new Review001mb()
    review.comments = req.body.comments;
    review.rating = req.body.rating;
    review.status = req.body.status;
    review.user001mb = req.body.user001mb.id;

    review.save()
        .then((result) => {
            console.log("req.body.user001mb result", req.body.user001mb.id);
            console.log("result------review", result);
            Usersample001mb.findOne({ _id: review.user001mb }, (err, user) => {
                console.log("result------username", review.user001mb);
                if (user) {
                    console.log("user------review", user);
                    user.reviews.push(review);
                    user.save();
                    console.log("user------review11111", user);
                    res.json({ message: 'Review created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

export const list = async (req, res) => {
    Review001mb.find(function (err, review001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting Review001mb.',
                error: err
            });
        }

        return res.json(review001mb);
    });
};
