import db from "../models/main.js";

const Companydetails001mb = db.companydetails001mb;

export const list = async(req, res) => {

    Companydetails001mb.find(function (err, companydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting companydetails001mb.',
                error: err
            });
        }

        return res.json(companydetails001mb);
    });
};
export const show = async(req, res) => {
    var id = req.params.id;

    Companydetails001mb.findOne({ _id: id }, function (err, companydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting companydetails001mb.',
                error: err
            });
        }

        if (!companydetails001mb) {
            return res.status(404).json({
                message: 'No such companydetails001mb'
            });
        }

        return res.json(companydetails001mb);
    });
};


export const create = async (req, res) => {
    var companydetails001mb = new Companydetails001mb({
        companycode: req.body.companycode,
        companyname: req.body.companyname,
        address: req.body.address,
        phonenumber: req.body.phonenumber,
        regionalid: req.body.regionalid,
        status: req.body.status,
        inserteduser: req.body.inserteduser,
        inserteddatetime: req.body.inserteddatetime,
        updateduser: req.body.updateduser,
        updateddatetime: req.body.updateddatetime
    });

    companydetails001mb.save(function (err, companydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating companydetails001mb',
                error: err
            });
        }

        return res.status(201).json(companydetails001mb);
    });
};

export const update = async(req, res) => {
    var id = req.params.id;

    Companydetails001mb.findOne({ _id: id }, function (err, companydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting companydetails001mb',
                error: err
            });
        }

        if (!companydetails001mb) {
            return res.status(404).json({
                message: 'No such companydetails001mb'
            });
        }

        companydetails001mb.companycode = req.body.companycode ? req.body.companycode : companydetails001mb.companycode;
        companydetails001mb.companyname = req.body.companyname ? req.body.companyname : companydetails001mb.companyname;
        companydetails001mb.address = req.body.address ? req.body.address : companydetails001mb.address;
        companydetails001mb.phonenumber = req.body.phonenumber ? req.body.phonenumber : companydetails001mb.phonenumber;
        companydetails001mb.regionalid = req.body.regionalid ? req.body.regionalid : companydetails001mb.regionalid;
        companydetails001mb.status = req.body.status ? req.body.status : companydetails001mb.status;
        companydetails001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : companydetails001mb.inserteduser;
        companydetails001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : companydetails001mb.inserteddatetime;
        companydetails001mb.updateduser = req.body.updateduser ? req.body.updateduser : companydetails001mb.updateduser;
        companydetails001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : companydetails001mb.updateddatetime;

        companydetails001mb.save(function (err, companydetails001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating companydetails001mb.',
                    error: err
                });
            }

            return res.json(companydetails001mb);
        });
    });
};
export const remove = async(req, res) => {
    var id = req.params.id;

    Companydetails001mb.findByIdAndRemove(id, function (err, companydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the companydetails001mb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};
