import db from "../models/main.js";

const Religion001mb = db.religion001mb;

export const list = async(req, res) => {
    Religion001mb.find(function(err, religion001mbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting religion001mb.',
                error: err
            });
        }

        return res.json(religion001mbs);
    });
};
export const show = (req, res) => {
    var id = req.params.id;

    Religion001mb.findOne({ _id: id }, function(err, religion001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting religion001mb.',
                error: err
            });
        }

        if (!religion001mb) {
            return res.status(404).json({
                message: 'No such religion001mb'
            });
        }

        return res.json(religion001mb);
    });
};

export const create = async(req, res) => {
    const religion001mb = new Religion001mb();
    religion001mb.religionname = req.body.religionname;
    religion001mb.religiondesc = req.body.religiondesc;
    religion001mb.status = req.body.status;
    religion001mb.inserteduser = req.body.inserteduser;
    religion001mb.inserteddatetime = req.body.inserteddatetime;
    religion001mb.updateduser = req.body.updateduser;
    religion001mb.updateddatetime = req.body.updateddatetime;

    religion001mb.save()
        .then((result) => {
                    return res.json({ message: 'religion created!' });
        })
        .catch((error) => {
            return res.status(500).json({ error });
        });
};
export const update = async(req, res) => {
    var id = req.params.id;

    Religion001mb.findOne({ _id: id }, function(err, religion001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting religion001mb',
                error: err
            });
        }

        if (!religion001mb) {
            return res.status(404).json({
                message: 'No such religion001mb'
            });
        }
        religion001mb.religionname = req.body.religionname ? req.body.religionname : religion001mb.religionname;
        religion001mb.religiondesc = req.body.religiondesc ? req.body.religiondesc : religion001mb.religiondesc;
        religion001mb.status = req.body.status ? req.body.status : religion001mb.status;
        religion001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : religion001mb.inserteduser;
        religion001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : religion001mb.inserteddatetime;
        religion001mb.updateduser = req.body.updateduser ? req.body.updateduser : religion001mb.updateduser;
        religion001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : religion001mb.updateddatetime;

        religion001mb.save(function(err, religion001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating religion001mb.',
                    error: err
                });
            }

            return res.json(religion001mb);
        });
    });
};
export const remove = async(req, res) => {
    var id = req.params.id;

    Religion001mb.findByIdAndRemove(id, function(err, religion001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the religion001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
};