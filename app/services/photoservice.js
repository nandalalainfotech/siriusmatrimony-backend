import db from "../models/main.js";

const Photo001wb = db.photo001wb
const Person001wb = db.person001wb
export const list = async (req, res) => {
    Photo001wb.find(function (err, photo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting photo001wb.',
                error: err
            });
        }

        return res.json(photo001wb);
    });
};

export const show = async (req, res) => {
    var id = req.params.id;

    Photo001wb.findOne({ _id: id }, function (err, photo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting photo001wb.',
                error: err
            });
        }

        if (!person001mb) {
            return res.status(404).json({
                message: 'No such photo001wb'
            });
        }

        return res.json(photo001wb);
    });
};


// export const create = async (req, res) => {
//     const photo001wb = new Photo001wb();
   
//     photo001wb.category= req.body.category,
//     photo001wb.filename= req.body.filename,
//     photo001wb.originalfilename= req.body.originalfilename,
//     photo001wb.content= req.body.content,
//     photo001wb.status= req.body.status,
//     photo001wb.inserteduser= req.body.inserteduser,
//     photo001wb.inserteddatetime= req.body.inserteddatetime,
//     photo001wb.updateduser= req.body.updateduser,
//     photo001wb.updateddatetime= req.body.updateddatetime
//     photo001wb.save()
//         .then((result) => {
//             console.log("result------photo001wb", result);
//             Person001wb.findOne({ inserteduser: photo001wb.inserteduser }, (err, user) => {
//                 console.log("result------id photo001wb", photo001wb.inserteduser);
//                 if (user) {
//                     // The below two lines will add the newly saved review's 
//                     // ObjectID to the the User's reviews array field
//                     console.log("user",user);
//                      user.photo.push(photo001wb);
//                     user.save();
//                     res.json({ message: 'photo001wb created!' });
//                 }
//             });
//         })
//         .catch((error) => {
//             res.status(500).json({ error });
//         });
// };

export const create = async (req, res) => {
    var photo001wb = new Photo001wb({
        category: req.body.category,
        filename: req.body.filename,
        originalfilename: req.body.originalfilename,
        status: req.body.status,
        inserteduser: req.body.inserteduser,
        inserteddatetime: req.body.inserteddatetime,
        updateduser: req.body.updateduser,
        updateddatetime: req.body.updateddatetime
    });

    photo001wb.save(function (err, photo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating photo001wb',
                error: err
            });
        }

        return res.status(201).json(photo001wb);
    });
};

export const update = async (req, res) => {
    var id = req.params.id;

    Photo001wb.findOne({ _id: id }, function (err, photo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting photo001wb',
                error: err
            });
        }

        if (!photo001wb) {
            return res.status(404).json({
                message: 'No such photo001wb'
            });
        }

        photo001wb.category = req.body.category ? req.body.category : photo001wb.category;
        photo001wb.filename = req.body.filename ? req.body.filename : photo001wb.filename;
        photo001wb.originalfilename = req.body.originalfilename ? req.body.originalfilename : photo001wb.originalfilename;
        photo001wb.status = req.body.status ? req.body.status : photo001wb.status;
        photo001wb.content = req.body.content ? req.body.content : photo001wb.content;
        photo001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : photo001wb.inserteduser;
        photo001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : photo001wb.inserteddatetime; 
        photo001wb.updateduser = req.body.updateduser ? req.body.updateduser : photo001wb.updateduser;
        photo001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : photo001wb.updateddatetime;

        photo001wb.save(function (err, photo001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating photo001wb.',
                    error: err
                });
            }

            return res.json(photo001wb);
        });
    });
};
export const remove = async (req, res) => {
    var id = req.params.id;

    Photo001wb.findByIdAndRemove(id, function (err, photo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the photo001wb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};