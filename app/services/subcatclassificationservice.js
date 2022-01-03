import db from "../models/main.js"

const Subcatclassification001mb = db.subcatclassification001mb;

export const list = async (req, res) => {
    Subcatclassification001mb.find(function (err, subcatclassification001mbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subcatclassification001mb.',
                error: err
            });
        }

        return res.json(subcatclassification001mbs);
    });
};


export const show = async (req, res) => {
    var id = req.params.id;

    Subcatclassification001mb.findOne({ _id: id }, function (err, subcatclassification001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subcatclassification001mb.',
                error: err
            });
        }

        if (!subcatclassification001mb) {
            return res.status(404).json({
                message: 'No such subcatclassification001mb'
            });
        }

        return res.json(subcatclassification001mb);
    });
};

export const create = async (req, res) => {
    var subcatclassification001mb = new Subcatclassification001mb({
        catcode: req.body.catcode,
        subcatcode: req.body.subcatcode,
        classificationid: req.body.classificationid,
        classificationname: req.body.classificationname,
        status: req.body.status,
        inserteduser: req.body.inserteduser,
        inserteddatetime: req.body.inserteddatetime,
        updateduser: req.body.updateduser,
        updateddatetime: req.body.updateddatetime
    });

    subcatclassification001mb.save(function (err, subcatclassification001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating subcatclassification001mb',
                error: err
            });
        }

        return res.status(201).json(subcatclassification001mb);
    });
};

export const update = (req, res) => {
    var id = req.params.id;

    Subcatclassification001mb.findOne({ _id: id }, function (err, subcatclassification001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subcatclassification001mb',
                error: err
            });
        }

        if (!subcatclassification001mb) {
            return res.status(404).json({
                message: 'No such subcatclassification001mb'
            });
        }

        subcatclassification001mb.catcode = req.body.catcode ? req.body.catcode : subcatclassification001mb.catcode;
        subcatclassification001mb.subcatcode = req.body.subcatcode ? req.body.subcatcode : subcatclassification001mb.subcatcode;
        subcatclassification001mb.classificationid = req.body.classificationid ? req.body.classificationid : subcatclassification001mb.classificationid;
        subcatclassification001mb.classificationname = req.body.classificationname ? req.body.classificationname : subcatclassification001mb.classificationname;
        subcatclassification001mb.status = req.body.status ? req.body.status : subcatclassification001mb.status;
        subcatclassification001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subcatclassification001mb.inserteduser;
        subcatclassification001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subcatclassification001mb.inserteddatetime;
        subcatclassification001mb.updateduser = req.body.updateduser ? req.body.updateduser : subcatclassification001mb.updateduser;
        subcatclassification001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subcatclassification001mb.updateddatetime;

        subcatclassification001mb.save(function (err, subcatclassification001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating subcatclassification001mb.',
                    error: err
                });
            }

            return res.json(subcatclassification001mb);
        });
    });
};

export const remove = (req, res) => {
    var id = req.params.id;

    Subcatclassification001mb.findByIdAndRemove(id, function (err, subcatclassification001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subcatclassification001mb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};