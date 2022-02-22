import db from "../models/main.js";

const Photo001wb = db.photo001wb

const Contentmaster001mb = db.contentmaster001mb;

export const show = async(req, res) => {
    var id = req.params.id;

    Photo001wb.findOne({ _id: id }, function(err, photo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting photo001wb.',
                error: err
            });
        }

        if (!photo001wb) {
            return res.status(404).json({
                message: 'No such photo001wb'
            });
        }

        return res.json(photo001wb);
    });
};

export const list = async(req, res) => {
    Photo001wb.find({ id: req.params.id }, function(err, results) {
        if (err) {
            res.send(`error: ${err}`);
        } else {
            res.send(results);
        }
    });

};
export const create = async(req, res, err) => {

    const photo001wb = new Photo001wb();
    photo001wb.content = req.file.path;
    photo001wb.fieldname = req.file.fieldname;
    photo001wb.originalname = req.file.originalname;
    photo001wb.filename = req.file.filename;
    photo001wb.status = req.body.status;
    photo001wb.contentid = req.body.contentid;
    photo001wb.inserteduser = req.body.inserteduser;
    photo001wb.inserteddatetime = req.body.inserteddatetime;
    photo001wb.updateduser = req.body.updateduser;
    photo001wb.updateddatetime = req.body.updateddatetime;
    photo001wb.save()
        .then((result) => {
            Contentmaster001mb.findOne({ _id: photo001wb.contentid }, (err, user) => {
                if (user) {
                    user.photo.push(photo001wb);
                    user.save();
                    return res.json({ message: 'photo created!' });
                }
            });
        })
        .catch((error) => {
            return res.status(500).json({ error });
        });
}

export const update = async(req, res) => {
    var id = req.params.id;
    Photo001wb.findOne({ _id: id }, function(err, photo001wb) {
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
        photo001wb.content = req.file.path ? req.file.path : photo001wb.content;
        photo001wb.fieldname = req.file.fieldname ? req.file.fieldname : photo001wb.fieldname;
        photo001wb.filename = req.file.filename ? req.file.filename : photo001wb.filename;
        photo001wb.originalname = req.file.originalname ? req.file.originalname : photo001wb.originalname;
        photo001wb.status = req.body.status ? req.body.status : photo001wb.status;
        photo001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : photo001wb.inserteduser;
        photo001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : photo001wb.inserteddatetime;
        photo001wb.updateduser = req.body.updateduser ? req.body.updateduser : photo001wb.updateduser;
        photo001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : photo001wb.updateddatetime;

        photo001wb.save(function(err, photo001wb) {
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
export const remove = async(req, res) => {
    var id = req.params.id;

    Photo001wb.findByIdAndRemove(id, function(err, photo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the photo001wb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
};