
import db from "../models/main.js";
const Usersample001mb = db.usersample001mb;

export const createUser = async (req, res) => {
  
    const user = new Usersample001mb();
    user.username = req.body.username;
    user.password = req.body.password;
    user.securityquestion = req.body.securityquestion;
    user.securityanswer = req.body.securityanswer;

    user.save()
       .then((result) => {
             res.json({ message: 'User created!' });
         })
        .catch((error) => {
            res.status(500).json({ error });
        });
};
export const list = async (req, res) => {
    Usersample001mb.find(function (err, usersample001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting usersample001mb.',
                error: err
            });
        }

        return res.json(usersample001mb);
    });
};


export const getUser = (req, res) => {
    Usersample001mb.find({ id: req.body.id  })
        .populate('review001mb')
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};