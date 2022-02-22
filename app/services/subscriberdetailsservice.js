import db from "../models/main.js";

import nodemailer from "nodemailer";

import hbs from "nodemailer-express-handlebars";

import path from "path";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

const Login001mb = db.login001mb;

const Person001mb = db.person001mb

const Subscriberdetails001wb = db.subscriberdetails001wb

export const list = async (req, res) => {
    Subscriberdetails001wb.find(function (err, subscriberdetails001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberdetails001wb.',
                error: err
            });
        }

        return res.json(subscriberdetails001wb);
    });
};

export const show = async (req, res) => {
    var id = req.params.id;

    Subscriberdetails001wb.findOne({ _id: id }, function (err, subscriberdetails001wb) {
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


export const create = async (req, res) => {

    const person001mb = new Person001mb();
    person001mb.countryid = req.body.countryid.id;
    person001mb.cityid = req.body.cityid.id;
    person001mb.stateid = req.body.stateid.id;
    person001mb.roleid = req.body.roleid.id;
    person001mb.firstname = req.body.firstname;
    person001mb.lasttname = req.body.lasttname;
    person001mb.zipcode = req.body.zipcode;
    person001mb.dob = req.body.dob;
    person001mb.confirmemail = req.body.confirmemail;
    person001mb.email = req.body.email;
    person001mb.age = req.body.age;
    person001mb.verified = false;
    person001mb.sex = req.body.sex;
    person001mb.address = req.body.address;
    person001mb.phoneno = req.body.phoneno;
    person001mb.landline = req.body.landline;
    person001mb.inserteduser = req.body.inserteduser;
    person001mb.inserteddatetime = req.body.inserteddatetime;
    person001mb.updateduser = req.body.updateduser;
    person001mb.updateddatetime = req.body.updateddatetime;
    person001mb.status = req.body.status;
    if (!(person001mb.email && person001mb.firstname && person001mb.roleid)) {
        return res.status(402).json("Enter a Required Field");
    }
    const oldUser = await Person001mb.findOne({ email: person001mb.email, firstname: person001mb.firstname, roleid: person001mb.roleid });
    if (oldUser) {
        return res.status(409).send("User Already Exist");
    }
    const token = jwt.sign({ email: person001mb.email, roleid: person001mb.roleid }, process.env.TOKEN_KEY,
        {
            expiresIn: "6h",
        }
    );
    person001mb.token = token;
    let person = await person001mb.save();

    const login001mb = new Login001mb()
    login001mb.username = req.body.username;
    login001mb.password = bcrypt.hashSync(req.body.password, 10);
    login001mb.roleid = req.body.roleid.id;
    login001mb.inserteduser = req.body.inserteduser;
    login001mb.inserteddatetime = req.body.inserteddatetime;
    login001mb.updateduser = req.body.updateduser;
    login001mb.status = req.body.status;
    login001mb.personid = person._id;
    await login001mb.save()

    const subscriberdetails001wb = new Subscriberdetails001wb();
    subscriberdetails001wb.personid = person._id;
    subscriberdetails001wb.contentid = req.body.contentid.id;
    subscriberdetails001wb.payid = req.body.payid.id;
    subscriberdetails001wb.subpid = req.body.subpid.id;
    subscriberdetails001wb.subscdesc = req.body.subscdesc;
    subscriberdetails001wb.aboutme = req.body.aboutme;
    subscriberdetails001wb.subscstatus = req.body.subscstatus;
    subscriberdetails001wb.horoscope = req.body.horoscope;
    subscriberdetails001wb.subscapproval = req.body.subscapproval;
    subscriberdetails001wb.approvedby = req.body.approvedby;
    subscriberdetails001wb.approvedon = req.body.approvedon;
    subscriberdetails001wb.inserteduser = req.body.inserteduser;
    subscriberdetails001wb.inserteddatetime = req.body.inserteddatetime;
    subscriberdetails001wb.updateduser = req.body.updateduser;
    subscriberdetails001wb.status = req.body.status;
    await subscriberdetails001wb.save()

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
        to: person001mb.email,
        subject: 'Sirius Matrimony Confirmation',
        template: 'mail',
        context: {
            name: "Sirius Matrimony",
            url: `http://localhost:8081/api/subscriberdetailscontroller/verify?token=${token}`
        }
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err){
            return res.status(401).json({ message: 'email not created!' });
        }else{
            return res.json({ message: 'email created!' });
        }
    })

};

export const verify = async (req, res) => {
    const token = req.query.token;
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.verifydecode = decoded;
        const person = await Person001mb.findOne({ email: decoded.email, rolename: decoded.rolename, });
        if (person.verified) {
            return res.status(401).send({ message: " Account Verified Please Login" });
        } else {
            person.verified = true;
            person.save();
            return res.status(200).send({ message: "Account Verified" });
        }
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
};

export const update = async (req, res) => {
    var id = req.params.id;

    Subscriberdetails001wb.findOne({ _id: id }, function (err, subscriberdetails001wb) {
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
        subscriberdetails001wb.payid = req.body.payid.id ? req.body.payid.id : subscriberdetails001wb.payid;
        subscriberdetails001wb.subpid = req.body.subpid.id ? req.body.subpid.id : subscriberdetails001wb.subpid;
        subscriberdetails001wb.horoscope = req.body.horoscope ? req.body.horoscope : subscriberdetails001wb.horoscope;
        subscriberdetails001wb.contentid = req.body.contentid.id ? req.body.contentid.id : subscriberdetails001wb.contentid;
        subscriberdetails001wb.personid = req.body.personid.id ? req.body.personid.id : subscriberdetails001wb.personid;
        subscriberdetails001wb.subscdesc = req.body.subscdesc ? req.body.subscdesc : subscriberdetails001wb.subscdesc;
        subscriberdetails001wb.aboutme = req.body.aboutme ? req.body.aboutme : subscriberdetails001wb.aboutme;
        subscriberdetails001wb.subscstatus = req.body.subscstatus ? req.body.subscstatus : subscriberdetails001wb.subscstatus;
        subscriberdetails001wb.subscapproval = req.body.subscapproval ? req.body.subscapproval : subscriberdetails001wb.subscapproval;
        subscriberdetails001wb.approvedby = req.body.approvedby ? req.body.approvedby : subscriberdetails001wb.approvedby;
        subscriberdetails001wb.approvedon = req.body.approvedon ? req.body.approvedon : subscriberdetails001wb.approvedon;
        subscriberdetails001wb.save(function (err, subscriberdetails001wb) {
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


export const remove = async (req, res) => {
    var id = req.params.id;

    Subscriberdetails001wb.findByIdAndRemove(id, function (err, subscriberdetails001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subscriberdetails001wb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
};