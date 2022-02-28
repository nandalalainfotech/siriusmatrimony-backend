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
    person001mb.subscname = req.body.subscname;
    person001mb.age = req.body.age;
    person001mb.verified = false;
    person001mb.sex = req.body.sex;
    person001mb.subscdesc = req.body.subscdesc;
    person001mb.aboutme = req.body.aboutme;
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
    const oldUser = await Person001mb.findOne({ email: person001mb.email, roleid: person001mb.roleid });
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


    const users001wb = new Users001wb();
    users001wb.personid = person._id;
    users001wb.employeeid = req.body.employeeid;
    users001wb.bankname = req.body.bankname;
    users001wb.accountnumber = req.body.accountnumber;
    users001wb.insurance = req.body.insurance;
    users001wb.accounttype = req.body.accounttype;
    users001wb.inserteduser = req.body.inserteduser;
    users001wb.inserteddatetime = req.body.inserteddatetime;
    users001wb.updateduser = req.body.updateduser;
    users001wb.status = req.body.status;
    await users001wb.save()

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
            return res.json({ message: 'email created!' });
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

export const update = async (req, res) => {
    var personid = req.params.personid;
    var loginid = req.params.loginid;
    var userid = req.params.userid;
    const person001mb = await Person001mb.findOne({ _id: personid });
    if (person001mb) {
        person001mb.email = req.body.email ? req.body.email : person001mb.email;
        person001mb.personid = req.body.personid ? req.body.personid : person001mb.personid;
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
        login001mb.username = req.body.username ? req.body.username : login001mb.username;
        login001mb.password = req.body.password ? req.body.password : login001mb.password;
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
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating users001wb.',
                    error: err
                });
            }

            return res.json('users001wb updated');
        });
    }
};
export const remove = async (req, res) => {
    var userid = req.params.userid;
    var loginid = req.params.loginid;
    var personid = req.params.personid;
    if(userid && loginid && personid){
        console.log("testing",userid,loginid,personid)
       await Person001mb.findByIdAndRemove({_id: personid});
       await Login001mb.findByIdAndRemove({_id: loginid}); 
       await Users001wb.findByIdAndRemove({_id: userid});   
       return res.json('users001wb deleted');
    }else{
        return res.status(500).json({
            message: 'Error when deleting users001wb.',
            error: err
        });
    }
       
};