import db from "../models/main.js";

const Person001mb = db.person001mb

export const list = async (req, res) => {
    Person001mb.find(function (err, person001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting person001mb.',
                error: err
            });
        }

        return res.json(person001mb);
    });
};
export const show = async (req, res) => {
    var id = req.params.id;
    Person001mb.findOne({ _id: id }, function (err, person001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting person001mb.',
                error: err
            });
        }

        if (!person001mb) {
            return res.status(404).json({
                message: 'No such person001mb'
            });
        }

        return res.json(person001mb);
    });
};