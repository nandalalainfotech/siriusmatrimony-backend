import db from "../models/main.js";

const Categorydetails001mb = db.categorydetails001mb;

export const list = async(req, res) => {
    Categorydetails001mb.find(function(err, categorydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting categorydetails001mb.',
                error: err
            });
        }

        return res.json(categorydetails001mb);
    });
};


export const show = async(req, res) => {
    var id = req.params.id;

    Categorydetails001mb.findOne({ _id: id }, function(err, categorydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting categorydetails001mb.',
                error: err
            });
        }

        if (!categorydetails001mb) {
            return res.status(404).json({
                message: 'No such categorydetails001mb'
            });
        }

        return res.json(categorydetails001mb);
    });
};


export const create = async(req, res) => {
    const categorydetails001mb = new Categorydetails001mb()
    categorydetails001mb.catname = req.body.catname;
    categorydetails001mb.status = req.body.status;
    categorydetails001mb.inserteduser = req.body.inserteduser;
    categorydetails001mb.inserteddatetime = req.body.inserteddatetime;
    categorydetails001mb.updateduser = req.body.updateduser;
    categorydetails001mb.updateddatetime = req.body.updateddatetime;
    categorydetails001mb.save()
        .then((result) => {
                    return res.json({ message: 'categorydetails created!' });
        })
        .catch((error) => {
            return res.status(500).json({ error });
        });
};


export const update = async(req, res) => {
    var id = req.params.id;

    Categorydetails001mb.findOne({ _id: id }, function(err, categorydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting categorydetails001mb',
                error: err
            });
        }

        if (!categorydetails001mb) {
            return res.status(404).json({
                message: 'No such categorydetails001mb'
            });
        }
        categorydetails001mb.catname = req.body.catname ? req.body.catname : categorydetails001mb.catname;
        categorydetails001mb.status = req.body.status ? req.body.status : categorydetails001mb.status;
        categorydetails001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : categorydetails001mb.inserteduser;
        categorydetails001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : categorydetails001mb.inserteddatetime;
        categorydetails001mb.updateduser = req.body.updateduser ? req.body.updateduser : categorydetails001mb.updateduser;
        categorydetails001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : categorydetails001mb.updateddatetime;

        categorydetails001mb.save(function(err, categorydetails001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating categorydetails001mb.',
                    error: err
                });
            }

            return res.json(categorydetails001mb);
        });
    });
};
export const remove = async(req, res) => {
    var id = req.params.id;

    Categorydetails001mb.findByIdAndRemove(id, function(err, categorydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the categorydetails001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
};