import db from "../models/main.js";

import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
import bcrypt from "bcryptjs";
const Users001wb = db.users001wb
const Login001mb = db.login001mb;
// dotenv.config();
export const list = async (req, res) => {
    Login001mb.find(function (err, login001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting login001mb.',
                error: err
            });
        }

        return res.json(login001mb);
    });
};
export const show = (req, res) => {
    var id = req.params.id;

    Login001mb.findOne({ _id: id }, function (err, login001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting login001mb.',
                error: err
            });
        }

        if (!login001mb) {
            return res.status(404).json({
                message: 'No such login001mb'
            });
        }

        return res.json(login001mb);
    });
};
export const create = async (req, res, password) => {
    console.log("req-----login", req);
    const login001mb = new Login001mb()
    login001mb.email = req.body.email;
    login001mb.password = bcrypt.hashSync(req.body.password, 10),
    login001mb.status = req.body.status;
    login001mb.role = req.body.role;
    login001mb.token = req.body.token;
    login001mb.inserteduser = req.body.inserteduser;
    login001mb.inserteddatetime = req.body.inserteddatetime;
    login001mb.updateduser = req.body.updateduser;
    login001mb.updateddatetime = req.body.updateddatetime;

    if (!(login001mb.email && login001mb.password)) {
        res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const login = await Users001wb.findOne({ email: login001mb.email });
    console.log("login001mb.email", login001mb.email);
    console.log("login", login)
    if (login) {

        console.log("login-----------", login)
        const sec = await bcrypt.compare(login.password, login001mb.password)
        console.log("sec", sec);
        console.log("login001mb.password", login001mb.password);
        console.log("login.password", login.password);

        if (sec) {
            // Create token
            const token = jwt.sign({ email: login001mb.email },
                process.env.TOKEN_KEY, {
                expiresIn: "7h",
            }
            );
            // save user token
            login001mb.token = token;
            console.log("token", token)

            login001mb.save()
                .then((result) => {
                    console.log("login001mb", login001mb);
                    res.json({ message: 'Login created' });
                })
                .catch((error) => {
                    res.status(500).json({ error });
                });
        }
        else {
            return res.status(500).json({
                message: 'invalid password'
            });
        }
    } else {
        return res.status(500).json({
            message: 'invalid mail'
        });
    }
};


export const update = async (req, res) => {
    var id = req.params.id;

    Login001mb.findOne({ _id: id }, function (err, login001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting login001mb',
                error: err
            });
        }

        if (!login001mb) {
            return res.status(404).json({
                message: 'No such login001mb'
            });
        }
        login001mb.logintype = req.body.logintype ? req.body.logintype : login001mb.logintype;
        login001mb.password = req.body.password ? req.body.password : login001mb.password;
        login001mb.role = req.body.role ? req.body.role : login001mb.role;
        login001mb.token = req.body.token ? req.body.token : login001mb.token;
        login001mb.status = req.body.status ? req.body.status : login001mb.status
        login001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : login001mb.inserteduser;
        login001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : login001mb.inserteddatetime;
        login001mb.updateduser = req.body.updateduser ? req.body.updateduser : login001mb.updateduser;
        login001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : login001mb.updateddatetime;

        login001mb.save(function (err, login001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating login001mb.',
                    error: err
                });
            }

            return res.json(login001mb);
        });
    });
};
export const remove = async (req, res) => {
    var id = req.params.id;

    Login001mb.findByIdAndRemove(id, function (err, login001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the login001mb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};