import db from "../models/main.js";

const Person001wb = db.person001wb

export const list = async (req, res) => {
    Person001wb.find(function (err, person001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting person001wb.',
                error: err
            });
        }

        return res.json(person001wb);
    });
};

export const show = async (req, res) => {
    var id = req.params.id;

    Person001wb.findOne({ _id: id }, function (err, person001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting person001wb.',
                error: err
            });
        }

        if (!person001mb) {
            return res.status(404).json({
                message: 'No such person001wb'
            });
        }

        return res.json(person001wb);
    });
};

// export const list =  (req, res) => {
//     console.log("result------findone person001wb",req.body.inserteduser);
//     Person001wb.findOne({ firstname: req.body.inserteduser })
//     .populate('photo001wb')
//     .then((result) => {
//         console.log("result------populate person001wb ",result);
//             res.json(result);
//             console.log("result------populate3 person001wb", result);
//         })
//         .catch((error) => {
//             res.status(500).json({ error });
//         });
// };


// export const create = async (req, res) => {
//     console.log("res",res);
//     const person001wb = new Person001wb();

//     person001wb.firstname= req.body.firstname,
//     person001wb.lasttname= req.body.lasttname,
//     person001wb.zipcode= req.body.zipcode,
//     person001wb.dob= req.body.dob,
//     person001wb.email= req.body.email,
//     person001wb.confirmemail= req.body.confirmemail,
//     person001wb.sex= req.body.sex,
//     person001wb.address1= req.body.address1,
//     person001wb.address2= req.body.address2,
//     person001wb.address3= req.body.address3,
//     person001wb.city= req.body.city,
//     person001wb.state= req.body.state,
//     person001wb.country= req.body.country,
//     person001wb.mobile= req.body.mobile,
//     person001wb.landline= req.body.landline,
//     person001wb.status= req.body.status,
//     person001wb.insereduser= req.body.inserteduser,
//     person001wb.inserteddatetime= req.body.inserteddatetime,
//     person001wb.updateduser= req.body.updateduser,
//     person001wb. updateddatetime= req.body.updateddatetime
//     person001wb.save()
//         .then((result) => {
//             console.log("result------person001wb", result);
//             res.json({ message: 'person001wb created!', result });
//         })
//         .catch((error) => {
//             res.status(500).json({ error });
//         });
//     }
// };
export const create = async (req, res) => {
    var person001wb = new Person001wb({
        firstname: req.body.firstname,
        lasttname: req.body.lasttname,
        zipcode: req.body.zipcode,
        dob: req.body.dob,
        email: req.body.email,
        confirmemail: req.body.confirmemail,
        sex: req.body.sex,
        address1: req.body.address1,
        address2: req.body.address2,
        address3: req.body.address3,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        mobile: req.body.mobile,
        landline: req.body.landline,
        status: req.body.status,
        inserteduser: req.body.inserteduser,
        inserteddatetime: req.body.inserteddatetime,
        updateduser: req.body.updateduser,
        updateddatetime: req.body.updateddatetime
    });

    person001wb.save(function (err, person001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating person001wb',
                error: err
            });
        }

        return res.status(201).json(person001wb);
    });
};

export const update = async (req, res) => {
    var id = req.params.id;

    Person001wb.findOne({ _id: id }, function (err, person001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting person001wb',
                error: err
            });
        }

        if (!person001wb) {
            return res.status(404).json({
                message: 'No such person001wb'
            });
        }

        person001wb.firstname = req.body.firstname ? req.body.firstname : person001wb.firstname;
        person001wb.lasttname = req.body.lasttname ? req.body.lasttname : person001wb.lasttname;
        person001wb.zipcode = req.body.zipcode ? req.body.zipcode : person001wb.zipcode;
        person001wb.dob = req.body.dob ? req.body.dob : person001wb.dob;
        person001wb.email = req.body.email ? req.body.email : person001wb.email;
        person001wb.confirmemail = req.body.confirmemail ? req.body.confirmemail : person001wb.confirmemail;
        person001wb.sex = req.body.sex ? req.body.sex : person001wb.sex;
        person001wb.address1 = req.body.address1 ? req.body.address1 : person001wb.address1;
        person001wb.address2 = req.body.address2 ? req.body.address2 : person001wb.address2;
        person001wb.address3 = req.body.address3 ? req.body.address3 : person001wb.address3;
        person001wb.city = req.body.city ? req.body.city : person001wb.city;
        person001wb.state = req.body.state ? req.body.state : person001wb.state;
        person001wb.country = req.body.country ? req.body.country : person001wb.country;
        person001wb.mobile = req.body.mobile ? req.body.mobile : person001wb.mobile;
        person001wb.landline = req.body.landline ? req.body.landline : person001wb.landline;
        person001wb.status = req.body.status ? req.body.status : person001wb.status;
        person001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : person001wb.inserteduser;
        person001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : person001wb.inserteddatetime;
        person001wb.updateduser = req.body.updateduser ? req.body.updateduser : person001wb.updateduser;
        person001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : person001wb.updateddatetime;

        person001wb.save(function (err, person001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating person001wb.',
                    error: err
                });
            }

            return res.json(person001wb);
        });
    });
};
export const remove = async (req, res) => {
    var id = req.params.id;

    Person001wb.findByIdAndRemove(id, function (err, person001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the person001wb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};