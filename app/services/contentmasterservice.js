import db from "../models/main.js";

const Contentmaster001mb = db.contentmaster001mb;

export const list = async (req, res) => {
    Contentmaster001mb.find(function (err, contentmaster001mbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting contentmaster001mb.',
                error: err
            });
        }

        return res.json(contentmaster001mbs);
    });
};

export const show = async (req, res) => {
    var id = req.params.id;

    Contentmaster001mb.findOne({ _id: id }, function (err, contentmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting contentmaster001mb.',
                error: err
            });
        }

        if (!contentmaster001mb) {
            return res.status(404).json({
                message: 'No such contentmaster001mb'
            });
        }

        return res.json(contentmaster001mb);
    });
};

export const create = async (req, res) => {
    var contentmaster001mb = new Contentmaster001mb({
        contentid: req.body.contentid,
        name: req.body.name,
        description: req.body.description,
        size: req.body.size,
        quality: req.body.quality,
        format: req.body.format,
        status: req.body.status,
        discountflag: req.body.discountflag,
        inserteduser: req.body.inserteduser,
        inserteddatetime: req.body.inserteddatetime,
        updateduser: req.body.updateduser,
        updateddatetime: req.body.updateddatetime
    });

    contentmaster001mb.save(function (err, contentmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating contentmaster001mb',
                error: err
            });
        }

        return res.status(201).json(contentmaster001mb);
    });
};

export const update = async (req, res) => {
    var id = req.params.id;

    Contentmaster001mb.findOne({ _id: id }, function (err, contentmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting contentmaster001mb',
                error: err
            });
        }

        if (!contentmaster001mb) {
            return res.status(404).json({
                message: 'No such contentmaster001mb'
            });
        }

        contentmaster001mb.contentid = req.body.contentid ? req.body.contentid : contentmaster001mb.contentid;
        contentmaster001mb.name = req.body.name ? req.body.name : contentmaster001mb.name;
        contentmaster001mb.description = req.body.description ? req.body.description : contentmaster001mb.description;
        contentmaster001mb.size = req.body.size ? req.body.size : contentmaster001mb.size;
        contentmaster001mb.quality = req.body.quality ? req.body.quality : contentmaster001mb.quality;
        contentmaster001mb.format = req.body.format ? req.body.format : contentmaster001mb.format;
        contentmaster001mb.status = req.body.status ? req.body.status : contentmaster001mb.status;
        contentmaster001mb.discountflag = req.body.discountflag ? req.body.discountflag : contentmaster001mb.discountflag;
        contentmaster001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : contentmaster001mb.inserteduser;
        contentmaster001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : contentmaster001mb.inserteddatetime;
        contentmaster001mb.updateduser = req.body.updateduser ? req.body.updateduser : contentmaster001mb.updateduser;
        contentmaster001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : contentmaster001mb.updateddatetime;

        contentmaster001mb.save(function (err, contentmaster001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating contentmaster001mb.',
                    error: err
                });
            }

            return res.json(contentmaster001mb);
        });
    });
};

export const remove = async (req, res) => {
    var id = req.params.id;

    Contentmaster001mb.findByIdAndRemove(id, function (err, contentmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the contentmaster001mb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};

