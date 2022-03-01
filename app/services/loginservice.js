import db from "../models/main.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const Login001mb = db.login001mb;
const Person001mb = db.person001mb
const Role001mb = db.role001mb;

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
export const loginauth = async (req, res) => {
   var username = req.params.username;
   var password = req.params.password;
    const loginperson = await Login001mb.findOne({ username:username }).populate({path:'roleid',model: Role001mb});
    if (loginperson) {
        const security = await bcrypt.compare(password, loginperson.password)
        if(security){
            const person = await Person001mb.findOne({ _id: loginperson.personid });
            const token = jwt.sign({ username: loginperson.username, rolename: loginperson.roleid.rolename }, process.env.TOKEN_KEY,
                {
                    expiresIn: "6h",
                }
            );
                return res.json({
                    data: {person:person, token:token }
                });
               
            }else {
                return res.status(500).json({
                    message: 'invalid password'
                });
            }
    } else {
        return res.status(500).json({
            message: 'invalid username'
        });
    }
};