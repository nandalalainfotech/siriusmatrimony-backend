import db from "../models/main.js";
import Grid from 'gridfs-stream';
import mongoose from 'mongoose';
const Audio001wb = db.audio001wb;

const Contentmaster001mb = db.contentmaster001mb;

export const list = async(req, res) => {
    Audio001wb.find(function(err, audio001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting audio001wb.',
                error: err
            });
        }

        return res.json(audio001wb);
    });
};

export const show = async(req, res) => {
    var id = req.params.id;
    var filename = req.params.filename;
    const conn = mongoose.connection;
    var gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
    gfs.files.find({ filename: filename }).toArray((err, files) => {
        if (!files || files.length === 0) {
            return res.status(404).json({
                err: "no files exist"
            });

        }
        var bucket =  new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
            bucketName: 'uploads',
          })
        var readstream = bucket.openDownloadStreamByName(filename);
        return readstream.pipe(res);
    });
};

export const create = async(req, res) => {
    const audio001wb = new Audio001wb();
    audio001wb.flag = req.body.flag;
    // audio001wb.content = req.file.path;
    audio001wb.fileid = req.body.fileid;
    audio001wb.fieldname = req.file.fieldname;
    audio001wb.fieldname = req.file.fieldname;
    audio001wb.originalname = req.file.originalname;
    audio001wb.filename = req.file.filename;
    audio001wb.status = req.body.status;
    audio001wb.contentid = req.body.contentid;
    audio001wb.inserteduser = req.body.inserteduser;
    audio001wb.inserteddatetime = req.body.inserteddatetime;
    audio001wb.updateduser = req.body.updateduser;
    audio001wb.updateddatetime = req.body.updateddatetime;
    Contentmaster001mb.findOne({ _id: audio001wb.contentid }, (err, user) => {
                if (user) {
                    user.audio.push(audio001wb);
                    user.save();
                    audio001wb.save();
                    return res.json({ message: 'Audio created!' });
                }else {
                    return res.status(500).json({
                        message: 'Error when creating audio001wb'
                    });
                }
            });
};

export const update = async(req, res) => {
    var id = req.params.id;

    Audio001wb.findOne({ _id: id }, function(err, audio001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting audio001wb',
                error: err
            });
        }

        if (!audio001wb) {
            return res.status(404).json({
                message: 'No such audio001wb'
            });
        }
        audio001wb.flag = req.body.flag;
        audio001wb.contentid = req.body.contentid ? req.body.contentid : audio001wb.contentid;
        audio001wb.fileid = req.body.fileid ? req.body.fileid : audio001wb.fileid;
        // audio001wb.fieldname = req.file.fieldname ? req.file.fieldname : audio001wb.fieldname;
        // audio001wb.filename = req.file.filename ? req.file.filename : audio001wb.filename;
        // audio001wb.originalname = req.file.originalname ? req.file.originalname : audio001wb.originalname;
        audio001wb.status = req.body.status ? req.body.status : audio001wb.status;
        // audio001wb.content = req.file.path ? req.file.path : audio001wb.content;
        audio001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : audio001wb.inserteduser;
        audio001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : audio001wb.inserteddatetime;
        audio001wb.updateduser = req.body.updateduser ? req.body.updateduser : audio001wb.updateduser;
        audio001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : audio001wb.updateddatetime;

        audio001wb.save(function(err, audio001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating audio001wb.',
                    error: err
                });
            }

            return res.json(audio001wb);
        });
    });
};
export const remove = async(req, res) => {
    var id = req.params.id;

    Audio001wb.findByIdAndRemove(id, function(err, audio001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the audio001wb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
};