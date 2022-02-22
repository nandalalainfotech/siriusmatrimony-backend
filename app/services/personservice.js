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


// export const create = async (req, res) => {
//     const person001mb = new Person001mb();
//     person001mb.countryid = req.body.countryid.id;
//     person001mb.cityid = req.body.cityid.id;
//     person001mb.stateid = req.body.stateid.id;
//     person001mb.roleid = req.body.roleid.id;
//     person001mb.firstname = req.body.firstname;
//     person001mb.lasttname = req.body.lasttname;
//     person001mb.zipcode = req.body.zipcode;
//     person001mb.dob = req.body.dob;
//     person001mb.confirmemail = req.body.confirmemail;
//     person001mb.email = req.body.email;
//     person001mb.subscname = req.body.subscname;
//     person001mb.age = req.body.age;
//     person001mb.verified = false;
//     person001mb.sex = req.body.sex;
//     person001mb.subscdesc = req.body.subscdesc;
//     person001mb.aboutme = req.body.aboutme;
//     person001mb.address = req.body.address;
//     person001mb.phoneno = req.body.phoneno;
//     person001mb.landline = req.body.landline;
//     person001mb.inserteduser = req.body.inserteduser;
//     person001mb.inserteddatetime = req.body.inserteddatetime;
//     person001mb.updateduser = req.body.updateduser;
//     person001mb.updateddatetime = req.body.updateddatetime;
//     person001mb.status = req.body.status;
//     person001mb.save()
//         .then((result) => {
//             res.json({ message: 'person001mb created!' });
//         })
//         .catch((error) => {
//             res.status(500).json({ error });
//         });
// };
export const update = async (req, res) => {
    var id = req.params.id;

    Person001mb.findOne({ _id: id }, function (err, person001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting person001mb',
                error: err
            });
        }

        if (!person001mb) {
            return res.status(404).json({
                message: 'No such person001mb'
            });
        }
        person001mb.email = req.body.email ? req.body.email : subscriberdetails001wb.email;
        subscriberdetails001wb.contentid = req.body.contentid.id ? req.body.contentid.id : subscriberdetails001wb.contentid;
        person001mb.personid = req.body.personid ? req.body.personid : subscriberdetails001wb.personid;
        person001mb.cityid = req.body.cityid.id ? req.body.cityid.id : subscriberdetails001wb.cityid;
        person001mb.stateid = req.body.stateid.id ? req.body.stateid.id : subscriberdetails001wb.stateid;
        person001mb.subscid = req.body.subscid ? req.body.subscid : subscriberdetails001wb.subscid;
        person001mb.rolename = req.body.rolename.rolename ? req.body.rolename.id : subscriberdetails001wb.rolename;
        person001mb.subscname = req.body.subscname ? req.body.subscname : subscriberdetails001wb.subscname;
        person001mb.age = req.body.age ? req.body.age : subscriberdetails001wb.age;
        person001mb.sex = req.body.sex ? req.body.sex : subscriberdetails001wb.sex;
        person001mb.subscdesc = req.body.subscdesc ? req.body.subscdesc : subscriberdetails001wb.subscdesc;
        person001mb.aboutme = req.body.aboutme ? req.body.aboutme : subscriberdetails001wb.aboutme;
        person001mb.countryid = req.body.countryid.id ? req.body.countryid.id : subscriberdetails001wb.countryid;
        person001mb.address = req.body.address ? req.body.address : subscriberdetails001wb.address;
        person001mb.phoneno = req.body.phoneno ? req.body.phoneno : subscriberdetails001wb.phoneno;
        subscriberdetails001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subscriberdetails001wb.inserteduser;
        subscriberdetails001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subscriberdetails001wb.inserteddatetime;
        subscriberdetails001wb.updateduser = req.body.updateduser ? req.body.updateduser : subscriberdetails001wb.updateduser;
        subscriberdetails001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subscriberdetails001wb.updateddatetime;
        subscriberdetails001wb.firstname = req.body.firstname ? req.body.firstname : subscriberdetails001wb.firstname;
        subscriberdetails001wb.lasttname = req.body.lasttname ? req.body.lasttname : subscriberdetails001wb.lasttname;
        subscriberdetails001wb.zipcode = req.body.zipcode ? req.body.zipcode : subscriberdetails001wb.zipcode;
        subscriberdetails001wb.dob = req.body.dob ? req.body.dob : subscriberdetails001wb.dob;
        subscriberdetails001wb.confirmemail = req.body.confirmemail ? req.body.confirmemail : subscriberdetails001wb.confirmemail;
        subscriberdetails001wb.landline = req.body.landline ? req.body.landline : subscriberdetails001wb.landline;
        subscriberdetails001wb.status = req.body.status ? req.body.status : subscriberdetails001wb.status;
        person001mb.save(function (err, person001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating person001mb.',
                    error: err
                });
            }

            return res.json(person001mb);
        });
    });
};
export const remove = async (req, res) => {
    var id = req.params.id;

    Person001mb.findByIdAndRemove(id, function (err, person001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the person001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
};