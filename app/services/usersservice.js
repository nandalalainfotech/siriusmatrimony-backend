import db from "../models/main.js";

const Users001wb = db.users001wb

export const list = async (req, res) => {
    Users001wb.find(function (err, users001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting users001wb.',
                error: err
            });
        }

        return res.json(users001wb);
    });
};

export const show = async (req, res) => {
    var id = req.params.id;

    Users001wb.findOne({ _id: id }, function (err, users001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting users001wb.',
                error: err
            });
        }

        if (!users001wb) {
            return res.status(404).json({
                message: 'No such users001wb'
            });
        }

        return res.json(users001wb);
    });
};

export const create = async (req, res) => {
    var users001wb = new Users001wb();
    users001wb.subscid = req.body.subscid.id,
    users001wb.roleid = req.body.roleid.id,
    users001wb.firstname = req.body.firstname,
    users001wb.lasttname = req.body.lasttname,
    users001wb.zipcode = req.body.zipcode,
    users001wb.employeeid = req.body.employeeid,
    users001wb.dob = req.body.dob,
    users001wb.email = req.body.email,
    users001wb.confirmemail = req.body.confirmemail,
    users001wb.sex = req.body.sex,
    users001wb.address1 = req.body.address1,
    users001wb.address2 = req.body.address2,
    users001wb.address3 = req.body.address3,
    users001wb.cityid = req.body.cityid.id,
    users001wb.stateid = req.body.stateid.id,
    users001wb.countryid = req.body.countryid.id,
    users001wb.mobile = req.body.mobile,
    users001wb.landline = req.body.landline,
    users001wb.status = req.body.status,
    users001wb.inserteduser = req.body.inserteduser,
    users001wb.inserteddatetime = req.body.inserteddatetime,
    users001wb.updateduser = req.body.updateduser,
    users001wb.updateddatetime = req.body.updateddatetime
    users001wb.save()
        .then((result) => {
            res.json({ message: 'user created' });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

export const update = async (req, res) => {
    var id = req.params.id;

    Users001wb.findOne({ _id: id }, function (err, users001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting users001wb',
                error: err
            });
        }

        if (!users001wb) {
            return res.status(404).json({
                message: 'No such users001wb'
            });
        }
        users001wb.subscid = req.body.subscid.id ? req.body.subscid.id : users001wb.subscid;
        users001wb.roleid = req.body.roleid.id ? req.body.roleid.id : users001wb.role;
        users001wb.firstname = req.body.firstname ? req.body.firstname : users001wb.firstname;
        users001wb.lasttname = req.body.lasttname ? req.body.lasttname : users001wb.lasttname;
        users001wb.zipcode = req.body.zipcode ? req.body.zipcode : users001wb.zipcode;
        users001wb.employeeid = req.body.employeeid ? req.body.employeeid : users001wb.employeeid;
        users001wb.dob = req.body.dob ? req.body.dob : users001wb.dob;
        users001wb.email = req.body.email ? req.body.email : users001wb.email;
        users001wb.confirmemail = req.body.confirmemail ? req.body.confirmemail : users001wb.confirmemail;
        users001wb.sex = req.body.sex ? req.body.sex : users001wb.sex;
        users001wb.address1 = req.body.address1 ? req.body.address1 : users001wb.address1;
        users001wb.address2 = req.body.address2 ? req.body.address2 : users001wb.address2;
        users001wb.address3 = req.body.address3 ? req.body.address3 : users001wb.address3;
        users001wb.cityid = req.body.cityid.id ? req.body.cityid.id : users001wb.cityid;
        users001wb.stateid = req.body.stateid.id ? req.body.stateid.id : users001wb.stateid;
        users001wb.countryid = req.body.countryid.id ? req.body.countryid.id : users001wb.countryid;
        users001wb.mobile = req.body.mobile ? req.body.mobile : users001wb.mobile;
        users001wb.landline = req.body.landline ? req.body.landline : users001wb.landline;
        users001wb.status = req.body.status ? req.body.status : users001wb.status;
        users001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : users001wb.inserteduser;
        users001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : users001wb.inserteddatetime;
        users001wb.updateduser = req.body.updateduser ? req.body.updateduser : users001wb.updateduser;
        users001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : users001wb.updateddatetime;

        users001wb.save(function (err, users001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating users001wb.',
                    error: err
                });
            }

            return res.json(users001wb);
        });
    });
};
export const remove = async (req, res) => {
    var id = req.params.id;

    Users001wb.findByIdAndRemove(id, function (err, users001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the users001wb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};