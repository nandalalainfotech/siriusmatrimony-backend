import db from "../models/main.js";

const Regionaldetails001mb = db.regionaldetails001mb;

export const list = async(req, res) => {
    Regionaldetails001mb.find(function(err, regionaldetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting regionaldetails001mb.',
                error: err
            });
        }

        return res.json(regionaldetails001mb);
    });
};
export const show = (req, res) => {
    var id = req.params.id;

    Regionaldetails001mb.findOne({ _id: id }, function(err, regionaldetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting regionaldetails001mb.',
                error: err
            });
        }

        if (!regionaldetails001mb) {
            return res.status(404).json({
                message: 'No such regionaldetails001mb'
            });
        }

        return res.json(regionaldetails001mb);
    });
};

export const create = async(req, res) => {

    const regionaldetails001mb = new Regionaldetails001mb();
    regionaldetails001mb.regionalname = req.body.regionalname;
    regionaldetails001mb.regionaldesc = req.body.regionaldesc;
    regionaldetails001mb.status = req.body.status;
    regionaldetails001mb.inserteduser = req.body.inserteduser;
    regionaldetails001mb.inserteddatetime = req.body.inserteddatetime;
    regionaldetails001mb.updateduser = req.body.updateduser;
    regionaldetails001mb.updateddatetime = req.body.updateddatetime;
    regionaldetails001mb.save()
        .then((result) => {
                    return res.json({ message: 'regionaldetails created!' });
            })
        .catch((error) => {
            return res.status(500).json({ error });
        });
};
export const update = async(req, res) => {
    var id = req.params.id;

    Regionaldetails001mb.findOne({ _id: id }, function(err, regionaldetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting regionaldetails001mb',
                error: err
            });
        }

        if (!regionaldetails001mb) {
            return res.status(404).json({
                message: 'No such regionaldetails001mb'
            });
        }
        regionaldetails001mb.regionalname = req.body.regionalname ? req.body.regionalname : regionaldetails001mb.regionalname;
        regionaldetails001mb.regionaldesc = req.body.regionaldesc ? req.body.regionaldesc : regionaldetails001mb.regionaldesc;
        regionaldetails001mb.status = req.body.status ? req.body.status : regionaldetails001mb.status;
        regionaldetails001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : regionaldetails001mb.inserteduser;
        regionaldetails001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : regionaldetails001mb.inserteddatetime;
        regionaldetails001mb.updateduser = req.body.updateduser ? req.body.updateduser : regionaldetails001mb.updateduser;
        regionaldetails001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : regionaldetails001mb.updateddatetime;

        regionaldetails001mb.save(function(err, regionaldetails001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating regionaldetails001mb.',
                    error: err
                });
            }

            return res.json(regionaldetails001mb);
        });
    });
};
export const remove = async(req, res) => {
    var id = req.params.id;

    Regionaldetails001mb.findByIdAndRemove(id, function(err, regionaldetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the regionaldetails001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
};