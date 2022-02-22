import db from "../models/main.js";

const Role001mb = db.role001mb;

export const list = async(req, res) => {
    Role001mb.find(function(err, role001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting role001mb.',
                error: err
            });
        }

        return res.json(role001mb);
    });
};

export const show = async(req, res) => {
    var id = req.params.id;

    Role001mb.findOne({ _id: id }, function(err, role001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting role001mb.',
                error: err
            });
        }

        if (!role001mb) {
            return res.status(404).json({
                message: 'No such role001mb'
            });
        }

        return res.json(role001mb);
    });
};

export const create = (req, res) => {

    const role001mb = new Role001mb();
    role001mb.rolename = req.body.rolename;
    role001mb.save(function(err, role001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating role001mb',
                    error: err
                });
            }
    
            return res.status(201).json('role001mb Created!');
        });
};

export const update = async(req, res) => {
    var id = req.params.id;

    Role001mb.findOne({ _id: id }, function(err, role001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting role001mb',
                error: err
            });
        }

        if (!role001mb) {
            return res.status(404).json({
                message: 'No such role001mb'
            });
        }
        role001mb.rolename = req.body.rolename ? req.body.rolename : role001mb.rolename;
        role001mb.save(function(err, role001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating role001mb.',
                    error: err
                });
            }

            return res.json(role001mb);
        });
    });
};


export const remove = async(req, res) => {
    var id = req.params.id;

    Role001mb.findByIdAndRemove(id, function(err, role001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the role001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
};