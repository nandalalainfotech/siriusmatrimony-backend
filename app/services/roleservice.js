import db from "../models/main.js";

const Role001wb = db.role001wb;

export const list = async(req, res) => {
    Role001wb.find(function(err, role001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting role001wb.',
                error: err
            });
        }

        return res.json(role001wb);
    });
};

export const show = async(req, res) => {
    var id = req.params.id;

    Role001wb.findOne({ _id: id }, function(err, role001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting role001wb.',
                error: err
            });
        }

        if (!role001wb) {
            return res.status(404).json({
                message: 'No such role001wb'
            });
        }

        return res.json(role001wb);
    });
};

export const create = (req, res) => {

    const role001wb = new Role001wb();
    role001wb.rolename = req.body.rolename;
    role001wb.save(function(err, role001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating role001wb',
                    error: err
                });
            }
    
            return res.status(201).json('role001wb Created!');
        });
};

export const update = async(req, res) => {
    var id = req.params.id;

    Role001wb.findOne({ _id: id }, function(err, role001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting role001wb',
                error: err
            });
        }

        if (!role001wb) {
            return res.status(404).json({
                message: 'No such role001wb'
            });
        }
        role001wb.rolename = req.body.rolename ? req.body.rolename : role001wb.rolename;
        role001wb.save(function(err, role001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating role001wb.',
                    error: err
                });
            }

            return res.json(role001wb);
        });
    });
};


export const remove = async(req, res) => {
    var id = req.params.id;

    Role001wb.findByIdAndRemove(id, function(err, role001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the role001wb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
};