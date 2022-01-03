import db from "../models/main.js";

const Language001mb = db.language001mb;

export const list = async(req, res) => {
    Language001mb.find(function (err, language001mbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting language001mb.',
                error: err
            });
        }

        return res.json(language001mbs);
    });
};
export const show = (req, res) => {
    var id = req.params.id;

    Language001mb.findOne({ _id: id }, function (err, language001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting language001mb.',
                error: err
            });
        }

        if (!language001mb) {
            return res.status(404).json({
                message: 'No such language001mb'
            });
        }

        return res.json(language001mb);
    });
};
export const create = async (req, res) => {
    var language001mb = new Language001mb({
        languageid: req.body.languageid,
        languagename: req.body.languagename,
        languagedesc: req.body.languagedesc,
        status: req.body.status,
        inserteduser: req.body.inserteduser,
        inserteddatetime: req.body.inserteddatetime,
        updateduser: req.body.updateduser,
        updateddatetime: req.body.updateddatetime
    });

    language001mb.save(function (err, language001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating language001mb',
                error: err
            });
        }

        return res.status(201).json(language001mb);
    });
};
export const update = async (req, res) => {
    var id = req.params.id;

    Language001mb.findOne({ _id: id }, function (err, language001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting language001mb',
                error: err
            });
        }

        if (!language001mb) {
            return res.status(404).json({
                message: 'No such language001mb'
            });
        }

        language001mb.languageid = req.body.languageid ? req.body.languageid : language001mb.languageid;
        language001mb.languagename = req.body.languagename ? req.body.languagename : language001mb.languagename;
        language001mb.languagedesc = req.body.languagedesc ? req.body.languagedesc : language001mb.languagedesc;
        language001mb.status = req.body.status ? req.body.status : language001mb.status;
        language001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : language001mb.inserteduser;
        language001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : language001mb.inserteddatetime;
        language001mb.updateduser = req.body.updateduser ? req.body.updateduser : language001mb.updateduser;
        language001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : language001mb.updateddatetime;

        language001mb.save(function (err, language001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating language001mb.',
                    error: err
                });
            }

            return res.json(language001mb);
        });
    });
};
export const remove = async (req, res) => {
    var id = req.params.id;

    Language001mb.findByIdAndRemove(id, function (err, language001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the language001mb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};

