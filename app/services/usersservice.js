import db from "../models/main.js";

const Users001wb = db.users001wb

export const list = async (req, res) => {
    Users001wb.find(function (err, users001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting users001wb.',
                error: err
            });
        }

        return res.json(users001wb);
    });
};

export const show = async (req, res) => {
    var id = req.params.id;

    Users001wb.findOne({ _id: id }, function (err, users001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting users001wb.',
                error: err
            });
        }

        if (!users001wb) {
            return res.status(404).json({
                message: 'No such users001wb'
            });
        }

        return res.json(users001wb);
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
    var users001wb = new Users001wb({
        firstname: req.body.firstname,
        lasttname: req.body.lasttname,
        zipcode: req.body.zipcode,
        employeeid: req.body.employeeid,
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

    users001wb.save(function (err, users001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating users001wb',
                error: err
            });
        }

        return res.status(201).json(users001wb);
    });
};

export const update = async (req, res) => {
    var id = req.params.id;

    Users001wb.findOne({ _id: id }, function (err, users001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting users001wb',
                error: err
            });
        }

        if (!users001wb) {
            return res.status(404).json({
                message: 'No such users001wb'
            });
        }

        users001wb.firstname = req.body.firstname ? req.body.firstname : users001wb.firstname;
        users001wb.lasttname = req.body.lasttname ? req.body.lasttname : users001wb.lasttname;
        users001wb.zipcode = req.body.zipcode ? req.body.zipcode : users001wb.zipcode;
        users001wb.employeeid = req.body.employeeid ? req.body.employeeid : users001wb.employeeid;
        users001wb.dob = req.body.dob ? req.body.dob : users001wb.dob;
        users001wb.email = req.body.email ? req.body.email : users001wb.email;
        users001wb.confirmemail = req.body.confirmemail ? req.body.confirmemail : users001wb.confirmemail;
        users001wb.sex = req.body.sex ? req.body.sex : users001wb.sex;
        users001wb.address1 = req.body.address1 ? req.body.address1 : users001wb.address1;
        users001wb.address2 = req.body.address2 ? req.body.address2 : users001wb.address2;
        users001wb.address3 = req.body.address3 ? req.body.address3 : users001wb.address3;
        users001wb.city = req.body.city ? req.body.city : users001wb.city;
        users001wb.state = req.body.state ? req.body.state : users001wb.state;
        users001wb.country = req.body.country ? req.body.country : users001wb.country;
        users001wb.mobile = req.body.mobile ? req.body.mobile : users001wb.mobile;
        users001wb.landline = req.body.landline ? req.body.landline : users001wb.landline;
        users001wb.status = req.body.status ? req.body.status : users001wb.status;
        users001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : users001wb.inserteduser;
        users001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : users001wb.inserteddatetime;
        users001wb.updateduser = req.body.updateduser ? req.body.updateduser : users001wb.updateduser;
        users001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : users001wb.updateddatetime;

        users001wb.save(function (err, users001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating users001wb.',
                    error: err
                });
            }

            return res.json(users001wb);
        });
    });
};
export const remove = async (req, res) => {
    var id = req.params.id;

    Users001wb.findByIdAndRemove(id, function (err, users001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the users001wb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};