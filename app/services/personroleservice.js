import db from "../models/main.js";

const Personrole001wb = db.personrole001wb;

export const list = async(req, res) => {
    console.log("statecontrole")
    Personrole001wb.find(function(err, personrole001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting state001mb.',
                error: err
            });
        }

        return res.json(personrole001wb);
    });
};

export const show = async(req, res) => {
    var id = req.params.id;

    Personrole001wb.findOne({ _id: id }, function(err, Personrole001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting Personrole.',
                error: err
            });
        }

        if (!state001mb) {
            return res.status(404).json({
                message: 'No such Personrole001wb'
            });
        }

        return res.json(Personrole001wb);
    });
};

export const create = async(req, res) => {

    var personrole001wb = new Personrole001wb({

        personname: req.body.personname,
        inserteduser: req.body.inserteduser,
        inserteddatetime: req.body.inserteddatetime,
        updateduser: req.body.updateduser,
        updateddatetime: req.body.updateddatetime
    });

    personrole001wb.save(function(err, personrole001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating state001mb',
                error: err
            });
        }

        return res.status(201).json(personrole001wb);
    });
};


// export const create = (req, res) => {

//     const personrole001wb = new Personrole001wb();
//     personrole001wb.personname = req.body.personname;
//     personrole001wb.inserteduser = req.body.inserteduser;
//     personrole001wb.inserteddatetime = req.body.inserteddatetime;
//     personrole001wb.updateduser = req.body.updateduser;
//     personrole001wb.updateddatetime = req.body.updateddatetime
//     personrole001wb.save()
//         .then((result) => {
//             personrole001wb.findOne({ inserteduser: personrole001wb.inserteduser }, (err, user) => {
//                 if (user) {
//                     // The below two lines will add the newly saved review's 
//                     // ObjectID to the the User's reviews array field
//                     user.person.push(personrole001wb);
//                     user.save();
//                     res.json({ message: 'personrole created!', result });
//                 }
//             });
//         })
//         .catch((error) => {
//             res.status(500).json({ error });
//         });
// };


// export const create = async(req, res) => {
//         console.log("res", res);
//         const personrole001wb = new Personrole001wb();

//         personrole001wb.personname = req.body.personname;
//         personrole001wb.inserteduser = req.body.inserteduser;
//         personrole001wb.inserteddatetime = req.body.inserteddatetime;
//         personrole001wb.updateduser = req.body.updateduser;
//         personrole001wb.updateddatetime = req.body.updateddatetime
//         personrole001wb.save()
//             .then((result) => {
//                     personrole001wb.findOne({ inserteduser: personrole001wb.inserteduser }, (err, user) => {
//                             if (user) {
//                                 user.person.push(personrole001wb);
//                                 user.save();
//                                 res.json({ message: 'personrole created!', result });
//                             }
//                         })
//                         .catch((error) => {
//                             res.status(500).json({ error });
//                         });
//                 }

//             };
// // returns the user object associated with the username if any
// with the reviews field containing an array of review objects 
// consisting of the reviews created by the user
export const getUser = async(req, res) => {

    Personrole001wb.findOne({ username: req.params.username })
        .populate('person')
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

export const update = async(req, res) => {
    var id = req.params.id;

    Personrole001wb.findOne({ _id: id }, function(err, personrole001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting personrole001wb',
                error: err
            });
        }

        if (!personrole001wb) {
            return res.status(404).json({
                message: 'No such personrole001wb'
            });
        }

        personrole001wb.person = req.body.person ? req.body.person : personrole001wb.person;
        personrole001wb.role = req.body.role ? req.body.role : personrole001wb.role;
        personrole001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : personrole001wb.inserteduser;
        personrole001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : personrole001wb.inserteddatetime;
        personrole001wb.updateduser = req.body.updateduser ? req.body.updateduser : personrole001wb.updateduser;
        personrole001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : personrole001wb.updateddatetime;

        personrole001wb.save(function(err, personrole001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating personrole001wb.',
                    error: err
                });
            }

            return res.json(personrole001wb);
        });
    });
};

export const remove = async(req, res) => {
    var id = req.params.id;

    Personrole001wb.findByIdAndRemove(id, function(err, personrole001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the personrole001wb.',
                error: err
            });
        }

        return res.status(204).json();
    });
}