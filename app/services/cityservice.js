import db from "../models/main.js";

const City001mb = db.city001mb;

const State001mb = db.state001mb;

export const list = async (req, res) => {
    City001mb.find(function (err, city001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting city001mb.',
                error: err
            });
        }

        return res.json(city001mb);
    });
};

export const show = async (req, res) => {
    var id = req.params.id;

    City001mb.findOne({ _id: id }, function (err, city001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting city001mb.',
                error: err
            });
        }

        if (!city001mb) {
            return res.status(404).json({
                message: 'No such city001mb'
            });
        }

        return res.json(city001mb);
    });
};

export const create = async (req, res) => {

    const city001mb = new City001mb();

    city001mb.stateid = req.body.stateid.id;
    city001mb.cityname = req.body.cityname;
    city001mb.citydesc = req.body.citydesc;
    city001mb.status = req.body.status;
    city001mb.inserteduser = req.body.inserteduser;
    city001mb.inserteddatetime = req.body.inserteddatetime;
    city001mb.updateddatetime = req.body.updateddatetime;
    city001mb.updateduser = req.body.updateduser;
    State001mb.findOne({ _id: city001mb.stateid }, (err, user) => {
        if (user) {
            user.cityid.push(city001mb);
            user.save();
            city001mb.save()
            return res.json({ message: 'city created!' });
        } else {
            return res.status(500).json({
                message: 'Error when creating state001mb'
            });
        }
    });
};

export const update = async (req, res) => {
    var id = req.params.id;
    City001mb.findOne({ _id: id }, function (err, city001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting city001mb',
                error: err
            });
        }

        if (!city001mb) {
            return res.status(404).json({
                message: 'No such city001mb'
            });
        }
        city001mb.stateid = req.body.stateid.id ? req.body.stateid.id : city001mb.stateid;
        city001mb.cityname = req.body.cityname ? req.body.cityname : city001mb.cityname;
        city001mb.citydesc = req.body.citydesc ? req.body.citydesc : city001mb.citydesc;
        city001mb.status = req.body.status ? req.body.status : city001mb.status;
        city001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : city001mb.inserteduser;
        city001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : city001mb.inserteddatetime;
        city001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : city001mb.updateddatetime;
        city001mb.updateduser = req.body.updateduser ? req.body.updateduser : city001mb.updateduser;

        city001mb.save(function (err, country001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating country001mb.',
                    error: err
                });
            }

            return res.json(city001mb);
        });
    });
};

export const remove = async (req, res) => {
    var id = req.params.id;

    City001mb.findByIdAndRemove(id, function (err, city001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the city001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
};