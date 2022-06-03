import db from "../models/main.js";

const Person001mb = db.person001mb
const Login001mb = db.login001mb;
const Users001wb = db.users001wb;
const Subscriberdetails001wb = db.subscriberdetails001wb;
export const list = async (req, res) => {
    Person001mb.find(function (err, person001mb) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when getting person001mb.',
                        error: err
                    });
                }

                return res.json({person001mb})
            }).populate({ path: 'usersid', model: Users001wb}).populate({path: 'loginid',model: Login001mb}).populate({ path: 'subscriberdetailsid', model:Subscriberdetails001wb}); ;
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