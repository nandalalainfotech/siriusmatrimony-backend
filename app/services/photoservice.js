import db from "../models/main.js";

const Photo001wb = db.photo001wb

const Contentmaster001mb = db.contentmaster001mb;

export const show = async (req, res) => {
    var id = req.params.id;

    Photo001wb.findOne({ _id: id }, function (err, photo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting photo001wb.',
                error: err
            });
        }

        if (!person001mb) {
            return res.status(404).json({
                message: 'No such photo001wb'
            });
        }

        return res.json(photo001wb);
    });
};

export const list = async (req, res) => {
    console.log('req.body.id', req.params);
    Photo001wb.find({ id: req.params.id }, function (err, results) {
        if (err) {
            res.send(`error: ${err}`);
        } else {
            res.send(results);
        }
    });

};
export const create = async (req, res, err) => {

    const photo001wb = new Photo001wb();
    photo001wb.content = req.file.path,
        photo001wb.fieldname = req.file.fieldname,
        photo001wb.originalname = req.file.originalname,
        photo001wb.filename = req.file.filename,
        photo001wb.status = req.body.status,
        photo001wb.contentid = req.body.contentid,
        photo001wb.inserteduser = req.body.insert,
        photo001wb.inserteddatetime = req.body.newdate,
        photo001wb.updateduser = req.body.update,
        photo001wb.updateddatetime = req.body.updates
    photo001wb.save()
        .then((result) => {
            Contentmaster001mb.findOne({ _id: photo001wb.contentid }, (err, user) => {
                if (user) {
                    user.photo.push(photo001wb);
                    user.save();
                    res.json({ message: 'photo created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
}

export const update = async (req, res) => {

    console.log("req", req);
    Photo001wb.findOne({ id: req.params.id }, function (err, photo001wb) {
        console.log("id", req.params.id);
        if (err) {
            return res.status(500).json({
                message: 'Error when getting photo001wb',
                error: err
            });
        }
        if (!photo001wb) {
            return res.status(404).json({
                message: 'No such photo001wb'
            });
        }
        photo001wb.contentid = req.body.contentid ? req.body.contentid : photo001wb.contentid;
        photo001wb.fieldname = req.file.fieldname ? req.file.fieldname : photo001wb.fieldname;
        photo001wb.filename = req.file.filename ? req.file.filename : photo001wb.filename;
        photo001wb.originalname = req.file.originalname ? req.file.originalname : photo001wb.originalname;
        photo001wb.status = req.body.status ? req.body.status : photo001wb.status;
        photo001wb.content = req.file.path ? req.file.path : photo001wb.content;
        photo001wb.inserteduser = req.body.insert ? req.body.insert : photo001wb.inserteduser;
        photo001wb.inserteddatetime = req.body.newdate ? req.body.newdate : photo001wb.inserteddatetime;
        photo001wb.updateduser = req.body.update ? req.body.update : photo001wb.updateduser;
        photo001wb.updateddatetime = req.body.updates ? req.body.updates : photo001wb.updateddatetime;

        console.log(" photo001wb.status", photo001wb.status);
        photo001wb.save(function (err, photo001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating photo001wb.',
                    error: err
                });
            }

            return res.json(photo001wb);
        });
    });
};
export const remove = async (req, res) => {
    var id = req.params.id;

    Photo001wb.findByIdAndRemove(id, function (err, photo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the photo001wb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};