import db from "../models/main.js";

const Payment001mb = db.payment001mb
const Subscriberdetails001wb = db.subscriberdetails001wb

export const list = async (req, res) => {
    Payment001mb.find(function (err, payment001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting payment001mb.',
                error: err
            });
        }

        return res.json(payment001mb);
    });
};

export const show = async (req, res) => {
    var id = req.params.id;

    Payment001mb.findOne({ _id: id }, function (err, payment001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting payment001mb.',
                error: err
            });
        }

        if (!payment001mb) {
            return res.status(404).json({
                message: 'No such payment001mb'
            });
        }

        return res.json(payment001mb);
    });
};

export const create = async (req, res) => {
    const payment001mb = new Payment001mb();
    payment001mb.subpid = req.body.subpid.id;
    payment001mb.subcid = req.body.subcid.id;
    payment001mb.payment = req.body.payment;
    payment001mb.status = req.body.status;
    payment001mb.inserteduser = req.body.inserteduser;
    payment001mb.inserteddatetime = req.body.inserteddatetime;
    payment001mb.updateduser = req.body.updateduser;
    payment001mb.updateddatetime = req.body.updateddatetime;
    Subscriberdetails001wb.findOne({ _id: payment001mb.subcid }, (err, user) => {
            if (user) {
                user.payid.push(payment001mb);
                user.save();
                payment001mb.save();
                return res.json({ message: 'payment001mb created!' });
            } else {
                return res.status(500).json({
                    message: 'Error when creating payment001mb'
                });
            }

        });
    
};
    export const update = async (req, res) => {
        var id = req.params.id;

        Payment001mb.findOne({ _id: id }, function (err, payment001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting payment001mb',
                    error: err
                });
            }

            if (!payment001mb) {
                return res.status(404).json({
                    message: 'No such payment001mb'
                });
            }
            payment001mb.payment = req.body.payment ? req.body.payment : payment001mb.payment;
            payment001mb.subcid = req.body.subcid.id ? req.body.subcid.id : payment001mb.subcid;
            payment001mb.subpid = req.body.subpid.id ? req.body.subpid.id : payment001mb.subpid;
            payment001mb.status = req.body.status ? req.body.status : payment001mb.status;
            payment001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : payment001mb.inserteduser;
            payment001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : payment001mb.inserteddatetime;
            payment001mb.updateduser = req.body.updateduser ? req.body.updateduser : payment001mb.updateduser;
            payment001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : payment001mb.updateddatetime;
            payment001mb.save(function (err, payment001mb) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating payment001mb.',
                        error: err
                    });
                }

                return res.json(payment001mb);
            });
        });
    };
    export const remove = async (req, res) => {
        var id = req.params.id;

        Payment001mb.findByIdAndRemove(id, function (err, payment001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the payment001mb.',
                    error: err
                });
            }

            return res.json({ message: 'Deleted Sucessfully' });
        });
    };