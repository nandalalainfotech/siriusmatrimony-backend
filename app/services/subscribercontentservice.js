import db from "../models/main.js";

const Subscribercontent001wb = db.subscribercontent001wb

export const list = async (req, res) => {
    Subscribercontent001wb.find(function (err, subscribercontent001wbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscribercontent001wb.',
                error: err
            });
        }

        return res.json(subscribercontent001wbs);
    });
};

export const show = async (req, res) => {
    var id = req.params.id;

    Subscribercontent001wbModel.findOne({ _id: id }, function (err, subscribercontent001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscribercontent001wb.',
                error: err
            });
        }

        if (!subscribercontent001wb) {
            return res.status(404).json({
                message: 'No such subscribercontent001wb'
            });
        }

        return res.json(subscribercontent001wb);
    });
};

export const create = async (req, res) => {
    var subscribercontent001wb = new Subscribercontent001wb({
    subscid: req.body.subscid,
    subsccontentid1: req.body.subsccontentid1,
    subsccontentidattach1: req.body.subsccontentidattach1,
    subsccontentidappovalflag1: req.body.subsccontentidappovalflag1,
    subsccontentidattach2: req.body.subsccontentidattach2,
    subsccontentidappovalflag2: req.body.subsccontentidappovalflag2,
    subsccontentidattachn: req.body.subsccontentidattachn,
    subsccontentidappovalflagn: req.body.subsccontentidappovalflagn,
    inserteduser: req.body.inserteduser,
    inserteddatetime: req.body.inserteddatetime,
    updateduser: req.body.updateduser,
    updateddatetime: req.body.updateddatetime
    });

    subscribercontent001wb.save(function (err, subscribercontent001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating subscribercontent001wb',
                error: err
            });
        }

        return res.status(201).json(subscribercontent001wb);
    });
};


export const update = async (req, res) => {
    var id = req.params.id;

    Subscribercontent001wb.findOne({ _id: id }, function (err, subscribercontent001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscribercontent001wb',
                error: err
            });
        }

        if (!subscribercontent001wb) {
            return res.status(404).json({
                message: 'No such subscribercontent001wb'
            });
        }

        subscribercontent001wb.subscid = req.body.subscid ? req.body.subscid : subscribercontent001wb.subscid;
        subscribercontent001wb.subsccontentid1 = req.body.subsccontentid1 ? req.body.subsccontentid1 : subscribercontent001wb.subsccontentid1;
        subscribercontent001wb.subsccontentidattach1 = req.body.subsccontentidattach1 ? req.body.subsccontentidattach1 : subscribercontent001wb.subsccontentidattach1;
        subscribercontent001wb.subsccontentidappovalflag1 = req.body.subsccontentidappovalflag1 ? req.body.subsccontentidappovalflag1 : subscribercontent001wb.subsccontentidappovalflag1;
        subscribercontent001wb.subsccontentidattach2 = req.body.subsccontentidattach2 ? req.body.subsccontentidattach2 : subscribercontent001wb.subsccontentidattach2;
        subscribercontent001wb.subsccontentidappovalflag2 = req.body.subsccontentidappovalflag2 ? req.body.subsccontentidappovalflag2 : subscribercontent001wb.subsccontentidappovalflag2;
        subscribercontent001wb.subsccontentidattachn = req.body.subsccontentidattachn ? req.body.subsccontentidattachn : subscribercontent001wb.subsccontentidattachn;
        subscribercontent001wb.subsccontentidappovalflagn = req.body.subsccontentidappovalflagn ? req.body.subsccontentidappovalflagn : subscribercontent001wb.subsccontentidappovalflagn;
        subscribercontent001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subscribercontent001wb.inserteduser;
        subscribercontent001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subscribercontent001wb.inserteddatetime;
        subscribercontent001wb.updateduser = req.body.updateduser ? req.body.updateduser : subscribercontent001wb.updateduser;
        subscribercontent001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subscribercontent001wb.updateddatetime;

        subscribercontent001wb.save(function (err, subscribercontent001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating subscribercontent001wb.',
                    error: err
                });
            }

            return res.json(subscribercontent001wb);
        });
    });
};

export const remove = async (req, res) => {
    var id = req.params.id;

    Subscribercontent001wb.findByIdAndRemove(id, function (err, subscribercontent001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subscribercontent001wb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};