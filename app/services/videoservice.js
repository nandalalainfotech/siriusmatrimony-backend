import db from "../models/main.js";

const Video001wb = db.video001wb
const Contentmaster001mb = db.contentmaster001mb
export const list = async(req, res) => {
    Video001wb.find(function(err, video001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting video001wb.',
                error: err
            });
        }

        return res.json(video001wb);
    });
};

export const show = async(req, res) => {
    var id = req.params.id;

    Video001wb.findOne({ _id: id }, function(err, video001wb) {
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
export const create = async(req, res, err) => {
    console.log("req", req);
    const video001wb = new Video001wb();
    video001wb.contentid = req.body.contentid;
    video001wb.content = req.file.path;
    video001wb.fieldname = req.file.fieldname;
    video001wb.originalname = req.file.originalname;
    video001wb.filename = req.file.filename;
    video001wb.status = req.body.status;
    video001wb.inserteduser = req.body.insert;
    video001wb.inserteddatetime = req.body.newdate;
    video001wb.updateduser = req.body.update;
    video001wb.updateddatetime = req.body.updates;

    video001wb.save()
        .then((result) => {
            console.log("result", result);
            Contentmaster001mb.findOne({ _id: video001wb.contentid }, (err, user) => {
                if (user) {
                    user.video.push(video001wb);
                    user.save();
                    res.json({ message: 'Video created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

export const update = async(req, res) => {
    var id = req.params.id;

    Video001wb.findOne({ _id: id }, function(err, video001wb) {
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

        video001wb.contentid = req.body.contentid ? req.body.contentid : video001wb.contentid;
        video001wb.fieldname = req.body.fieldname ? req.body.fieldname : video001wb.fieldname;
        video001wb.filename = req.body.filename ? req.body.filename : video001wb.filename;
        video001wb.originalfilename = req.body.originalfilename ? req.body.originalfilename : video001wb.originalfilename;
        video001wb.status = req.body.status ? req.body.status : video001wb.status;
        video001wb.content = req.body.path ? req.body.path : video001wb.content;
        video001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : video001wb.inserteduser;
        video001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : video001wb.inserteddatetime;
        video001wb.updateduser = req.body.updateduser ? req.body.updateduser : video001wb.updateduser;
        video001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : video001wb.updateddatetime;

        video001wb.save(function(err, video001wb) {
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
export const remove = async(req, res) => {
    var id = req.params.id;

    Video001wb.findByIdAndRemove(id, function(err, video001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the video001wb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};