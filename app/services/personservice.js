import db from "../models/main.js";

const Person001mb = db.person001mb

export const list = async(req, res) => {
    Person001mb.find(function(err, person001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting person001mb.',
                error: err
            });
        }

        return res.json(person001mb);
    });
};


export const show = async(req, res) => {
    var id = req.params.id;

    Person001mb.findOne({ _id: id }, function(err, person001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting person001mb.',
                error: err
            });
        }

        if (!person001mb) {
            return res.status(404).json({
                message: 'No such person001mb'
            });
        }

        return res.json(person001mb);
    });
};


export const create = async(req, res) => {
    var person001mb = new Person001mb({

        subscriberdetails: req.body.subscriberdetails,
        user: req.body.user,
        inserteduser: req.body.inserteduser,
        inserteddatetime: req.body.inserteddatetime,
        updateduser: req.body.updateduser,
        updateddatetime: req.body.updateddatetime
    });

    person001mb.save(function(err, person001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating person001mb',
                error: err
            });
        }

        return res.status(201).json(person001mb);
    });
};

export const update = async(req, res) => {
    var id = req.params.id;

    Person001mb.findOne({ _id: id }, function(err, person001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting person001mb',
                error: err
            });
        }

        if (!person001mb) {
            return res.status(404).json({
                message: 'No such person001mb'
            });
        }

        person001mb.subscriberdetails = req.body.subscriberdetails ? req.body.subscriberdetails : person001mb.subscriberdetails;
        person001mb.user = req.body.user ? req.body.user : person001mb.user;
        person001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : person001mb.inserteduser;
        person001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : person001mb.inserteddatetime;
        person001mb.updateduser = req.body.updateduser ? req.body.updateduser : person001mb.updateduser;
        person001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : person001mb.updateddatetime;

        person001mb.save(function(err, person001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating person001mb.',
                    error: err
                });
            }

            return res.json(person001mb);
        });
    });
};
export const remove = async(req, res) => {
    var id = req.params.id;

    Person001mb.findByIdAndRemove(id, function(err, person001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the person001mb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};