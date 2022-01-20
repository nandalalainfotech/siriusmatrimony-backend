import db from "../models/main.js";

const Video001wb = db.video001wb

export const list = async (req, res) => {
    Video001wb.find(function (err, video001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting video001wb.',
                error: err
            });
        }

        return res.json(video001wb);
    });
};

export const show = async (req, res) => {
    var id = req.params.id;

    Video001wb.findOne({ _id: id }, function (err, video001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting video001wb.',
                error: err
            });
        }

        if (!person001mb) {
            return res.status(404).json({
                message: 'No such video001wb'
            });
        }

        return res.json(video001wb);
    });
};
export const upload = async (req, res, err) => {
    const video001wb = new Video001wb({
        content: req.file.path,
        fieldname: req.file.fieldname,
        originalname: req.file.originalname,
        filename: req.file.filename,
        status: req.file.status,
        status: req.body.status,
        inserteduser: req.body.insert,
        inserteddatetime: req.body.newdate,
        updateduser: req.body.update,
        updateddatetime: req.body.updates

    });
    video001wb
        .save()
        .then((result) => {
            res.status(201).json({
                message: 'created succesfully',
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            });
        });
}

export const update = async (req, res) => {
    var id = req.params.id;

    Video001wb.findOne({ _id: id }, function (err, video001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting video001wb',
                error: err
            });
        }

        if (!video001wb) {
            return res.status(404).json({
                message: 'No such video001wb'
            });
        }

        video001wb.category = req.body.category ? req.body.category : video001wb.category;
        video001wb.filename = req.body.filename ? req.body.filename : video001wb.filename;
        video001wb.originalfilename = req.body.originalfilename ? req.body.originalfilename : video001wb.originalfilename;
        video001wb.status = req.body.status ? req.body.status : video001wb.status;
        video001wb.content = req.body.content ? req.body.content : video001wb.content;
        video001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : video001wb.inserteduser;
        video001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : video001wb.inserteddatetime;
        video001wb.updateduser = req.body.updateduser ? req.body.updateduser : video001wb.updateduser;
        video001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : video001wb.updateddatetime;

        video001wb.save(function (err, video001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating video001wb.',
                    error: err
                });
            }

            return res.json(video001wb);
        });
    });
};
export const remove = async (req, res) => {
    var id = req.params.id;

    Video001wb.findByIdAndRemove(id, function (err, video001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the video001wb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};