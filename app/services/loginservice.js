import db from "../models/main.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const Login001mb = db.login001mb;
const Person001mb = db.person001mb
const Role001wb = db.role001wb;

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
    const loginperson = await Login001mb.findOne({ username:username }).populate({path:'roleid',model: Role001wb});
    if (loginperson) {
        const security = await bcrypt.compare(password, loginperson.password)
        if(security){
            const person = await Person001mb.findOne({ _id: loginperson.personid });
            const token = jwt.sign({ username: loginperson.username, rolename: loginperson.roleid.rolename }, process.env.TOKEN_KEY,
                {
                    expiresIn: "6h",
                }
            );
                return res.status(500).json({
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

// export const create = async (req, res) => {
//     const login001mb = new Login001mb()
//     login001mb.username = req.body.username;
//     login001mb.personid = req.body.personid.id;
//     login001mb.password = bcrypt.hashSync(req.body.password, 10);
//     login001mb.status = req.body.status;
//     login001mb.rolename = req.body.rolename.rolename;
//     login001mb.inserteduser = req.body.inserteduser;
//     login001mb.inserteddatetime = req.body.inserteddatetime;
//     login001mb.updateduser = req.body.updateduser;
//     login001mb.updateddatetime = req.body.updateddatetime;
//     login001mb.save()
//         .then((result) => {
//             res.json({ message: 'Login created' });
//         })
//         .catch((error) => {
//             res.status(500).json({ error });
//         });

// };
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
        login001mb.personid = req.body.personid.id ? req.body.personid.id : login001mb.personid;
        login001mb.username = req.body.username ? req.body.username : login001mb.username;
        login001mb.password = req.body.password ? req.body.password : login001mb.password;
        login001mb.role = req.body.role ? req.body.role : login001mb.role;
        login001mb.username = req.body.username ? req.body.username : login001mb.username;
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
       
        return res.json({message:"Deleted Sucessfully"});
    });
};