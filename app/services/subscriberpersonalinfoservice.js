import db from "../models/main.js";

const Subscriberpersonalinfo001wb = db.subscriberpersonalinfo001wb;

export const list = async(req, res) => {
    Subscriberpersonalinfo001wb.find(function(err, subscriberpersonalinfo001wbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberpersonalinfo001wb.',
                error: err
            });
        }

        return res.json(subscriberpersonalinfo001wbs);
    });
};

export const show = async(req, res) => {
    var id = req.params.id;

    Subscriberpersonalinfo001wb.findOne({ _id: id }, function(err, subscriberpersonalinfo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberpersonalinfo001wb.',
                error: err
            });
        }

        if (!subscriberpersonalinfo001wb) {
            return res.status(404).json({
                message: 'No such subscriberpersonalinfo001wb'
            });
        }

        return res.json(subscriberpersonalinfo001wb);
    });
};

export const create = async(req, res) => {
    const subscriberpersonalinfo001wb = new Subscriberpersonalinfo001wb();
    subscriberpersonalinfo001wb.personaldetails = req.body.personaldetails;
    subscriberpersonalinfo001wb.hobbies = req.body.hobbies;
    subscriberpersonalinfo001wb.flex1 = req.body.flex1;
    subscriberpersonalinfo001wb.flex2 = req.body.flex2;
    subscriberpersonalinfo001wb.flex3 = req.body.flex3;
    subscriberpersonalinfo001wb.flex4 = req.body.flex4;
    subscriberpersonalinfo001wb.flex5 = req.body.flex5;
    subscriberpersonalinfo001wb.flex6 = req.body.flex6;
    subscriberpersonalinfo001wb.flex7 = req.body.flex7;
    subscriberpersonalinfo001wb.flex8 = req.body.flex8;
    subscriberpersonalinfo001wb.flex9 = req.body.flex9;
    subscriberpersonalinfo001wb.flex10 = req.body.flex10;
    subscriberpersonalinfo001wb.flex11 = req.body.flex11;
    subscriberpersonalinfo001wb.flex12 = req.body.flex12;
    subscriberpersonalinfo001wb.inserteduser = req.body.inserteduser;
    subscriberpersonalinfo001wb.inserteddatetime = req.body.inserteddatetime;
    subscriberpersonalinfo001wb.updateduser = req.body.updateduser;
    subscriberpersonalinfo001wb.updateddatetime = req.body.updateddatetime;
    subscriberpersonalinfo001wb.save()
        .then((result) => {
                    return res.json({ message: 'subscriberpersonalinfo created!' });
        })
        .catch((error) => {
            return res.status(500).json({ error });
        });
};

export const update = async(req, res) => {
    var id = req.params.id;

    Subscriberpersonalinfo001wb.findOne({ _id: id }, function(err, subscriberpersonalinfo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberpersonalinfo001wb',
                error: err
            });
        }

        if (!subscriberpersonalinfo001wb) {
            return res.status(404).json({
                message: 'No such subscriberpersonalinfo001wb'
            });
        }

        subscriberpersonalinfo001wb.personaldetails = req.body.personaldetails ? req.body.personaldetails : subscriberpersonalinfo001wb.personaldetails;
        subscriberpersonalinfo001wb.hobbies = req.body.hobbies ? req.body.hobbies : subscriberpersonalinfo001wb.hobbies;
        subscriberpersonalinfo001wb.flex1 = req.body.flex1 ? req.body.flex1 : subscriberpersonalinfo001wb.flex1;
        subscriberpersonalinfo001wb.flex2 = req.body.flex2 ? req.body.flex2 : subscriberpersonalinfo001wb.flex2;
        subscriberpersonalinfo001wb.flex3 = req.body.flex3 ? req.body.flex3 : subscriberpersonalinfo001wb.flex3;
        subscriberpersonalinfo001wb.flex4 = req.body.flex4 ? req.body.flex4 : subscriberpersonalinfo001wb.flex4;
        subscriberpersonalinfo001wb.flex5 = req.body.flex5 ? req.body.flex5 : subscriberpersonalinfo001wb.flex5;
        subscriberpersonalinfo001wb.flex6 = req.body.flex6 ? req.body.flex6 : subscriberpersonalinfo001wb.flex6;
        subscriberpersonalinfo001wb.flex7 = req.body.flex7 ? req.body.flex7 : subscriberpersonalinfo001wb.flex7;
        subscriberpersonalinfo001wb.flex8 = req.body.flex8 ? req.body.flex8 : subscriberpersonalinfo001wb.flex8;
        subscriberpersonalinfo001wb.flex9 = req.body.flex9 ? req.body.flex9 : subscriberpersonalinfo001wb.flex9;
        subscriberpersonalinfo001wb.flex10 = req.body.flex10 ? req.body.flex10 : subscriberpersonalinfo001wb.flex10;
        subscriberpersonalinfo001wb.flex11 = req.body.flex11 ? req.body.flex11 : subscriberpersonalinfo001wb.flex11;
        subscriberpersonalinfo001wb.flex12 = req.body.flex12 ? req.body.flex12 : subscriberpersonalinfo001wb.flex12;
        subscriberpersonalinfo001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subscriberpersonalinfo001wb.inserteduser;
        subscriberpersonalinfo001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subscriberpersonalinfo001wb.inserteddatetime;
        subscriberpersonalinfo001wb.updateduser = req.body.updateduser ? req.body.updateduser : subscriberpersonalinfo001wb.updateduser;
        subscriberpersonalinfo001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subscriberpersonalinfo001wb.updateddatetime;

        subscriberpersonalinfo001wb.save(function(err, subscriberpersonalinfo001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating subscriberpersonalinfo001wb.',
                    error: err
                });
            }

            return res.json(subscriberpersonalinfo001wb);
        });
    });
};

export const remove = async(req, res) => {
    var id = req.params.id;

    Subscriberpersonalinfo001wb.findByIdAndRemove(id, function(err, subscriberpersonalinfo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subscriberpersonalinfo001wb.',
                error: err
            });
        }

        return res.json({message:"Deleted Sucessfully"});
    });
};