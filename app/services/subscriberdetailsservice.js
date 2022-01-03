import db from "../models/main.js";

const Subscribercontent001wb = db.Subscribercontent001wb

export const list = async(req, res) => {
    Sbscriberdetails001wb.find(function(err, sbscriberdetails001wbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting sbscriberdetails001wb.',
                error: err
            });
        }

        return res.json(sbscriberdetails001wbs);
    });
};

export const show = async(req, res) => {
    var id = req.params.id;

    Subscribercontent001wb.findOne({ _id: id }, function(err, sbscriberdetails001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting sbscriberdetails001wb.',
                error: err
            });
        }

        if (!sbscriberdetails001wb) {
            return res.status(404).json({
                message: 'No such sbscriberdetails001wb'
            });
        }

        return res.json(sbscriberdetails001wb);
    });
};
export const create = async(req, res) => {
    var sbscriberdetails001wb = new Sbscriberdetails001wb({
        regionalid: req.body.regionalid,
        companycode: req.body.companycode,
        catcode: req.body.catcode,
        subcatcode: req.body.subcatcode,
        categoryid: req.body.categoryid,
        subscid: req.body.subscid,
        subscname: req.body.subscname,
        age: req.body.age,
        sex: req.body.sex,
        subscdesc: req.body.subscdesc,
        aboutme: req.body.aboutme,
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

    sbscriberdetails001wb.save(function(err, sbscriberdetails001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating sbscriberdetails001wb',
                error: err
            });
        }

        return res.status(201).json(sbscriberdetails001wb);
    });
};

export const update = async(req, res) => {
    var id = req.params.id;

    Subscribercontent001wb.findOne({ _id: id }, function(err, sbscriberdetails001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting sbscriberdetails001wb',
                error: err
            });
        }

        if (!sbscriberdetails001wb) {
            return res.status(404).json({
                message: 'No such sbscriberdetails001wb'
            });
        }

        sbscriberdetails001wb.regionalid = req.body.regionalid ? req.body.regionalid : sbscriberdetails001wb.regionalid;
        sbscriberdetails001wb.companycode = req.body.companycode ? req.body.companycode : sbscriberdetails001wb.companycode;
        sbscriberdetails001wb.catcode = req.body.catcode ? req.body.catcode : sbscriberdetails001wb.catcode;
        sbscriberdetails001wb.subcatcode = req.body.subcatcode ? req.body.subcatcode : sbscriberdetails001wb.subcatcode;
        sbscriberdetails001wb.categoryid = req.body.categoryid ? req.body.categoryid : sbscriberdetails001wb.categoryid;
        sbscriberdetails001wb.subscid = req.body.subscid ? req.body.subscid : sbscriberdetails001wb.subscid;
        sbscriberdetails001wb.subscname = req.body.subscname ? req.body.subscname : sbscriberdetails001wb.subscname;
        sbscriberdetails001wb.age = req.body.age ? req.body.age : sbscriberdetails001wb.age;
        sbscriberdetails001wb.sex = req.body.sex ? req.body.sex : sbscriberdetails001wb.sex;
        sbscriberdetails001wb.subscdesc = req.body.subscdesc ? req.body.subscdesc : sbscriberdetails001wb.subscdesc;
        sbscriberdetails001wb.aboutme = req.body.aboutme ? req.body.aboutme : sbscriberdetails001wb.aboutme;
        sbscriberdetails001wb.address = req.body.address ? req.body.address : sbscriberdetails001wb.address;
        sbscriberdetails001wb.phoneno = req.body.phoneno ? req.body.phoneno : sbscriberdetails001wb.phoneno;
        sbscriberdetails001wb.subscstatus = req.body.subscstatus ? req.body.subscstatus : sbscriberdetails001wb.subscstatus;
        sbscriberdetails001wb.subscapproval = req.body.subscapproval ? req.body.subscapproval : sbscriberdetails001wb.subscapproval;
        sbscriberdetails001wb.approvedby = req.body.approvedby ? req.body.approvedby : sbscriberdetails001wb.approvedby;
        sbscriberdetails001wb.approvedon = req.body.approvedon ? req.body.approvedon : sbscriberdetails001wb.approvedon;
        sbscriberdetails001wb.subscsubspid = req.body.subscsubspid ? req.body.subscsubspid : sbscriberdetails001wb.subscsubspid;
        sbscriberdetails001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : sbscriberdetails001wb.inserteduser;
        sbscriberdetails001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : sbscriberdetails001wb.inserteddatetime;
        sbscriberdetails001wb.updateduser = req.body.updateduser ? req.body.updateduser : sbscriberdetails001wb.updateduser;
        sbscriberdetails001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : sbscriberdetails001wb.updateddatetime;

        sbscriberdetails001wb.save(function(err, sbscriberdetails001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating sbscriberdetails001wb.',
                    error: err
                });
            }

            return res.json(sbscriberdetails001wb);
        });
    });
};


export const remove = async(req, res) => {
    var id = req.params.id;

    Subscribercontent001wb.findByIdAndRemove(id, function(err, sbscriberdetails001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the sbscriberdetails001wb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};