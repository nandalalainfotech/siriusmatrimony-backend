import db from "../models/main.js";

const Subscriptionmaster001mb = db.subscriptionmaster001mb

export const list = async (req, res) => {
    Subscriptionmaster001mb.find(function (err, subscriptionmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriptionmaster001mb.',
                error: err
            });
        }

        return res.json(subscriptionmaster001mb);
    });
};

export const show = async (req, res) => {
    var id = req.params.id;

    Subscriptionmaster001mb.findOne({ _id: id }, function (err, subscriptionmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriptionmaster001mb.',
                error: err
            });
        }

        if (!subscriptionmaster001mb) {
            return res.status(404).json({
                message: 'No such subscriptionmaster001mb'
            });
        }

        return res.json(subscriptionmaster001mb);
    });
};

export const create = async (req, res) => {
    const subscriptionmaster001mb = new Subscriptionmaster001mb();
    subscriptionmaster001mb.personid = req.body.personid.id;
    subscriptionmaster001mb.subpname = req.body.subpname;
    subscriptionmaster001mb.description = req.body.description;
    subscriptionmaster001mb.tenure = req.body.tenure;
    subscriptionmaster001mb.amount = req.body.amount;
    subscriptionmaster001mb.status = req.body.status;
    subscriptionmaster001mb.discountflag = req.body.discountflag;
    subscriptionmaster001mb.inserteduser = req.body.inserteduser;
    subscriptionmaster001mb.inserteddatetime = req.body.inserteddatetime;
    subscriptionmaster001mb.updateduser = req.body.updateduser;
    subscriptionmaster001mb.updateddatetime = req.body.updateddatetime;
    subscriptionmaster001mb.save(function (err, subscriptionmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating subscriptionmaster001mb',
                error: err
            });
        }

        return res.json("subscriptionmaster001mb created");
    });
};

export const update = async (req, res) => {
    var id = req.params.id;

    Subscriptionmaster001mb.findOne({ _id: id }, function (err, subscriptionmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriptionmaster001mb',
                error: err
            });
        }

        if (!subscriptionmaster001mb) {
            return res.status(404).json({
                message: 'No such subscriptionmaster001mb'
            });
        }
        subscriptionmaster001mb.personid = req.body.personid.id ? req.body.personid.id : subscriptionmaster001mb.personid;
        subscriptionmaster001mb.subpname = req.body.subpname ? req.body.subpname : subscriptionmaster001mb.subpname;
        subscriptionmaster001mb.description = req.body.description ? req.body.description : subscriptionmaster001mb.description;
        subscriptionmaster001mb.tenure = req.body.tenure ? req.body.tenure : subscriptionmaster001mb.tenure;
        subscriptionmaster001mb.amount = req.body.amount ? req.body.amount : subscriptionmaster001mb.amount;
        subscriptionmaster001mb.status = req.body.status ? req.body.status : subscriptionmaster001mb.status;
        subscriptionmaster001mb.discountflag = req.body.discountflag ? req.body.discountflag : subscriptionmaster001mb.discountflag;
        subscriptionmaster001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subscriptionmaster001mb.inserteduser;
        subscriptionmaster001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subscriptionmaster001mb.inserteddatetime;
        subscriptionmaster001mb.updateduser = req.body.updateduser ? req.body.updateduser : subscriptionmaster001mb.updateduser;
        subscriptionmaster001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subscriptionmaster001mb.updateddatetime;

        subscriptionmaster001mb.save(function (err, subscriptionmaster001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating subscriptionmaster001mb.',
                    error: err
                });
            }

            return res.json(subscriptionmaster001mb);
        });
    });
};
export const remove = async (req, res) => {
    var id = req.params.id;

    Subscriptionmaster001mb.findByIdAndRemove(id, function (err, subscriptionmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subscriptionmaster001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
};