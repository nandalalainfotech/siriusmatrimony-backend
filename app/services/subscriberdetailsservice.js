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
    person001mb.usersid = null;
    person001mb.loginid = null;
    person001mb.subscriberdetailsid = null;
    person001mb.countryid = req.body.countryid.id;
    person001mb.cityid = req.body.cityid.id;
    person001mb.stateid = req.body.stateid.id;
    person001mb.roleid = req.body.roleid.id;
    person001mb.subcatcode = req.body.subcatcode.id;
    person001mb.professionalid = req.body.professionalid.id;
    person001mb.categoryid = req.body.categoryid.id;
    person001mb.languageid = req.body.languageid.id;
    person001mb.personalid = req.body.personalid.id;
    person001mb.religionid = req.body.religionid.id;
    person001mb.classificationid = req.body.classificationid.id;
    person001mb.subscsubspid = req.body.subscsubspid.id;
    person001mb.regionalid = req.body.regionalid.id;
    person001mb.companycode = req.body.companycode.id;
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
    login001mb.theme = req.body.theme;
    login001mb.personid = person._id;
    await login001mb.save()

    const subscriberdetails001wb = new Subscriberdetails001wb();
    subscriberdetails001wb.personid = person._id;
    subscriberdetails001wb.contentid = req.body.contentid.id;
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
    subscriberdetails001wb.monthlyregistration = req.body.monthlyregistration;
    await subscriberdetails001wb.save()
    if (subscriberdetails001wb) {
        const updateperson = await Subscriberdetails001wb.findOne({ personid: subscriberdetails001wb.personid });
        const updatepersons = await Login001mb.findOne({ personid: login001mb.personid });
        person001mb.subscriberdetailsid = updateperson._id;
        person001mb.loginid = updatepersons._id;
        person001mb.save();
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
        to: person001mb.email,
        subject: 'Sirius Matrimony Confirmation',
        template: 'mail',
        context: {
            name: "Sirius Matrimony",
            url: `http://localhost:8081/api/subscriberdetailscontroller/verify?token=${token}`
        }
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            return res.status(401).json({ message: 'email not created!' });
        } else {
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
    var personid = req.params.personid;
    var loginid = req.params.loginid;
    var subid = req.params.subid;
    const person001mb = await Person001mb.findOne({ _id: personid });
    if (person001mb) {
        person001mb.email = req.body.email ? req.body.email : person001mb.email; s
        person001mb.personalid = req.body.personalid.id ? req.body.personalid.id : person001mb.personalid;
        person001mb.subcatcode = req.body.subcatcode.id ? req.body.subcatcode.id : person001mb.subcatcode;
        person001mb.professionalid = req.body.professionalid.id ? req.body.professionalid.id : person001mb.professionalid;
        person001mb.categoryid = req.body.categoryid.id ? req.body.categoryid.id : person001mb.categoryid;
        person001mb.languageid = req.body.languageid.id ? req.body.languageid.id : person001mb.languageid;
        person001mb.religionid = req.body.religionid.id ? req.body.religionid.id : person001mb.religionid;
        person001mb.classificationid = req.body.classificationid.id ? req.body.classificationid.id : person001mb.classificationid;
        person001mb.subscsubspid = req.body.subscsubspid.id ? req.body.subscsubspid.id : person001mb.subscsubspid;
        person001mb.regionalid = req.body.regionalid.id ? req.body.regionalid.id : person001mb.regionalid;
        person001mb.companycode = req.body.companycode.id ? req.body.companycode.id : person001mb.companycode;
        person001mb.cityid = req.body.cityid.id ? req.body.cityid.id : person001mb.cityid;
        person001mb.stateid = req.body.stateid.id ? req.body.stateid.id : person001mb.stateid;
        person001mb.roleid = req.body.roleid.id ? req.body.roleid.id : person001mb.roleid;
        person001mb.age = req.body.age ? req.body.age : person001mb.age;
        person001mb.sex = req.body.sex ? req.body.sex : person001mb.sex;
        person001mb.countryid = req.body.countryid.id ? req.body.countryid.id : person001mb.countryid;
        person001mb.address = req.body.address ? req.body.address : person001mb.address;
        person001mb.phoneno = req.body.phoneno ? req.body.phoneno : person001mb.phoneno;
        person001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : person001mb.inserteduser;
        person001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : person001mb.inserteddatetime;
        person001mb.updateduser = req.body.updateduser ? req.body.updateduser : person001mb.updateduser;
        person001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : person001mb.updateddatetime;
        person001mb.firstname = req.body.firstname ? req.body.firstname : person001mb.firstname;
        person001mb.lasttname = req.body.lasttname ? req.body.lasttname : person001mb.lasttname;
        person001mb.zipcode = req.body.zipcode ? req.body.zipcode : person001mb.zipcode;
        person001mb.dob = req.body.dob ? req.body.dob : person001mb.dob;
        person001mb.confirmemail = req.body.confirmemail ? req.body.confirmemail : person001mb.confirmemail;
        person001mb.landline = req.body.landline ? req.body.landline : person001mb.landline;
        person001mb.status = req.body.status ? req.body.status : person001mb.status;
        let person = person001mb.save();

        const login001mb = await Login001mb.findOne({ _id: loginid });
        login001mb.personid = person._id ? person._id : login001mb.personid;
        login001mb.theme = req.body.theme ? req.body.theme : login001mb.theme;
        login001mb.username = req.body.username ? req.body.username : login001mb.username;
        login001mb.password = req.body.password ? bcrypt.hashSync(req.body.password, 10) : login001mb.password;
        login001mb.roleid = req.body.roleid.id ? req.body.roleid.id : login001mb.roleid;
        login001mb.status = req.body.status ? req.body.status : login001mb.status
        login001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : login001mb.inserteduser;
        login001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : login001mb.inserteddatetime;
        login001mb.updateduser = req.body.updateduser ? req.body.updateduser : login001mb.updateduser;
        login001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : login001mb.updateddatetime;
        login001mb.save();

        const subscriberdetails001wb = await Subscriberdetails001wb.findOne({ _id: subid });
        subscriberdetails001wb.subpid = req.body.subpid.id ? req.body.subpid.id : subscriberdetails001wb.subpid;
        subscriberdetails001wb.horoscope = req.body.horoscope ? req.body.horoscope : subscriberdetails001wb.horoscope;
        subscriberdetails001wb.contentid = req.body.contentid.id ? req.body.contentid.id : subscriberdetails001wb.contentid;
        subscriberdetails001wb.personid = person._id ? person._id : subscriberdetails001wb.personid;
        subscriberdetails001wb.subscdesc = req.body.subscdesc ? req.body.subscdesc : subscriberdetails001wb.subscdesc;
        subscriberdetails001wb.aboutme = req.body.aboutme ? req.body.aboutme : subscriberdetails001wb.aboutme;
        subscriberdetails001wb.status = req.body.status ? req.body.status : subscriberdetails001wb.status
        subscriberdetails001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subscriberdetails001wb.inserteduser;
        subscriberdetails001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subscriberdetails001wb.inserteddatetime;
        subscriberdetails001wb.updateduser = req.body.updateduser ? req.body.updateduser : subscriberdetails001wb.updateduser;
        subscriberdetails001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subscriberdetails001wb.updateddatetime;
        subscriberdetails001wb.subscapproval = req.body.subscapproval;
        subscriberdetails001wb.approvedby = req.body.approvedby ? req.body.approvedby : subscriberdetails001wb.approvedby;
        subscriberdetails001wb.approvedon = req.body.approvedon ? req.body.approvedon : subscriberdetails001wb.approvedon;
        subscriberdetails001wb.monthlyregistration = req.body.monthlyregistration ? req.body.monthlyregistration : subscriberdetails001wb.monthlyregistration;
        subscriberdetails001wb.save(function (err, subscriberdetails001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating subscriberdetails001wb.',
                    error: err
                });
            }

            return res.json(subscriberdetails001wb);
        });
    }
};


export const remove = async (req, res) => {
    var subid = req.params.subid;
    var loginid = req.params.loginid;
    var personid = req.params.personid;
    if (subid && loginid && personid) {
        await Person001mb.findByIdAndRemove({ _id: personid });
        await Login001mb.findByIdAndRemove({ _id: loginid });
        await Subscriberdetails001wb.findByIdAndRemove({ _id: subid });
        return res.json('subscriberdetails001wb deleted');
    } else {
        return res.status(500).json({
            message: 'Error when deleting subscriberdetails001wb.',
            error: err
        });
    }
};