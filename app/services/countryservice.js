import db from "../models/main.js";

const Country001mb = db.country001mb;

export const list = async (req, res) => {
    Country001mb.find(function (err, Country001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting country001mb.',
                error: err
            });
        }

        return res.json(Country001mb);
    });
};

export const show = async (req, res) => {
    var id = req.params.id;

    Country001mb.findOne({ _id: id }, function (err, country001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting country001mb.',
                error: err
            });
        }

        if (!country001mb) {
            return res.status(404).json({
                message: 'No such country001mb'
            });
        }

        return res.json(country001mb);
    });
};

export const create = async (req, res) => {
    var country001mb = new Country001mb({
        countryid: req.body.countryid,
        countryname: req.body.countryname,
        countrydesc: req.body.countrydesc,
        status: req.body.status,
        inserteduser: req.body.inserteduser,
        inserteddatetime: req.body.inserteddatetime,
        updateddatetime: req.body.updateddatetime,
        updateduser: req.body.updateduser
    });

    country001mb.save(function (err, country001mb) {
        console.log("country", country001mb);
        if (err) {
            return res.status(500).json({
                message: 'Error when creating country001mb',
                error: err
            });
        }

        return res.status(201).json(country001mb);
    });
};

export const update = async (req, res) => {
    var id = req.params.id;

    Country001mb.findOne({ _id: id }, function (err, country001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting country001mb',
                error: err
            });
        }

        if (!country001mb) {
            return res.status(404).json({
                message: 'No such country001mb'
            });
        }

        country001mb.countryid = req.body.countryid ? req.body.countryid : country001mb.countryid;
        country001mb.countryname = req.body.countryname ? req.body.countryname : country001mb.countryname;
        country001mb.countrydesc = req.body.countrydesc ? req.body.countrydesc : country001mb.countrydesc;
        country001mb.status = req.body.status ? req.body.status : country001mb.status;
        country001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : country001mb.inserteduser;
        country001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : country001mb.inserteddatetime;
        country001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : country001mb.updateddatetime;
        country001mb.updateduser = req.body.updateduser ? req.body.updateduser : country001mb.updateduser;

        country001mb.save(function (err, country001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating country001mb.',
                    error: err
                });
            }

            return res.json(country001mb);
        });
    });
};

export const remove = async (req, res) => {
    var id = req.params.id;

    Country001mb.findByIdAndRemove(id, function (err, country001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the country001mb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};

