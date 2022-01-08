
import db from "../models/main.js";
const Review001mb = db.review001mb;
const User001mb = db.user001mb;

export const createReview = async (req, res) => {
    const review = new Review001mb();
    review.comments = req.body.comments;
    review.rating = req.body.rating;
    review.status = req.body.status;
    review.user001mb = req.body.user001mb;
    review.save()
        .then((result) => {
            console.log("result------review", result);
            User001mb.findOne({ user001mb: review.user001mb }, (err, user) => {
                console.log("result------username", review.user001mb);
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


// export const createReview = function(user001mb, review001mb) {


//     return db.Review001mb.create(review001mb).then(result => {
//       console.log("createReview", result);

//       return db.User001mb.findByIdAndUpdate(
//         user001mb,
//         { $push: { comments: result._id } },
//         { new: true, useFindAndModify: false }
//       );
//     });
//   };

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
