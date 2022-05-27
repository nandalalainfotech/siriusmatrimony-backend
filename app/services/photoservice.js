import db from "../models/main.js";
import Grid from 'gridfs-stream';
import mongoose from 'mongoose';
import mime from 'mime';
const Photo001wb = db.photo001wb
const Contentmaster001mb = db.contentmaster001mb;

export const show = async (req, res, photo001wb) => {
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
        var bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
            bucketName: 'uploads',
        })
        var readstream = bucket.openDownloadStreamByName(filename);
        // var imgFile = fs.createWriteStream("images/logos/logo.jpg");
        return readstream.pipe(res);
    });


};

export const list = async (req, res) => {
    Photo001wb.find(function (err, photo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting Photo001wb.',
                error: err
            });
        }

        return res.json(photo001wb);
    });
}


export const create = async (req, res, err) => {
    const photo001wb = new Photo001wb();
    //  photo001wb.content = req.file.path;
    photo001wb.fieldname = req.file.fieldname;
    photo001wb.fileid = req.body.fileid;
    photo001wb.originalname = req.file.originalname;
    photo001wb.filename = req.file.filename;
    photo001wb.status = req.body.status;
    photo001wb.contentid = req.body.contentid;
    photo001wb.inserteduser = req.body.inserteduser;
    photo001wb.inserteddatetime = req.body.inserteddatetime;
    photo001wb.updateduser = req.body.updateduser;
    photo001wb.flag = req.body.flag;
    photo001wb.updateddatetime = req.body.updateddatetime;
    Contentmaster001mb.findOne({ _id: photo001wb.contentid }, (err, user) => {
        if (user) {
            user.photo.push(photo001wb);
            user.save();
            photo001wb.save()
            return res.json({ message: 'photo created!' });
        } else {
            return res.status(500).json({
                message: 'Error when creating photo001wb'
            });
        }
    });
}

export const update = async (req, res) => {
    var id = req.params.id;
    Photo001wb.findOne({ _id: id }, function (err, photo001wb) {
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
        photo001wb.flag = req.body.flag;
        photo001wb.contentid = req.body.contentid ? req.body.contentid : photo001wb.contentid;
        // photo001wb.content = req.file.path ? req.file.path : photo001wb.content;
        // photo001wb.fieldname = req.file.fieldname ? req.file.fieldname : photo001wb.fieldname;
        // photo001wb.filename = req.file.filename ? req.file.filename : photo001wb.filename;
        // photo001wb.originalname = req.file.originalname ? req.file.originalname : photo001wb.originalname;
        photo001wb.status = req.body.status ? req.body.status : photo001wb.status;
        photo001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : photo001wb.inserteduser;
        photo001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : photo001wb.inserteddatetime;
        photo001wb.updateduser = req.body.updateduser ? req.body.updateduser : photo001wb.updateduser;
        photo001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : photo001wb.updateddatetime;
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

        return res.json({ message: 'Deleted Sucessfully' });
    });
};