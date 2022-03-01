import db from "../models/main.js";

const Subscriberprofessionalinfo002wb = db.subscriberprofessionalinfo002wb

export const list = async (req, res) => {
    Subscriberprofessionalinfo002wb.find(function (err, subscriberprofessionalinfo002wbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberprofessionalinfo002wb.',
                error: err
            });
        }

        return res.json(subscriberprofessionalinfo002wbs);
    });
};

export const show = async (req, res) => {
    var id = req.params.id;

    Subscriberprofessionalinfo002wb.findOne({ _id: id }, function (err, subscriberprofessionalinfo002wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberprofessionalinfo002wb.',
                error: err
            });
        }

        if (!subscriberprofessionalinfo002wb) {
            return res.status(404).json({
                message: 'No such subscriberprofessionalinfo002wb'
            });
        }

        return res.json(subscriberprofessionalinfo002wb);
    });
};


export const create = async (req, res) => {

    const subscriberprofessionalinfo002wb = new Subscriberprofessionalinfo002wb();
    subscriberprofessionalinfo002wb.professionaldetails = req.body.professionaldetails;
    subscriberprofessionalinfo002wb.job = req.body.job;
    subscriberprofessionalinfo002wb.flex1 = req.body.flex1;
    subscriberprofessionalinfo002wb.flex2 = req.body.flex2;
    subscriberprofessionalinfo002wb.flex3 = req.body.flex3;
    subscriberprofessionalinfo002wb.flex4 = req.body.flex4;
    subscriberprofessionalinfo002wb.flex5 = req.body.flex5;
    subscriberprofessionalinfo002wb.flex6 = req.body.flex6;
    subscriberprofessionalinfo002wb.flex7 = req.body.flex7;
    subscriberprofessionalinfo002wb.flex8 = req.body.flex8;
    subscriberprofessionalinfo002wb.flex9 = req.body.flex9;
    subscriberprofessionalinfo002wb.flex10 = req.body.flex10;
    subscriberprofessionalinfo002wb.flex11 = req.body.flex11;
    subscriberprofessionalinfo002wb.flex12 = req.body.flex12;
    subscriberprofessionalinfo002wb.inserteduser = req.body.inserteduser,
    subscriberprofessionalinfo002wb.inserteddatetime = req.body.inserteddatetime,
    subscriberprofessionalinfo002wb.updateduser = req.body.updateduser,
    subscriberprofessionalinfo002wb.updateddatetime = req.body.updateddatetime
    subscriberprofessionalinfo002wb.save()
        .then((result) => {
                    return res.json({ message: 'subscriberprofessional created!' });
        })
        .catch((error) => {
            return res.status(500).json({ error });
        });
};
export const update = async (req, res) => {
    var id = req.params.id;

    Subscriberprofessionalinfo002wb.findOne({ _id: id }, function (err, subscriberprofessionalinfo002wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberprofessionalinfo002wb',
                error: err
            });
        }

        if (!subscriberprofessionalinfo002wb) {
            return res.status(404).json({
                message: 'No such subscriberprofessionalinfo002wb'
            });
        }
        subscriberprofessionalinfo002wb.professionaldetails = req.body.professionaldetails ? req.body.professionaldetails : subscriberprofessionalinfo002wb.professionaldetails;
        subscriberprofessionalinfo002wb.job = req.body.job ? req.body.job : subscriberprofessionalinfo002wb.job;
        subscriberprofessionalinfo002wb.flex1 = req.body.flex1 ? req.body.flex1 : subscriberprofessionalinfo002wb.flex1;
        subscriberprofessionalinfo002wb.flex2 = req.body.flex2 ? req.body.flex2 : subscriberprofessionalinfo002wb.flex2;
        subscriberprofessionalinfo002wb.flex3 = req.body.flex3 ? req.body.flex3 : subscriberprofessionalinfo002wb.flex3;
        subscriberprofessionalinfo002wb.flex4 = req.body.flex4 ? req.body.flex4 : subscriberprofessionalinfo002wb.flex4;
        subscriberprofessionalinfo002wb.flex5 = req.body.flex5 ? req.body.flex5 : subscriberprofessionalinfo002wb.flex5;
        subscriberprofessionalinfo002wb.flex6 = req.body.flex6 ? req.body.flex6 : subscriberprofessionalinfo002wb.flex6;
        subscriberprofessionalinfo002wb.flex7 = req.body.flex7 ? req.body.flex7 : subscriberprofessionalinfo002wb.flex7;
        subscriberprofessionalinfo002wb.flex8 = req.body.flex8 ? req.body.flex8 : subscriberprofessionalinfo002wb.flex8;
        subscriberprofessionalinfo002wb.flex9 = req.body.flex9 ? req.body.flex9 : subscriberprofessionalinfo002wb.flex9;
        subscriberprofessionalinfo002wb.flex10 = req.body.flex10 ? req.body.flex10 : subscriberprofessionalinfo002wb.flex10;
        subscriberprofessionalinfo002wb.flex11 = req.body.flex11 ? req.body.flex11 : subscriberprofessionalinfo002wb.flex11;
        subscriberprofessionalinfo002wb.flex12 = req.body.flex12 ? req.body.flex12 : subscriberprofessionalinfo002wb.flex12;
        subscriberprofessionalinfo002wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subscriberprofessionalinfo002wb.inserteduser;
        subscriberprofessionalinfo002wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subscriberprofessionalinfo002wb.inserteddatetime;
        subscriberprofessionalinfo002wb.updateduser = req.body.updateduser ? req.body.updateduser : subscriberprofessionalinfo002wb.updateduser;
        subscriberprofessionalinfo002wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subscriberprofessionalinfo002wb.updateddatetime;
        subscriberprofessionalinfo002wb.save(function (err, subscriberprofessionalinfo002wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating subscriberprofessionalinfo002wb.',
                    error: err
                });
            }

            return res.json(subscriberprofessionalinfo002wb);
        });
    });
};

export const remove = async (req, res) => {
    var id = req.params.id;

    Subscriberprofessionalinfo002wb.findByIdAndRemove(id, function (err, subscriberprofessionalinfo002wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subscriberprofessionalinfo002wb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
};