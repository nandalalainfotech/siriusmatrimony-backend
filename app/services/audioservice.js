import db from "../models/main.js";

const Audio001wb = db.audio001wb

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

    Audio001wb.findOne({ _id: id }, function(err, audio001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting audio001wb.',
                error: err
            });
        }

        if (!person001mb) {
            return res.status(404).json({
                message: 'No such audio001wb'
            });
        }

        return res.json(audio001wb);
    });
};

export const create = async(req, res) => {
    var audio001wb = new Audio001wb();
    audio001wb.category = req.body.category;
    audio001wb.filename = req.body.filename;
    audio001wb.originalfilename = req.body.originalfilename;
    audio001wb.status = req.body.status;
    audio001wb.inserteduser = req.body.inserteduser;
    audio001wb.inserteddatetime = req.body.inserteddatetime;
    audio001wb.updateduser = req.body.updateduser;
    audio001wb.updateddatetime = req.body.updateddatetime;
    audio001wb.content = req.body.content,

        audio001wb.save(function(err, audio001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating audio001wb',
                    error: err
                });
            }

            return res.status(201).json(audio001wb);
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

        audio001wb.category = req.body.category ? req.body.category : audio001wb.category;
        audio001wb.filename = req.body.filename ? req.body.filename : audio001wb.filename;
        audio001wb.originalfilename = req.body.originalfilename ? req.body.originalfilename : audio001wb.originalfilename;
        audio001wb.status = req.body.status ? req.body.status : audio001wb.status;
        audio001wb.content = req.body.content ? req.body.content : audio001wb.content;
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

        return res.status(204).json();
    });
};