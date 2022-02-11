import db from "../models/main.js";

import nodemailer from "nodemailer";

import hbs from "nodemailer-express-handlebars";

import path from "path";

const Subscriberdetails001wb = db.subscriberdetails001wb

export const list = async(req, res) => {
    Subscriberdetails001wb.find(function(err, subscriberdetails001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberdetails001wb.',
                error: err
            });
        }

        return res.json(subscriberdetails001wb);
    });
};

export const show = async(req, res) => {
    var id = req.params.id;

    Subscriberdetails001wb.findOne({ _id: id }, function(err, subscriberdetails001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberdetails001wb.',
                error: err
            });
        }

        if (!subscriberdetails001wb) {
            return res.status(404).json({
                message: 'No such subscriberdetails001wb'
            });
        }

        return res.json(subscriberdetails001wb);
    });
};


export const create = async(req, res) => {
    const subscriberdetails001wb = new Subscriberdetails001wb();
    subscriberdetails001wb.personid = req.body.personid.id;
    subscriberdetails001wb.subscid = req.body.subscid;
    subscriberdetails001wb.countryid = req.body.countryid.id;
    subscriberdetails001wb.rolename = req.body.rolename.rolename;
    subscriberdetails001wb.contentid = req.body.contentid.id;
    subscriberdetails001wb.cityid = req.body.cityid.id;
    subscriberdetails001wb.stateid = req.body.stateid.id;
    subscriberdetails001wb.email = req.body.email;
    subscriberdetails001wb.password = req.body.password;
    subscriberdetails001wb.subscname = req.body.subscname;
    subscriberdetails001wb.age = req.body.age;
    subscriberdetails001wb.sex = req.body.sex;
    subscriberdetails001wb.subscdesc = req.body.subscdesc;
    subscriberdetails001wb.aboutme = req.body.aboutme;
    subscriberdetails001wb.address = req.body.address;
    subscriberdetails001wb.phoneno = req.body.phoneno;
    subscriberdetails001wb.subscstatus = req.body.subscstatus;
    subscriberdetails001wb.subscapproval = req.body.subscapproval;
    subscriberdetails001wb.approvedby = req.body.approvedby;
    subscriberdetails001wb.approvedon = req.body.approvedon;
    subscriberdetails001wb.approvedby = req.body.approvedby;
    subscriberdetails001wb.inserteduser = req.body.inserteduser;
    subscriberdetails001wb.inserteddatetime = req.body.inserteddatetime;
    subscriberdetails001wb.updateduser = req.body.updateduser;
    subscriberdetails001wb.updateddatetime = req.body.updateddatetime;

    const oldUser = await Subscriberdetails001wb.findOne({ email: subscriberdetails001wb.email });
    if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
    }
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'siriusmatrimoney@gmail.com',
            pass: 'Welcome!23'
        }
    });
    const handlebarOptions = {
        viewEngine: {
            partialsDir: path.resolve('./app/templates'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./app/templates'),
        extName: ".handlebars"
    };
    transporter.use('compile', hbs(handlebarOptions))
    const mailOptions = {
        from: 'siriusmatrimoney@gmail.com',
        to: subscriberdetails001wb.email,
        subject: 'Sirius Matrimony Confirmation',
        template: 'mail',
        context: {
            name: "Sirius Matrimony"
        }
    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log('email sent' + info.response);
    })
    subscriberdetails001wb.save()
        .then((result) => {
            res.json({ message: 'subscriberdetails001wb created!' });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });


};

export const update = async(req, res) => {
    var id = req.params.id;

    Subscriberdetails001wb.findOne({ _id: id }, function(err, subscriberdetails001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberdetails001wb',
                error: err
            });
        }

        if (!subscriberdetails001wb) {
            return res.status(404).json({
                message: 'No such subscriberdetails001wb'
            });
        }
        subscriberdetails001wb.password = req.body.password ? req.body.password : subscriberdetails001wb.password;
        subscriberdetails001wb.email = req.body.email ? req.body.email : subscriberdetails001wb.email;
        subscriberdetails001wb.contentid = req.body.contentid.id ? req.body.contentid.id : subscriberdetails001wb.contentid;
        subscriberdetails001wb.personid = req.body.personid.id ? req.body.personid.id : subscriberdetails001wb.personid;
        subscriberdetails001wb.cityid = req.body.cityid.id ? req.body.cityid.id : subscriberdetails001wb.cityid;
        subscriberdetails001wb.stateid = req.body.stateid.id ? req.body.stateid.id : subscriberdetails001wb.stateid;
        subscriberdetails001wb.subscid = req.body.subscid ? req.body.subscid : subscriberdetails001wb.subscid;
        subscriberdetails001wb.rolename = req.body.rolename.rolename ? req.body.rolename.id : subscriberdetails001wb.rolename;
        subscriberdetails001wb.subscname = req.body.subscname ? req.body.subscname : subscriberdetails001wb.subscname;
        subscriberdetails001wb.age = req.body.age ? req.body.age : subscriberdetails001wb.age;
        subscriberdetails001wb.sex = req.body.sex ? req.body.sex : subscriberdetails001wb.sex;
        subscriberdetails001wb.subscdesc = req.body.subscdesc ? req.body.subscdesc : subscriberdetails001wb.subscdesc;
        subscriberdetails001wb.aboutme = req.body.aboutme ? req.body.aboutme : subscriberdetails001wb.aboutme;
        subscriberdetails001wb.countryid = req.body.countryid.id ? req.body.countryid.id : subscriberdetails001wb.countryid;
        subscriberdetails001wb.address = req.body.address ? req.body.address : subscriberdetails001wb.address;
        subscriberdetails001wb.phoneno = req.body.phoneno ? req.body.phoneno : subscriberdetails001wb.phoneno;
        subscriberdetails001wb.subscstatus = req.body.subscstatus ? req.body.subscstatus : subscriberdetails001wb.subscstatus;
        subscriberdetails001wb.subscapproval = req.body.subscapproval ? req.body.subscapproval : subscriberdetails001wb.subscapproval;
        subscriberdetails001wb.approvedby = req.body.approvedby ? req.body.approvedby : subscriberdetails001wb.approvedby;
        subscriberdetails001wb.approvedon = req.body.approvedon ? req.body.approvedon : subscriberdetails001wb.approvedon;
        subscriberdetails001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subscriberdetails001wb.inserteduser;
        subscriberdetails001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subscriberdetails001wb.inserteddatetime;
        subscriberdetails001wb.updateduser = req.body.updateduser ? req.body.updateduser : subscriberdetails001wb.updateduser;
        subscriberdetails001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subscriberdetails001wb.updateddatetime;
        subscriberdetails001wb.save(function(err, subscriberdetails001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating subscriberdetails001wb.',
                    error: err
                });
            }

            return res.json(subscriberdetails001wb);
        });
    });
};


export const remove = async(req, res) => {
    var id = req.params.id;

    Subscriberdetails001wb.findByIdAndRemove(id, function(err, subscriberdetails001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subscriberdetails001wb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};