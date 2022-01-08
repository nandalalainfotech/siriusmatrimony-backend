import db from "../models/main.js";


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
    var subscriberdetails001wb = new Subscriberdetails001wb({
        regionalid: req.body.regionalid,
        companycode: req.body.companycode,
        catcode: req.body.catcode,
        subcatcode: req.body.subcatcode,
        categoryid: req.body.categoryid,
        subscid: req.body.subscid,
        classificationid: req.body.classificationid,
        subscname: req.body.subscname,
        age: req.body.age,
        sex: req.body.sex,
        subscdesc: req.body.subscdesc,
        aboutme: req.body.aboutme,
        photo: req.body.photo,
        video: req.body.video,
        audio: req.body.audio,
        address: req.body.address,
        phoneno: req.body.phoneno,
        subscstatus: req.body.subscstatus,
        subscapproval: req.body.subscapproval,
        approvedby: req.body.approvedby,
        approvedon: req.body.approvedon,
        subscsubspid: req.body.subscsubspid,
        inserteduser: req.body.inserteduser,
        inserteddatetime: req.body.inserteddatetime,
        updateduser: req.body.updateduser,
        updateddatetime: req.body.updateddatetime
    });

    subscriberdetails001wb.save(function(err, subscriberdetails001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating subscriberdetails001wb',
                error: err
            });
        }

        return res.status(201).json(subscriberdetails001wb);
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

        subscriberdetails001wb.regionalid = req.body.regionalid ? req.body.regionalid : subscriberdetails001wb.regionalid;
        subscriberdetails001wb.companycode = req.body.companycode ? req.body.companycode : subscriberdetails001wb.companycode;
        subscriberdetails001wb.catcode = req.body.catcode ? req.body.catcode : subscriberdetails001wb.catcode;
        subscriberdetails001wb.subcatcode = req.body.subcatcode ? req.body.subcatcode : subscriberdetails001wb.subcatcode;
        subscriberdetails001wb.categoryid = req.body.categoryid ? req.body.categoryid : subscriberdetails001wb.categoryid;
        subscriberdetails001wb.subscid = req.body.subscid ? req.body.subscid : subscriberdetails001wb.subscid;
        subscriberdetails001wb.subscname = req.body.subscname ? req.body.subscname : subscriberdetails001wb.subscname;
        subscriberdetails001wb.age = req.body.age ? req.body.age : subscriberdetails001wb.age;
        subscriberdetails001wb.sex = req.body.sex ? req.body.sex : subscriberdetails001wb.sex;
        subscriberdetails001wb.subscdesc = req.body.subscdesc ? req.body.subscdesc : subscriberdetails001wb.subscdesc;
        subscriberdetails001wb.aboutme = req.body.aboutme ? req.body.aboutme : subscriberdetails001wb.aboutme;
        subscriberdetails001wb.photo = req.body.photo ? req.body.photo : subscriberdetails001wb.photo;
        subscriberdetails001wb.video = req.body.video ? req.body.video : subscriberdetails001wb.video;
        subscriberdetails001wb.audio = req.body.audio ? req.body.audio : subscriberdetails001wb.audio;
        subscriberdetails001wb.address = req.body.address ? req.body.address : subscriberdetails001wb.address;
        subscriberdetails001wb.phoneno = req.body.phoneno ? req.body.phoneno : subscriberdetails001wb.phoneno;
        subscriberdetails001wb.subscstatus = req.body.subscstatus ? req.body.subscstatus : subscriberdetails001wb.subscstatus;
        subscriberdetails001wb.subscapproval = req.body.subscapproval ? req.body.subscapproval : subscriberdetails001wb.subscapproval;
        subscriberdetails001wb.approvedby = req.body.approvedby ? req.body.approvedby : subscriberdetails001wb.approvedby;
        subscriberdetails001wb.approvedon = req.body.approvedon ? req.body.approvedon : subscriberdetails001wb.approvedon;
        subscriberdetails001wb.subscsubspid = req.body.subscsubspid ? req.body.subscsubspid : subscriberdetails001wb.subscsubspid;
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