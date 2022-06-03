import db from "../models/main.js";

import nodemailer from "nodemailer";

import hbs from "nodemailer-express-handlebars";

import path from "path";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

const Login001mb = db.login001mb;

const Person001mb = db.person001mb

const Users001wb = db.users001wb

const Role001wb = db.role001wb;

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

export const create = async (req, res, err) => {
    console.log("req", req.body)
    const person001mb = new Person001mb();
    person001mb.countryid = req.body.person001mb.countryid;
    person001mb.usersid = null;
    person001mb.loginid = null;
    person001mb.subscriberdetailsid = null;
    person001mb.cityid = req.body.person001mb.cityid;
    person001mb.stateid = req.body.person001mb.stateid;
    person001mb.roleid = req.body.person001mb.roleid;
    person001mb.subcatcode = req.body.person001mb.subcatcode;
    console.log("person001mb.subcatcode", person001mb.subcatcode)
    person001mb.professionalid = req.body.person001mb.professionalid;
    person001mb.categoryid = req.body.person001mb.categoryid;
    person001mb.languageid = req.body.person001mb.languageid;
    person001mb.personalid = req.body.person001mb.personalid;
    person001mb.religionid = req.body.person001mb.religionid;
    person001mb.classificationid = req.body.person001mb.classificationid;
    person001mb.subscsubspid = req.body.person001mb.subscsubspid;
    person001mb.regionalid = req.body.person001mb.regionalid;
    person001mb.companycode = req.body.person001mb.companycode;
    person001mb.firstname = req.body.person001mb.firstname;
    person001mb.lastname = req.body.person001mb.lastname;
    person001mb.zipcode = req.body.person001mb.zipcode;
    person001mb.dob = req.body.person001mb.dob;
    person001mb.confirmemail = req.body.person001mb.confirmemail;
    person001mb.email = req.body.person001mb.email;
    // person001mb.subscname = req.body.subscname;
    person001mb.age = req.body.person001mb.age;
    person001mb.verified = req.body.person001mb.verified;
    person001mb.sex = req.body.person001mb.sex;
    // person001mb.subscdesc = req.body.subscdesc;
    // person001mb.aboutme = req.body.aboutme;
    person001mb.address = req.body.person001mb.address;
    person001mb.phoneno = req.body.person001mb.phoneno;
    person001mb.landline = req.body.person001mb.landline;
    person001mb.inserteduser = req.body.person001mb.inserteduser;
    person001mb.inserteddatetime = req.body.person001mb.inserteddatetime;
    person001mb.updateduser = req.body.person001mb.updateduser;
    person001mb.updateddatetime = req.body.person001mb.updateddatetime;
    person001mb.status = req.body.person001mb.status;
    console.log("person001mb", person001mb)
    if (!(person001mb.email && person001mb.firstname && person001mb.roleid)) {
        return res.status(402).json("Enter a Required Field");
    }
    const oldUser = await Person001mb.findOne({ email: person001mb.email});
    if (oldUser) {
        return res.status(409).send("User Already Exist");
    }
    const token = jwt.sign({ email: person001mb.email, roleid: person001mb.roleid }, process.env.TOKEN_KEY,
        {
            expiresIn: "112h",
        }
    );
    person001mb.token = token;
    let person = await person001mb.save();
    const login001mb = new Login001mb()
    login001mb.username = req.body.login001mb.username;
    console.log("login001mb", login001mb.username)
    login001mb.password = bcrypt.hashSync(req.body.login001mb.password, 10);
    login001mb.roleid = req.body.login001mb.roleid;
    login001mb.inserteduser = person001mb.inserteduser;
    login001mb.inserteddatetime = person001mb.inserteddatetime;
    login001mb.updateduser = person001mb.updateduser;
    login001mb.updateddatetime = person001mb.updateddatetime;
    login001mb.status = req.body.status;
    login001mb.personid = person._id;
    await login001mb.save()
    const users001wb = new Users001wb();
    users001wb.personid = person._id;
    users001wb.employeeid = req.body.user001wb.employeeid;
    users001wb.bankname = req.body.user001wb.bankname;
    users001wb.accountnumber = req.body.user001wb.accountnumber;
    users001wb.insurance = req.body.user001wb.insurance;
    users001wb.accounttype = req.body.user001wb.accounttype;
    users001wb.inserteduser = person001mb.inserteduser;
    users001wb.inserteddatetime = person001mb.inserteddatetime;
    users001wb.updateduser = person001mb.updateduser;
    users001wb.updateddatetime = person001mb.updateddatetime;
    users001wb.status = req.body.status;
    await users001wb.save()
    if (users001wb) {
        const updateperson = await Users001wb.findOne({ personid: users001wb.personid });
        const updatepersons = await Login001mb.findOne({ personid: login001mb.personid });
        person001mb.usersid = updateperson._id;
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
            url: `http://localhost:8081/api/userscontroller/verify?token=${token}`
        }
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            return res.json({ users001wb, login001mb, person001mb });
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
        const person = await Person001mb.findOne({ email: decoded.email, roleid: decoded.roleid, });
        if (person.verified) {
            return res.status(409).send({ message: " Account Verified Please Login" });
        } else {
            person.verified = true;
            person.save();
            return res.status(200).send({ message: "Account Verified" });
        }
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
};

export const update = async (req, res,err) => {
    var personid = req.params.personid;
    var loginid = req.params.loginid;
    var userid = req.params.userid;
    console.log("req", req)
    // if (err) {
    //     return res.status(500).json({
    //         message: 'Error when updating users001wb.',
    //         error: err
    //     });
    // } else {
        const person001mb = await Person001mb.findOne({ _id: personid });
        person001mb.email = req.body.person001mb.email ? req.body.person001mb.email : person001mb.email;
        person001mb.personalid = req.body.person001mb.personalid.id ? req.body.person001mb.personalid.id : person001mb.personalid;
        person001mb.subcatcode = req.body.person001mb.subcatcode.id ? req.body.person001mb.subcatcode.id : person001mb.subcatcode;
        person001mb.professionalid = req.body.person001mb.professionalid.id ? req.body.person001mb.professionalid.id : person001mb.professionalid;
        person001mb.categoryid = req.body.person001mb.categoryid.id ? req.body.person001mb.categoryid.id : person001mb.categoryid;
        person001mb.languageid = req.body.person001mb.languageid.id ? req.body.person001mb.languageid.id : person001mb.languageid;
        person001mb.religionid = req.body.person001mb.religionid.id ? req.body.person001mb.religionid.id : person001mb.religionid;
        person001mb.classificationid = req.body.person001mb.classificationid.id ? req.body.person001mb.classificationid.id : person001mb.classificationid;
        person001mb.subscsubspid = req.body.person001mb.subscsubspid.id ? req.body.person001mb.subscsubspid.id : person001mb.subscsubspid;
        person001mb.regionalid = req.body.person001mb.regionalid.id ? req.body.person001mb.regionalid.id : person001mb.regionalid;
        person001mb.companycode = req.body.person001mb.companycode.id ? req.body.person001mb.companycode.id : person001mb.companycode;
        person001mb.cityid = req.body.person001mb.cityid.id ? req.body.person001mb.cityid.id : person001mb.cityid;
        person001mb.stateid = req.body.stateid.id ? req.body.stateid.id : person001mb.stateid;
        person001mb.roleid = req.body.person001mb.roleid.id ? req.body.person001mb.roleid.id : person001mb.roleid;
        person001mb.age = req.body.person001mb.age ? req.body.person001mb.age : person001mb.age;
        person001mb.sex = req.body.person001mb.sex ? req.body.person001mb.sex : person001mb.sex;
        person001mb.countryid = req.body.person001mb.countryid.id ? req.body.person001mb.countryid.id : person001mb.countryid;
        person001mb.address = req.body.person001mb.address ? req.body.person001mb.address : person001mb.address;
        person001mb.phoneno = req.body.phoneno ? req.body.phoneno : person001mb.phoneno;
        person001mb.inserteduser = req.body.person001mb.inserteduser ? req.body.person001mb.inserteduser : person001mb.inserteduser;
        person001mb.inserteddatetime = req.body.person001mb.inserteddatetime ? req.body.person001mb.inserteddatetime : person001mb.inserteddatetime;
        person001mb.updateduser = req.body.person001mb.updateduser ? req.body.person001mb.updateduser : person001mb.updateduser;
        person001mb.updateddatetime = req.body.person001mb.updateddatetime ? req.body.person001mb.updateddatetime : person001mb.updateddatetime;
        person001mb.firstname = req.body.person001mb.firstname ? req.body.person001mb.firstname : person001mb.firstname;
        person001mb.lasttname = req.body.person001mb.lasttname ? req.body.person001mb.lasttname : person001mb.lasttname;
        person001mb.zipcode = req.body.person001mb.zipcode ? req.body.person001mb.zipcode : person001mb.zipcode;
        person001mb.dob = req.body.person001mb.dob ? req.body.person001mb.dob : person001mb.dob;
        person001mb.confirmemail = req.body.person001mb.confirmemail ? req.body.person001mb.confirmemail : person001mb.confirmemail;
        person001mb.landline = req.body.person001mb.landline ? req.body.person001mb.landline : person001mb.landline;
        person001mb.status = req.body.person001mb.status ? req.body.person001mb.status : person001mb.status;
        console.log("person001mb",person001mb)
        let person = person001mb.save();
        const login001mb = await Login001mb.findOne({ _id: loginid });
        login001mb.personid = person._id ? person._id : login001mb.personid;
        login001mb.username = req.body.username ? req.body.username : login001mb.username;
        login001mb.password = req.body.password ? bcrypt.hashSync(req.body.password, 10) : login001mb.password;
        login001mb.roleid = req.body.roleid.id ? req.body.roleid.id : login001mb.roleid;
        login001mb.status = req.body.status ? req.body.status : login001mb.status
        login001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : login001mb.inserteduser;
        login001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : login001mb.inserteddatetime;
        login001mb.updateduser = req.body.updateduser ? req.body.updateduser : login001mb.updateduser;
        login001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : login001mb.updateddatetime;
        login001mb.save();
        const users001wb = await Users001wb.findOne({ _id: userid });
        users001wb.employeeid = req.body.employeeid ? req.body.employeeid : users001wb.employeeid;
        users001wb.personid = person._id ? person._id : users001wb.personid;
        users001wb.bankname = req.body.bankname ? req.body.bankname : users001wb.bankname;
        users001wb.accountnumber = req.body.accountnumber ? req.body.accountnumber : users001wb.accountnumber;
        users001wb.insurance = req.body.insurance ? req.body.insurance : users001wb.insurance;
        users001wb.accounttype = req.body.accounttype ? req.body.accounttype : users001wb.accounttype;
        users001wb.save(function (err, users001wb) {
            return res.json('users001wb updated');
        });
    }
    // };
    export const remove = async (req, res) => {
        var userid = req.params.userid;
        var loginid = req.params.loginid;
        var personid = req.params.personid;
        if (userid && loginid && personid) {
            console.log("testing", userid, loginid, personid)
            await Person001mb.findByIdAndRemove({ _id: personid });
            await Login001mb.findByIdAndRemove({ _id: loginid });
            await Users001wb.findByIdAndRemove({ _id: userid });
            return res.json('users001wb deleted');
        } else {
            return res.status(500).json({
                message: 'Error when deleting users001wb.',
                error: err
            });
        }

    };