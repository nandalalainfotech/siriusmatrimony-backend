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

// export const create = async(req, res) => {
//     var role001wb = new Role001wb({
//         rolename: req.body.rolename,
//         status: req.body.status,
//         inserteduser: req.body.inserteduser,
//         inserteddatetime: req.body.inserteddatetime,
//         updateduser: req.body.updateduser,
//         updateddatetime: req.body.updateddatetime
//     });

//     role001wb.save(function(err, role001wb) {
//         if (err) {
//             return res.status(500).json({
//                 message: 'Error when creating role001wb',
//                 error: err
//             });
//         }

//         return res.status(201).json(role001wb);
//     });
// };
export const create = (req, res) => {
    const role001wb = new Role001wb();
    role001wb.rolename = req.body.rolename;
    role001wb.status = req.body.status;
    role001wb.inserteduser = req.body.inserteduser;
    role001wb.inserteddatetime = req.body.inserteddatetime;
    role001wb.updateduser = req.body.updateduser;
    role001wb.updateddatetime = req.body.updateddatetime;

    role001wb.save()
        .then((result) => {
            res.json({ message: 'User created!', result });
        })
        .catch((error) => {
            res.status(500).json({ error });
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