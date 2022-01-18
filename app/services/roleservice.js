import db from "../models/main.js";

const Role001wb = db.role001wb;
const Subscriberdetails001wb = db.subscriberdetails001wb
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
    role001wb.subscid = req.body.subscid.id;
    role001wb.roleid = req.body.roleid;
    role001wb.rolename = req.body.rolename;
    role001wb.status = req.body.status;
    role001wb.inserteduser = req.body.inserteduser;
    role001wb.inserteddatetime = req.body.inserteddatetime;
    role001wb.updateduser = req.body.updateduser;
    role001wb.updateddatetime = req.body.updateddatetime;

    role001wb.save()
        .then((result) => {
            Subscriberdetails001wb.findOne({ _id: role001wb.subscid }, (err, user) => {
                if (user) {
                    user.roleid.push(role001wb);
                    user.save();
                    res.json({ message: 'Role created!' });
                }
            });
        })
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
        role001wb.subscid = req.body.subscid.id ? req.body.subscid.id : role001wb.subscid;
        role001wb.roleid = req.body.roleid ? req.body.roleid : role001wb.roleid;
        role001wb.rolename = req.body.rolename ? req.body.rolename : role001wb.rolename;
        role001wb.status = req.body.status ? req.body.status : role001wb.status;
        role001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : role001wb.inserteduser;
        role001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : role001wb.inserteddatetime;
        role001wb.updateduser = req.body.updateduser ? req.body.updateduser : role001wb.updateduser;
        role001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : role001wb.updateddatetime;

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

        return res.status(204).json();
    });
};