import db from "../models/main.js";

const State001mb = db.state001mb;

const Country001mb = db.country001mb;

export const list = async(req, res) => {
    State001mb.find(function(err, state001mbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting state001mb.',
                error: err
            });
        }

        return res.json(state001mbs);
    });
};

export const show = async(req, res) => {
    var id = req.params.id;

    State001mb.findOne({ _id: id }, function(err, state001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting state001mb.',
                error: err
            });
        }

        if (!state001mb) {
            return res.status(404).json({
                message: 'No such state001mb'
            });
        }

        return res.json(state001mb);
    });
};


// export const create = async (req, res) => {
//     const state001mb = new State001mb();

//     state001mb.stateid= req.body.stateid,
//     state001mb.statename= req.body.statename,
//     state001mb.statedesc= req.body.statedesc,
//     state001mb.status= req.body.status,
//     state001mb.inserteduser= req.body.inserteduser,
//     state001mb.inserteddatetime= req.body.inserteddatetime,
//     state001mb.updateduser= req.body.updateduser,
//     state001mb.updateddatetime= req.body.updateddatetime
//     state001mb.save()
//         .then((result) => {
//             console.log("result------state001mb", result);
//             Country001mb.findOne({  state:state001mb.stateid }, (err, user) => {
//                 console.log("result------id state001mb", state001mb.state);
//                 if (user) {
//                     // The below two lines will add the newly saved review's 
//                     // ObjectID to the the User's reviews array field
//                     console.log("user",user);
//                      user.state.push(state001mb);
//                     user.save();
//                     res.json({ message: 'photo001wb created!' });
//                 }
//             });
//         })
//         .catch((error) => {
//             res.status(500).json({ error });
//         });
// };


export const create = async(req, res) => {
    var state001mb = new State001mb({
        stateid: req.body.stateid,
        statename: req.body.statename,
        statedesc: req.body.statedesc,
        status: req.body.status,
        inserteduser: req.body.inserteduser,
        inserteddatetime: req.body.inserteddatetime,
        updateduser: req.body.updateduser,
        updateddatetime: req.body.updateddatetime
    });

    state001mb.save(function(err, state001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating state001mb',
                error: err
            });
        }

        return res.status(201).json(state001mb);
    });
};

export const update = async(req, res) => {
    var id = req.params.id;

    State001mb.findOne({ _id: id }, function(err, state001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting state001mb',
                error: err
            });
        }

        if (!state001mb) {
            return res.status(404).json({
                message: 'No such state001mb'
            });
        }

        state001mb.stateid = req.body.stateid ? req.body.stateid : state001mb.stateid;
        state001mb.statename = req.body.statename ? req.body.statename : state001mb.statename;
        state001mb.statedesc = req.body.statedesc ? req.body.statedesc : state001mb.statedesc;
        state001mb.status = req.body.status ? req.body.status : state001mb.status;
        state001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : state001mb.inserteduser;
        state001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : state001mb.inserteddatetime;
        state001mb.updateduser = req.body.updateduser ? req.body.updateduser : state001mb.updateduser;
        state001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : state001mb.updateddatetime;

        state001mb.save(function(err, state001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating state001mb.',
                    error: err
                });
            }

            return res.json(state001mb);
        });
    });
};


export const remove = async(req, res) => {
    var id = req.params.id;

    State001mb.findByIdAndRemove(id, function(err, state001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the state001mb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};