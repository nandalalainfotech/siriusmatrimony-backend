import db from "../models/main.js"

const Subcatclassification001mb = db.subcatclassification001mb;

export const list = async (req, res) => {
    Subcatclassification001mb.find(function (err, subcatclassification001mbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subcatclassification001mb.',
                error: err
            });
        }

        return res.json(subcatclassification001mbs);
    });
};


export const show = async (req, res) => {
    var id = req.params.id;

    Subcatclassification001mb.findOne({ _id: id }, function (err, subcatclassification001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subcatclassification001mb.',
                error: err
            });
        }

        if (!subcatclassification001mb) {
            return res.status(404).json({
                message: 'No such subcatclassification001mb'
            });
        }

        return res.json(subcatclassification001mb);
    });
};

export const create = async (req, res) => {
    const subcatclassification001mb = new Subcatclassification001mb();
    subcatclassification001mb.subcatcode = req.body.subcatcode.id;
    subcatclassification001mb.catcode = req.body.catcode.id,
    subcatclassification001mb.classificationname = req.body.classificationname;
    subcatclassification001mb.status = req.body.status;
    subcatclassification001mb.inserteduser = req.body.inserteduser;
    subcatclassification001mb.inserteddatetime = req.body.inserteddatetime;
    subcatclassification001mb.updateduser = req.body.updateduser;
    subcatclassification001mb.updateddatetime = req.body.updateddatetime;
    subcatclassification001mb.save()
        .then((result) => {
                    return res.json({ message: 'subcatclassification created!' });
        })
        .catch((error) => {
            return res.status(500).json({ error });
        });
};

export const update = (req, res) => {
    var id = req.params.id;

    Subcatclassification001mb.findOne({ _id: id }, function (err, subcatclassification001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subcatclassification001mb',
                error: err
            });
        }

        if (!subcatclassification001mb) {
            return res.status(404).json({
                message: 'No such subcatclassification001mb'
            });
        }
        subcatclassification001mb.subcatcode = req.body.subcatcode.id ? req.body.subcatcode.id : subcatclassification001mb.subcatcode;
        subcatclassification001mb.catcode = req.body.catcode.id ? req.body.catcode.id : subcatclassification001mb.catcode;
        subcatclassification001mb.classificationname = req.body.classificationname ? req.body.classificationname : subcatclassification001mb.classificationname;
        subcatclassification001mb.status = req.body.status ? req.body.status : subcatclassification001mb.status;
        subcatclassification001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subcatclassification001mb.inserteduser;
        subcatclassification001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subcatclassification001mb.inserteddatetime;
        subcatclassification001mb.updateduser = req.body.updateduser ? req.body.updateduser : subcatclassification001mb.updateduser;
        subcatclassification001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subcatclassification001mb.updateddatetime;

        subcatclassification001mb.save(function (err, subcatclassification001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating subcatclassification001mb.',
                    error: err
                });
            }

            return res.json(subcatclassification001mb);
        });
    });
};

export const remove = (req, res) => {
    var id = req.params.id;

    Subcatclassification001mb.findByIdAndRemove(id, function (err, subcatclassification001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subcatclassification001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
};