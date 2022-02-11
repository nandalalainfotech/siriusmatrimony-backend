import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import db from "./app/models/main.js";
import countrycontroller from "./app/controllers/countrycontroller.js";
import categorydetailcontroller from "./app/controllers/categorydetailscontroller.js";
import companydetailscontroller from "./app/controllers/companydetailscontroller.js";
import contentmastercontroller from "./app/controllers/contentmastercontroller.js";
import languagecontroller from "./app/controllers/languagecontroller.js";
import regionaldetailscontroller from "./app/controllers/regionaldetailscontroller.js";
import religioncontroller from "./app/controllers/religioncontroller.js";
import subscribercontentcontroller from "./app/controllers/subscribercontentcontroller.js";
import statecontroller from "./app/controllers/statecontroller.js";
import subcatclassificationcontroller from "./app/controllers/subcatclassificationcontroller.js";
import subcategorycontroller from "./app/controllers/subcategorycontroller.js";
import subscribercontentauthcontroller from "./app/controllers/subscribercontentauthcontroller.js";
import subscriberpersonalinfocontroller from "./app/controllers/subscriberpersonalinfocontroller.js";
import subscriberprofessionalinfocontroller from "./app/controllers/subscriberprofessionalinfocontroller.js";
import subscriptionmastercontroller from "./app/controllers/subscriptionmastercontroller.js"
import usersamplecontroller from "./app/controllers/usersamplecontroller.js";
import reviewcontroller from "./app/controllers/reviewcontroller.js"
import photocontroller from "./app/controllers/photocontroller.js"
import videocontroller from "./app/controllers/videocontroller.js"
import userscontroller from "./app/controllers/userscontroller.js"
import rolecontroller from "./app/controllers/rolecontroller.js";
import subscriberdetailscontroller from "./app/controllers/subscriberdetailscontroller.js";
import citycontroller from "./app/controllers/citycontroller.js";
import audiocontroller from "./app/controllers/audiocontroller.js";
import personcontroller from "./app/controllers/personcontroller.js";
import logincontroller from "./app/controllers/logincontroller.js";
import swaggerUi from "swagger-ui-express";
import swaggerjsdoc from "swagger-jsdoc";
import upload from "../siriusmatrimony-backend/app/middleware/upload.js";
import videoUpload from "../siriusmatrimony-backend/app/middleware/videoUpload.js";
import audio from "../siriusmatrimony-backend/app/middleware/audio.js";
import paymentcontroller from "./app/controllers/paymentcontroller.js";
import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";
const app = express();
app.use(cors());
dotenv.config();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, UPDATE, OPTIONS, HEAD")
    next();
});
app.use(bodyParser.json());

const Country001mb = db.country001mb;
const Categorydetails001mb = db.categorydetails001mb;
const Companydetails001mb = db.companydetails001mb;
const Contentmaster001mb = db.contentmaster001mb;
const Language001mb = db.language001mb;
const Regionaldetails001mb = db.regionaldetails001mb;
const Religion001mb = db.religion001mb;
const Subscriberdetails001wb = db.subscriberdetails001wb;
const State001mb = db.state001mb;
const Subcatclassification001mb = db.subcatclassification001mb;
const Subcategory001mb = db.subcategory001mb;
const Subscribercontent001wb = db.subscribercontent001wb;
const Subscribercontentauth001wb = db.subscribercontentauth001wb;
const Subscriberpersonalinfo001wb = db.subscriberpersonalinfo001wb;
const Subscriberprofessionalinfo002wb = db.subscriberprofessionalinfo002wb;
const Subscriptionmaster001mb = db.subscriptionmaster001mb;
const Usersample001mb = db.usersample001mb;
const Review001mb = db.review001mb;
const Users001wb = db.users001wb;
const Photo001wb = db.photo001wb;
const Video001wb = db.video001wb;
const Role001wb = db.role001wb;
const City001mb = db.city001mb;
const Audio001wb = db.audio001wb;
const Person001mb = db.person001mb;
const Login001mb = db.login001mb;
const Payment001mb = db.payment001mb;

app.use(bodyParser.urlencoded({ extended: true }));

function initial() {
    Login001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Login001mb.insertMany([{
                    'logintype': "mobile no ",
                    'password': "xyz",
                    'inserteduser': "raj",
                    'inserteddatetime': 11 / 12 / 22,
                    'updateddatetime': 11 / 12 / 22,
                    'updateduser': "raj",

                }, ])
                .then(() => {})
                .catch((err) => console.log("error", err));
        }
    });
    Country001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Country001mb.insertMany([{
                    'countryid': 123,
                    'countryname': "palls",
                    'countrydesc': "good",
                    'status': "good",
                    'inserteduser': "raj",
                    'inserteddatetime': 11 / 12 / 22,
                    'updateddatetime': 11 / 12 / 22,
                    'updateduser': "raj",

                }, ])
                .then(() => {})
                .catch((err) => console.log("error", err));
        }
    });
    City001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            City001mb.insertMany([{
                    'cityid': 123,
                    'cityname': "xyz",
                    'citydesc': "good",
                    'status': "good",
                    'inserteduser': "raj",
                    'inserteddatetime': 11 / 12 / 22,
                    'updateddatetime': 11 / 12 / 22,
                    'updateduser': "raj",

                }, ])
                .then(() => {})
                .catch((err) => console.log("error", err));
        }
    });
    Categorydetails001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Categorydetails001mb.insertMany([{
                        'catcode': "T867",
                        'catname': "C22",
                        'status': "GOOD",
                        'inserteduser': "raj",
                        'inserteddatetime': 11 / 12 / 2021,
                        'updateduser': "raj",
                        'updateddatetime': 11 / 12 / 2021
                    }

                ])
                .then(() => {})
                .catch((err) => console.log("error", err));
        }
    });
    Companydetails001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Companydetails001mb.insertMany([{
                        'companycode': "S33",
                        'companyname': "XYZ",
                        'address': "street",
                        'phonenumber': 78778876,
                        'regionalid': 98,
                        'status': "good",
                        'inserteduser': "raj",
                        'inserteddatetime': 11 / 12 / 2021,
                        'updateduser': "raj",
                        'updateddatetime': 11 / 12 / 2021
                    }

                ])
                .then(() => {})
                .catch((err) => console.log("error", err));
        }
    });
    Contentmaster001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Contentmaster001mb.insertMany([{
                        'contentid': 6767,
                        'name': "RAJ",
                        'description': "good",
                        'size': "222",
                        'quality': "good",
                        'format': "size",
                        'status': "good",
                        'discountflag': true,
                        'inserteduser': "raj",
                        'inserteddatetime': 11 / 12 / 2021,
                        'updateduser': "raj",
                        'updateddatetime': 11 / 12 / 2021
                    }

                ])
                .then(() => {})
                .catch((err) => console.log("error", err));
        }
    });
    Language001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Language001mb.insertMany([{
                        'languageid': 77,
                        'languagename': "raj",
                        'languagedesc': "ok",
                        'status': "good",
                        'inserteduser': "raj",
                        'inserteddatetime': 11 / 12 / 2021,
                        'updateduser': "raj",
                        'updateddatetime': 11 / 12 / 2021
                    }

                ])
                .then(() => {})
                .catch((err) => console.log("error", err));
        }
    });
    Regionaldetails001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Regionaldetails001mb.insertMany([{
                        'regionalid': 544,
                        'regionalname': "RAJ",
                        'regionaldesc': "good",
                        'status': "good",
                        'inserteduser': "raj",
                        'inserteddatetime': 11 / 12 / 2021,
                        'updateduser': "raj",
                        'updateddatetime': 11 / 12 / 2021
                    }

                ])
                .then(() => {})
                .catch((err) => console.log("error", err));
        }
    });
    Religion001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Religion001mb.insertMany([{
                        'regionalid': 666,
                        'regionalname': "RAJ",
                        'regionaldesc': "good",
                        'status': "good",
                        'inserteduser': "raj",
                        'inserteddatetime': 11 / 12 / 2021,
                        'updateduser': "raj",
                        'updateddatetime': 11 / 12 / 2021
                    }

                ])
                .then(() => {})
                .catch((err) => console.log("error", err));
        }
    });
    Subscriberdetails001wb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Subscriberdetails001wb.insertMany([{
                        'regionalid': 434,
                        'companycode': 3443,
                        'catcode': 4343,
                        'subcatcode': 4343,
                        'categoryid': 4343,
                        'subscid': 434,
                        'subscname': "RAJ",
                        '  classificationid': 898,
                        'sex': "male",
                        'subscdesc': "good",
                        'aboutme': "good",
                        'address': "street",
                        'phoneno': 77787,
                        'subscapproval': true,
                        'approvedby': "raj",
                        'approvedon': 11 / 12 / 2021,
                        'subscsubspid': 786,
                        'subscstatus': "good",
                        'inserteduser': "raj",
                        'inserteddatetime': 11 / 12 / 2021,
                        'updateduser': "raj",
                        'updateddatetime': 11 / 12 / 2021
                    }

                ])
                .then(() => {})
                .catch((err) => console.log("error", err));
        }
    });
    State001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            State001mb.insertMany([{
                        'stateid': 123,
                        'statename': "sri",
                        'statedesc': "good",
                        'status': "active",
                        'inserteduser': "aravindh",
                        'inserteddatetime': 11 / 12 / 22,
                        'updateduser': "sam",
                        'updateddatetime': 9 / 12 / 22,
                    }

                ])
                .then(() => {

                })
                .catch((err) => console.log("error", err));
        }
    });
    Subcatclassification001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Subcatclassification001mb.insertMany([{
                        'catcode': "ab12",
                        'subcatcode': "ab13",
                        'classificationid': 1234,
                        'classificationname': "dass",
                        'status': "good",
                        'inserteduser': "aravindh",
                        'inserteddatetime': 11 / 12 / 22,
                        'updateduser': "chandru",
                        'updateddatetime': 6 / 12 / 22
                    }

                ])
                .then(() => {

                })
                .catch((err) => console.log("error", err));
        }
    });
    Subcategory001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Subcategory001mb.insertMany([{
                        'catcode': "a2b",
                        'subcatcode': "s21",
                        'subcatname': "sri",
                        'subcatstatus': "active",
                        'status': "good",
                        'inserteduser': "aravind",
                        'inserteddatetime': 11 / 12 / 22,
                        'updateduser': "chandru",
                        'updateddatetime': 9 / 12 / 22
                    }

                ])
                .then(() => {

                })
                .catch((err) => console.log("error", err));
        }
    });
    Usersample001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Usersample001mb.insertMany([{
                        'username': "Raj",
                        'password': "****",
                        'securityquestion': "xys",
                        'securityanswer': "xys"

                    }

                ])
                .then(() => {

                })
                .catch((err) => console.log("error", err));
        }
    });
    Review001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Review001mb.insertMany([{
                    'comments': "good",
                    'rating': "9",
                    'status': "good"
                }])
                .then(() => {

                })
                .catch((err) => console.log("error", err));
        }
    });
    Subscribercontent001wb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Subscribercontent001wb.insertMany([{
                        'subscid': 123,
                        'subsccontentid1': 12,
                        'subsccontentidattach1': 123,
                        'subsccontentidappovalflag1': true,
                        'subsccontentidattach2': 34,
                        'subsccontentidappovalflag2': false,
                        'subsccontentidattachn': 12,
                        'subsccontentidappovalflagn': false,
                        'inserteduser': "wedas",
                        'inserteddatetime': 11 / 12 / 22,
                        'updateduser': "fsdf",
                        'updateddatetime': 8 / 12 / 22
                    }

                ])
                .then(() => {

                })
                .catch((err) => console.log("error", err));
        }
    });
    Subscribercontentauth001wb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Subscribercontentauth001wb.insertMany([{
                        'subscid': 123,
                        'subscsubpid': 12,
                        'subscsubpstatus': "good",
                        'subscsubpstartdate': 1 / 12 / 22,
                        'subscsupbenddate': 2 / 12 / 22,
                        'inserteduser': "aravindh",
                        'inserteddatetime': 3 / 12 / 22,
                        'updateduser': "chandru",
                        'updateddatetime': 4 / 12 / 22
                    }

                ])
                .then(() => {

                })
                .catch((err) => console.log("error", err));
        }
    });
    Subscriberpersonalinfo001wb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Subscriberpersonalinfo001wb.insertMany([{
                        'subcid': 12,
                        'personaldetails': "my details?",
                        'hobbies': "playing",
                        'flex1': "flex1",
                        'flex2': "flex2",
                        'flex3': "flex3",
                        'flex4': "flex4",
                        'flex5': "flex5",
                        'flex6': "flex6",
                        'flex7': "flex7",
                        'flex8': "flex8",
                        'flex9': "flex9",
                        'flex10': "flex10",
                        'flex11': "flex11",
                        'flex12': "flex12",
                        'inserteduser': "aravindh",
                        'inserteddatetime': 3 / 11 / 22,
                        'updateduser': "chandru",
                        'updateddatetime': 4 / 12 / 22
                    }

                ])
                .then(() => {

                })
                .catch((err) => console.log("error", err));
        }
    });
    Subscriberprofessionalinfo002wb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Subscriberprofessionalinfo002wb.insertMany([{
                        'subcid': 12,
                        'professionaldetails': "hi",
                        'job': "engineer",
                        'flex1': "flex1",
                        'flex2': "flex2",
                        'flex3': "flex3",
                        'flex4': "flex4",
                        'flex5': "flex5",
                        'flex6': "flex6",
                        'flex7': "flex7",
                        'flex8': "flex8",
                        'flex9': "flex9",
                        'flex10': "flex10",
                        'flex11': "flex11",
                        'flex12': "flex12",
                        'inserteduser': "raj",
                        'inserteddatetime': 3 / 11 / 22,
                        'updateduser': "sri",
                        'updateddatetime': 4 / 12 / 22
                    }

                ])
                .then(() => {

                })
                .catch((err) => console.log("error", err));
        }
    });
    Video001wb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Video001wb.insertMany([{
                        'category': "s222",
                        'filename': "img.png",
                        'originalfilename': "video",
                        'status': "active",
                        'content': "678667",
                        'inserteduser': "raj",
                        'inserteddatetime': 6 / 11 / 22,
                        'updateduser': "raju",
                        'updateddatetime': 7 / 11 / 22
                    }

                ])
                .then(() => {

                })
                .catch((err) => console.log("error", err));
        }
    });
    Photo001wb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Photo001wb.insertMany([{
                        'category': "s222",
                        'filename': "img.png",
                        'originalname': "photo",
                        'content': "678667",
                        'status': "active",
                        'inserteduser': "raj",
                        'inserteddatetime': 6 / 11 / 22,
                        'updateduser': "raju",
                        'updateddatetime': 7 / 11 / 22
                    }

                ])
                .then(() => {

                })
                .catch((err) => console.log("error", err));
        }
    });
    Person001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Person001mb.insertMany([{
                        'status': "active",
                        'inserteduser': "raj",
                        'inserteddatetime': 5 / 11 / 22,
                        'updateduser': "raju",
                        'updateddatetime': 12 / 11 / 22
                    }

                ])
                .then(() => {

                })
                .catch((err) => console.log("error", err));
        }
    });
    Payment001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Payment001mb.insertMany([{
                'subpid': 7878,
                'payid': 88,
                'payement': "card",
                'status': "active",
                'inserteduser': "raj",
                'inserteddatetime': 5 / 11 / 22,
                'updateduser': "raju",
                'updateddatetime': 12 / 11 / 22
                    }

                ])
                .then(() => {

                })
                .catch((err) => console.log("error", err));
        }
    });
    Users001wb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Users001wb.insertMany([{
                        'firstname': "RAJ",
                        'lasttname': "d",
                        'zipcode': 1223243,
                        'employeeid': 8778,
                        'dob': 3 / 11 / 2000,
                        'email': "xyz@gmail.com",
                        'confirmemail': "xyz@gmail.com",
                        'sex': "male",
                        'address1': "xyz",
                        'address2': "xyz",
                        'address3': "xyz",
                        'city': "chennai",
                        'state': "tn",
                        'country': "india",
                        'mobile': 76886797974,
                        'landline': 423321211,
                        'status': "active",
                        'inserteduser': "raj",
                        'inserteddatetime': 5 / 11 / 22,
                        'updateduser': "raju",
                        'updateddatetime': 12 / 11 / 22
                    }

                ])
                .then(() => {

                })
                .catch((err) => console.log("error", err));
        }
    });
    Subscriptionmaster001mb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Subscriptionmaster001mb.insertMany([{
                        'subpid': 1212,
                        'subpname': "sri",
                        'description': "good",
                        'tenure': "3 years",
                        'amount': 23,
                        'status': "active",
                        'discountflag': true,
                        'inserteduser': "aravindh",
                        'inserteddatetime': 3 / 11 / 22,
                        'updateduser': "selvam",
                        'updateddatetime': 3 / 11 / 22
                    }

                ])
                .then(() => {

                })
                .catch((err) => console.log("error", err));
        }
    });
    Role001wb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Role001wb.insertMany([{
                    'rolename': "farmer",
                    'status': "active",
                    'discountflag': true,
                    'inserteduser': "aravindh",
                    'inserteddatetime': 3 / 11 / 22,
                    'updateduser': "selvam",
                    'updateddatetime': 3 / 11 / 22
                }])
                .then(() => {})
                .catch((err) => console.log("error", err));
        }
    });
    Audio001wb.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            Audio001wb.insertMany([{
                    'category': "s222",
                    'filename': "img.mp3",
                    'originalfilename': "audio",
                    'content': "678667",
                    'status': "active",
                    'inserteduser': "raj",
                    'inserteddatetime': 6 / 11 / 22,
                    'updateduser': "raju",
                    'updateddatetime': 7 / 11 / 22
                }])
                .then(() => {})
                .catch((err) => console.log("error", err));
        }
    });
}


app.use("/api/logincontroller", logincontroller);
app.use("/api/countrycontroller", countrycontroller);
app.use("/api/categorydetailcontroller", categorydetailcontroller);
app.use("/api/companydetailscontroller", companydetailscontroller);
app.use("/api/contentmastercontroller", contentmastercontroller);
app.use("/api/languagecontroller", languagecontroller);
app.use("/api/regionaldetailscontroller", regionaldetailscontroller);
app.use("/api/religioncontroller", religioncontroller);
app.use("/api/statecontroller", statecontroller);
app.use("/api/subcatclassificationcontroller", subcatclassificationcontroller);
app.use("/api/subcategorycontroller", subcategorycontroller);
app.use("/api/subscribercontentauthcontroller", subscribercontentauthcontroller);
app.use("/api/subscribercontentcontroller", subscribercontentcontroller);
app.use("/api/subscriberpersonalinfocontroller", subscriberpersonalinfocontroller);
app.use("/api/subscriberprofessionalinfocontroller", subscriberprofessionalinfocontroller);
app.use("/api/subscriptionmastercontroller", subscriptionmastercontroller);
app.use("/api/usersamplecontroller", usersamplecontroller);
app.use("/api/reviewcontroller", reviewcontroller);
app.use("/api/userscontroller", userscontroller);
app.use("/api/photocontroller", photocontroller);
app.use("/api/videocontroller", videocontroller);
app.use("/api/rolecontroller", rolecontroller);
app.use("/api/subscriberdetailscontroller", subscriberdetailscontroller);
app.use("/api/citycontroller", citycontroller);
app.use("/api/audiocontroller", audiocontroller);
app.use("/api/personcontroller", personcontroller);
app.use("/api/paymentcontroller", paymentcontroller);
const PORT = process.env.PORT || 8081;

db.mongoose
    .connect(process.env.DATABASE_URI, {

        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {

        console.log(`Successfully connect to MongoDB .`);
    //   initial();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    })
    .catch((err) => {
        console.error("Connection error", err);
        process.exit();
    });


const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Sirius Matrimony API Generation',
            version: '1.0.0'
        },
        tags: [{
            name: " API Generation",
        }]
    },

    apis: ['index.js'],
};
const specs = swaggerjsdoc(options);
app.use('/index', swaggerUi.serve, swaggerUi.setup(specs));

// **********************role001wb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      role001wb:
 *            type: object
 *            properties:
 *             roleid:
 *                type: number
 *             rolename:
 *                 type: string  
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string
 *             subscid:
 *                type: object
 *                properties:
 *                    id: 
 *                     type: string   
 *             userid:
 *                type: object
 *                properties:
 *                    id: 
 *                     type: string     
 */

/**
 * @swagger
 * /api/role001wb:
 *   get:
 *     tags: [role001wb]
 *     summary: Get Method
 *     description: Retrieve the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/role001wb'
 */
app.get('/api/role001wb', (req, res) => {
    Role001wb.find(function(err, role001wb) {
        if (err) {
            return res.status(500).send({
                message: 'Error when getting role001wb.',
                error: err
            });
        }

        return res.json(role001wb);
    });
});

/**
 * @swagger
 * /api/role001wb/{id}:
 *   get:
 *     tags: [role001wb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/role001wb'
 */

app.get('/api/role001wb/:id', (req, res) => {
    var id = req.params.id;
    Role001wb.findOne({ _id: id }, function(err, role001wb) {
        if (err) {
            return res.status(500).send({
                message: 'Error when getting role001wb.',
                error: err
            });
        }

        if (!role001wb) {
            return res.status(404).send({
                message: 'No such role001wb'
            });
        }

        return res.json(role001wb);
    });
});

/**
 * @swagger
 * /api/role001wb/role:
 *   post:
 *    tags: [role001wb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/role001wb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/role001wb/role', (req, res) => {

    const role001wb = new Role001wb();
    role001wb.subscid = req.body.subscid.id;
    role001wb.userid = req.body.userid.id;
    role001wb.roleid = req.body.roleid;
    role001wb.rolename = req.body.rolename;
    role001wb.status = req.body.status;
    role001wb.inserteduser = req.body.inserteduser;
    role001wb.inserteddatetime = req.body.inserteddatetime;
    role001wb.updateduser = req.body.updateduser;
    role001wb.updateddatetime = req.body.updateddatetime;
    role001wb.save(function(err, role001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating role001wb',
                error: err
            });
        }

        return res.status(201).json('role001wb Created!');
    });

})


/**
 * @swagger
 * /api/role001wb/{id}:
 *   put:
 *    tags: [role001wb]
 *    summary: Put Method
 *    description: Retrieve the list of data
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID of the user to retrieve.
 *        schema:
 *           type: string
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                         $ref: '#/components/schemas/role001wb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/role001wb'
 */

app.put('/api/role001wb/:id', (req, res) => {
    var id = req.params.id;
    Role001wb.findOne({ _id: id }, function(err, role001wb) {
        console.log("Role001wb put", role001wb)
        if (err) {
            return res.status(500).send({
                message: 'Error when getting role001wb',
                error: err
            });
        }

        if (!role001wb) {
            return res.status(404).send({
                message: 'No such role001wb'
            });
        }
        role001wb.subscid = req.body.subscid.id ? req.body.subscid.id : role001wb.subscid;
        role001wb.userid = req.body.userid.id ? req.body.userid.id : role001wb.userid;
        role001wb.roleid = req.body.roleid ? req.body.roleid : role001wb.roleid;
        role001wb.rolename = req.body.rolename ? req.body.rolename : role001wb.rolename;
        role001wb.status = req.body.status ? req.body.status : role001wb.status;
        role001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : role001wb.inserteduser;
        role001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : role001wb.inserteddatetime;
        role001wb.updateduser = req.body.updateduser ? req.body.updateduser : role001wb.updateduser;
        role001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : role001wb.updateddatetime;
        role001wb.save(function(err, role001wb) {
            if (err) {
                return res.status(500).send({
                    message: 'Error when updating role001wb.',
                    error: err
                });
            }
            return res.json(role001wb);
        });
    });
});



/**
 * @swagger
 * /api/role001wb/{id}:
 *   delete:
 *    tags: [role001wb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/role001wb/:id', (req, res) => {
    var id = req.params.id;

    Role001wb.findByIdAndRemove(id, function(err, role001wb) {
        if (err) {
            return res.status(500).send({
                message: 'Error when deleting the role001wb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});


// ********************** country schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      country001mb:
 *            type: object
 *            properties:
 *             countryid:
 *                type: number
 *             countryname:
 *                 type: string  
 *             countrydesc:
 *                 type: string 
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string
 *             stateid:
 *                type: array    
 */
// **********************get method****************//
/**
 * @swagger
 * /api/country001mb:
 *   get:
 *     tags: [country001mb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/country001mb'
 */

app.get('/api/country001mb', (req, res) => {
    Country001mb.find(function(err, country001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting country001mb.',
                error: err
            });
        }

        return res.json(country001mb);
    });
});

/**
 * @swagger
 * /api/country001mb/{id}:
 *   get:
 *     tags: [country001mb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/country001mb'
 */

app.get('/api/country001mb/:id', (req, res) => {
    var id = req.params.id;
    Country001mb.findOne({ _id: id }, function(err, country001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting country001mb.',
                error: err
            });
        }

        if (!country001mb) {
            return res.status(404).json({
                message: 'No such country001mb'
            });
        }

        return res.json(country001mb);
    });
});

/**
 * @swagger
 * /api/country001mb/country:
 *   post:
 *    tags: [country001mb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/country001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/country001mb/country', (req, res) => {
    const country001mb = new Country001mb();
    country001mb.countryid = req.body.countryid,
        country001mb.countryname = req.body.countryname,
        country001mb.countrydesc = req.body.countrydesc,
        country001mb.status = req.body.status,
        country001mb.inserteduser = req.body.inserteduser,
        country001mb.inserteddatetime = req.body.inserteddatetime,
        country001mb.updateddatetime = req.body.updateddatetime,
        country001mb.updateduser = req.body.updateduser,
        country001mb.save()
        .then((result) => {
            res.json({ message: 'country created' });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
})


/**
 * @swagger
 * /api/country001mb/{id}:
 *   put:
 *    tags: [country001mb]
 *    summary: Put Method
 *    description: Retrieve the list of data
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID of the user to retrieve.
 *        schema:
 *           type: string
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                         $ref: '#/components/schemas/country001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/country001mb'
 */

app.put('/api/country001mb/:id', (req, res) => {
    var id = req.params.id;

    Country001mb.findOne({ _id: id }, function(err, country001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting country001mb',
                error: err
            });
        }

        if (!country001mb) {
            return res.status(404).json({
                message: 'No such country001mb'
            });
        }
        country001mb.countryid = req.body.countryid ? req.body.countryid : country001mb.countryid;
        country001mb.countryname = req.body.countryname ? req.body.countryname : country001mb.countryname;
        country001mb.countrydesc = req.body.countrydesc ? req.body.countrydesc : country001mb.countrydesc;
        country001mb.status = req.body.status ? req.body.status : country001mb.status;
        country001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : country001mb.inserteduser;
        country001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : country001mb.inserteddatetime;
        country001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : country001mb.updateddatetime;
        country001mb.updateduser = req.body.updateduser ? req.body.updateduser : country001mb.updateduser;

        country001mb.save(function(err, country001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating country001mb.',
                    error: err
                });
            }

            return res.json(country001mb);
        });
    });
});



/**
 * @swagger
 * /api/country001mb/{id}:
 *   delete:
 *    tags: [country001mb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/country001mb/:id', (req, res) => {
    var id = req.params.id;
    Country001mb.findByIdAndRemove(id, function(err, country001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the country001mb.',
                error: err
            });
        }

        return res.json({ message: "Deleted Sucessfully" });
    });
});


// ********************** state schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      state001mb:
 *            type: object
 *            properties:
 *             stateid:
 *                type: number
 *             statename:
 *                 type: string  
 *             statedesc:
 *                 type: string 
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string
 *             cityid:
 *                type: array 
 *             countryid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string      
 */
// ********************** state001mb get method****************//
/**
 * @swagger
 * /api/state001mb:
 *   get:
 *     tags: [state001mb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/state001mb'
 */

app.get('/api/state001mb', (req, res) => {
    State001mb.find(function(err, state001mbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting state001mb.',
                error: err
            });
        }

        return res.json(state001mbs);
    });
});

/**
 * @swagger
 * /api/state001mb/{id}:
 *   get:
 *     tags: [state001mb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/state001mb'
 */

app.get('/api/state001mb/:id', (req, res) => {
    var id = req.params.id;
    State001mb.findOne({ _id: id }, function(err, state001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting state001mb.',
                error: err
            });
        }

        if (!state001mb) {
            return res.status(404).json({
                message: 'No such state001mb'
            });
        }

        return res.json(state001mb);
    });
});

/**
 * @swagger
 * /api/state001mb/state:
 *   post:
 *    tags: [state001mb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/state001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/state001mb/state', (req, res) => {
    const state001mb = new State001mb();
    state001mb.countryid = req.body.countryid.id;
    state001mb.stateid = req.body.stateid;
    state001mb.statename = req.body.statename;
    state001mb.statedesc = req.body.statedesc;
    state001mb.status = req.body.status;
    state001mb.inserteduser = req.body.inserteduser;
    state001mb.inserteddatetime = req.body.inserteddatetime;
    state001mb.updateduser = req.body.updateduser;
    state001mb.updateddatetime = req.body.updateddatetime;
    state001mb.save()
        .then((result) => {
            Country001mb.findOne({ _id: state001mb.countryid }, (err, user) => {
                if (user) {
                    user.stateid.push(state001mb);
                    user.save();
                    res.json({ message: 'state created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
})


/**
 * @swagger
 * /api/state001mb/{id}:
 *   put:
 *    tags: [state001mb]
 *    summary: Put Method
 *    description: Retrieve the list of data
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID of the user to retrieve.
 *        schema:
 *           type: string
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                         $ref: '#/components/schemas/state001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/state001mb'
 */

app.put('/api/state001mb/:id', (req, res) => {
    var id = req.params.id;
    State001mb.findOne({ _id: id }, function(err, state001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting state001mb',
                error: err
            });
        }

        if (!state001mb) {
            return res.status(404).json({
                message: 'No such state001mb'
            });
        }
        state001mb.countryid = req.body.countryid.id ? req.body.countryid.id : state001mb.countryid;
        state001mb.stateid = req.body.stateid ? req.body.stateid : state001mb.stateid;
        state001mb.statename = req.body.statename ? req.body.statename : state001mb.statename;
        state001mb.statedesc = req.body.statedesc ? req.body.statedesc : state001mb.statedesc;
        state001mb.status = req.body.status ? req.body.status : state001mb.status;
        state001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : state001mb.inserteduser;
        state001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : state001mb.inserteddatetime;
        state001mb.updateduser = req.body.updateduser ? req.body.updateduser : state001mb.updateduser;
        state001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : state001mb.updateddatetime;

        state001mb.save(function(err, state001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating state001mb.',
                    error: err
                });
            }

            return res.json(state001mb);
        });
    });
});



/**
 * @swagger
 * /api/state001mb/{id}:
 *   delete:
 *    tags: [state001mb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/state001mb/:id', (req, res) => {
    var id = req.params.id;
    State001mb.findByIdAndRemove(id, function(err, state001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the state001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});

// ********************** city schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      city001mb:
 *            type: object
 *            properties:
 *             cityid:
 *                type: number
 *             cityname:
 *                 type: string  
 *             citydesc:
 *                 type: string 
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string
 *             stateid:
 *                type: object 
 *                properties:
 *                   id:
 *                    type: string    
 */


// ********************** city001mb get method****************//
/**
 * @swagger
 * /api/city001mb:
 *   get:
 *     tags: [city001mb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/city001mb'
 */

app.get('/api/city001mb', (req, res) => {
    City001mb.find(function(err, city001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting city001mb.',
                error: err
            });
        }

        return res.json(city001mb);
    });
});

/**
 * @swagger
 * /api/city001mb/{id}:
 *   get:
 *     tags: [city001mb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/city001mb'
 */

app.get('/api/city001mb/:id', (req, res) => {
    var id = req.params.id;
    City001mb.findOne({ _id: id }, function(err, city001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting city001mb.',
                error: err
            });
        }

        if (!city001mb) {
            return res.status(404).json({
                message: 'No such city001mb'
            });
        }

        return res.json(city001mb);
    });
});

/**
 * @swagger
 * /api/city001mb/city:
 *   post:
 *    tags: [city001mb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/city001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/city001mb/city', (req, res) => {
    const city001mb = new City001mb();
    city001mb.stateid = req.body.stateid.id;
    city001mb.cityid = req.body.cityid;
    city001mb.cityname = req.body.cityname;
    city001mb.citydesc = req.body.citydesc;
    city001mb.status = req.body.status;
    city001mb.inserteduser = req.body.inserteduser;
    city001mb.inserteddatetime = req.body.inserteddatetime;
    city001mb.updateddatetime = req.body.updateddatetime;
    city001mb.updateduser = req.body.updateduser;

    city001mb.save()
        .then((result) => {
            State001mb.findOne({ _id: city001mb.stateid }, (err, user) => {
                if (user) {
                    user.cityid.push(city001mb);
                    user.save();
                    res.json({ message: 'city created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
})


/**
 * @swagger
 * /api/city001mb/{id}:
 *   put:
 *    tags: [city001mb]
 *    summary: Put Method
 *    description: Retrieve the list of data
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID of the user to retrieve.
 *        schema:
 *           type: string
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                         $ref: '#/components/schemas/city001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/city001mb'
 */

app.put('/api/city001mb/:id', (req, res) => {
    var id = req.params.id;
    City001mb.findOne({ _id: id }, function(err, city001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting city001mb',
                error: err
            });
        }

        if (!city001mb) {
            return res.status(404).json({
                message: 'No such city001mb'
            });
        }
        city001mb.stateid = req.body.stateid.id ? req.body.stateid.id : city001mb.stateid;
        city001mb.cityid = req.body.cityid ? req.body.cityid : city001mb.cityid;
        city001mb.cityname = req.body.cityname ? req.body.cityname : city001mb.cityname;
        city001mb.citydesc = req.body.citydesc ? req.body.citydesc : city001mb.citydesc;
        city001mb.status = req.body.status ? req.body.status : city001mb.status;
        city001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : city001mb.inserteduser;
        city001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : city001mb.inserteddatetime;
        city001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : city001mb.updateddatetime;
        city001mb.updateduser = req.body.updateduser ? req.body.updateduser : city001mb.updateduser;

        city001mb.save(function(err, country001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating country001mb.',
                    error: err
                });
            }

            return res.json(city001mb);
        });
    });
});



/**
 * @swagger
 * /api/city001mb/{id}:
 *   delete:
 *    tags: [city001mb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/city001mb/:id', (req, res) => {
    var id = req.params.id;
    City001mb.findByIdAndRemove(id, function(err, city001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the city001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});


// ********************** photo001wb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      photo001wb:
 *            type: object
 *            properties:
 *             fieldname:
 *                type: string
 *                description: (value is retrieve from content.No need to add value here)
 *             filename:
 *                 type: string
 *                 description: (value is retrieve from content.No need to add value here) 
 *             originalname:
 *                 type: string
 *                 description: (value is retrieve from content.No need to add value here)
 *             content:
 *                 type: file
 *                 format: binary 
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string
 *             contentid:
 *                type: string   
 *                format: uuid
 */
// ********************** photo001wb get method****************//
/**
 * @swagger
 * /api/photo001wb:
 *   get:
 *     tags: [photo001wb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/photo001wb'
 */

app.get('/api/photo001wb', (req, res) => {
    Photo001wb.find({ id: req.params.id }, function(err, results) {
        if (err) {
            res.send(`error: ${err}`);
        } else {
            res.send(results);
        }
    });
});

/**
 * @swagger
 * /api/photo001wb/{id}:
 *   get:
 *     tags: [photo001wb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/photo001wb'
 */

app.get('/api/photo001wb/:id', (req, res) => {
    var id = req.params.id;
    Photo001wb.findOne({ _id: id }, function(err, photo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting photo001wb.',
                error: err
            });
        }

        if (!photo001wb) {
            return res.status(404).json({
                message: 'No such photo001wb'
            });
        }

        return res.json(photo001wb);
    });
});

/**
 * @swagger
 * /api/photo001wb/photo:
 *   post:
 *    tags: [photo001wb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             multipart/form-data:
 *                       schema:
 *                          $ref: '#/components/schemas/photo001wb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/photo001wb/photo', [upload.single("content")], (req, res) => {
    const photo001wb = new Photo001wb();
    photo001wb.content = req.file.path;
    photo001wb.fieldname = req.file.fieldname;
    photo001wb.originalname = req.file.originalname;
    photo001wb.filename = req.file.filename;
    photo001wb.status = req.body.status;
    photo001wb.contentid = req.body.contentid;
    photo001wb.inserteduser = req.body.inserteduser;
    photo001wb.inserteddatetime = req.body.inserteddatetime;
    photo001wb.updateduser = req.body.updateduser;
    photo001wb.updateddatetime = req.body.updateddatetime;
    photo001wb.save()
        .then((result) => {
            Contentmaster001mb.findOne({ _id: photo001wb.contentid }, (err, user) => {
                if (user) {
                    user.photo.push(photo001wb);
                    user.save();
                    res.json({ message: 'photo created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
})


/**
 * @swagger
 * /api/photo001wb/{id}:
 *   put:
 *    tags: [photo001wb]
 *    summary: Put Method
 *    description: Retrieve the list of data
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID of the user to retrieve.
 *        schema:
 *           type: string
 *    requestBody:
 *         required: true
 *         content:
 *             multipart/form-data:
 *                       schema:
 *                         $ref: '#/components/schemas/photo001wb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/photo001wb'
 */

app.put('/api/photo001wb/:id', [upload.single("content")], (req, res) => {
    var id = req.params.id;
    Photo001wb.findOne({ _id: id }, function(err, photo001wb) {
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
        photo001wb.contentid = req.body.contentid ? req.body.contentid : photo001wb.contentid;
        photo001wb.content = req.file.path ? req.file.path : photo001wb.content;
        photo001wb.fieldname = req.file.fieldname ? req.file.fieldname : photo001wb.fieldname;
        photo001wb.filename = req.file.filename ? req.file.filename : photo001wb.filename;
        photo001wb.originalname = req.file.originalname ? req.file.originalname : photo001wb.originalname;
        photo001wb.status = req.body.status ? req.body.status : photo001wb.status;
        photo001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : photo001wb.inserteduser;
        photo001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : photo001wb.inserteddatetime;
        photo001wb.updateduser = req.body.updateduser ? req.body.updateduser : photo001wb.updateduser;
        photo001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : photo001wb.updateddatetime;

        photo001wb.save(function(err, photo001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating photo001wb.',
                    error: err
                });
            }

            return res.json(photo001wb);
        });
    });
});

/**
 * @swagger
 * /api/photo001wb/{id}:
 *   delete:
 *    tags: [photo001wb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/photo001wb/:id', (req, res) => {
    var id = req.params.id;
    Photo001wb.findByIdAndRemove(id, function(err, photo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the photo001wb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});



// ********************** video001wb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      video001wb:
 *            type: object
 *            properties:
 *             fieldname:
 *                type: string
 *                description: (value is retrieve from content.No need to add value here)
 *             filename:
 *                 type: string
 *                 description: (value is retrieve from content.No need to add value here)  
 *             originalname:
 *                 type: string
 *                 description: (value is retrieve from content.No need to add value here)
 *             content:
 *                 type: file
 *                 format: binary 
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string
 *             contentid:
 *                type: string 
 *                format: uuid
 */
// ********************** video001wb get method****************//
/**
 * @swagger
 * /api/video001wb:
 *   get:
 *     tags: [video001wb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/video001wb'
 */

app.get('/api/video001wb', (req, res) => {
    Video001wb.find(function(err, video001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting video001wb.',
                error: err
            });
        }

        return res.json(video001wb);
    });
});

/**
 * @swagger
 * /api/video001wb/{id}:
 *   get:
 *     tags: [video001wb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/video001wb'
 */

app.get('/api/video001wb/:id', (req, res) => {
    var id = req.params.id;
    Video001wb.findOne({ _id: id }, function(err, video001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting video001wb.',
                error: err
            });
        }

        if (!video001wb) {
            return res.status(404).json({
                message: 'No such video001wb'
            });
        }

        return res.json(video001wb);
    });
});

/**
 * @swagger
 * /api/video001wb/video:
 *   post:
 *    tags: [video001wb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             multipart/form-data:
 *                       schema:
 *                          $ref: '#/components/schemas/video001wb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/video001wb/video', [videoUpload.single("content")], (req, res) => {
    const video001wb = new Video001wb();
    video001wb.contentid = req.body.contentid;
    video001wb.content = req.file.path;
    video001wb.fieldname = req.file.fieldname;
    video001wb.originalname = req.file.originalname;
    video001wb.filename = req.file.filename;
    video001wb.status = req.body.status;
    video001wb.inserteduser = req.body.inserteduser;
    video001wb.inserteddatetime = req.body.inserteddatetime;
    video001wb.updateduser = req.body.updateduser;
    video001wb.updateddatetime = req.body.updateddatetime;

    video001wb.save()
        .then((result) => {
            Contentmaster001mb.findOne({ _id: video001wb.contentid }, (err, user) => {
                if (user) {
                    user.video.push(video001wb);
                    user.save();
                    res.json({ message: 'Video created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
})


/**
 * @swagger
 * /api/video001wb/{id}:
 *   put:
 *    tags: [video001wb]
 *    summary: Put Method
 *    description: Retrieve the list of data
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID of the user to retrieve.
 *        schema:
 *           type: string
 *    requestBody:
 *         required: true
 *         content:
 *             multipart/form-data:
 *                       schema:
 *                         $ref: '#/components/schemas/video001wb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/video001wb'
 */

app.put('/api/video001wb/:id', [videoUpload.single("content")], (req, res) => {
    var id = req.params.id;

    Video001wb.findOne({ _id: id }, function(err, video001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting video001wb',
                error: err
            });
        }

        if (!video001wb) {
            return res.status(404).json({
                message: 'No such video001wb'
            });
        }

        video001wb.contentid = req.body.contentid ? req.body.contentid : video001wb.contentid;
        video001wb.fieldname = req.file.fieldname ? req.file.fieldname : video001wb.fieldname;
        video001wb.filename = req.file.filename ? req.file.filename : video001wb.filename;
        video001wb.originalname = req.file.originalname ? req.file.originalname : video001wb.originalname;
        video001wb.status = req.body.status ? req.body.status : video001wb.status;
        video001wb.content = req.file.path ? req.file.path : video001wb.content;
        video001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : video001wb.inserteduser;
        video001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : video001wb.inserteddatetime;
        video001wb.updateduser = req.body.updateduser ? req.body.updateduser : video001wb.updateduser;
        video001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : video001wb.updateddatetime;

        video001wb.save(function(err, video001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating video001wb.',
                    error: err
                });
            }

            return res.json(video001wb);
        });
    });
});


/**
 * @swagger
 * /api/video001wb/{id}:
 *   delete:
 *    tags: [video001wb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/video001wb/:id', (req, res) => {
    var id = req.params.id;
    Video001wb.findByIdAndRemove(id, function(err, video001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the video001wb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});


// ********************** audio001wb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      audio001wb:
 *            type: object
 *            properties:
 *             fieldname:
 *                type: string
 *                description: (value is retrieve from content.No need to add value here)
 *             filename:
 *                 type: string  
 *                 description: (value is retrieve from content.No need to add value here)
 *             originalname:
 *                 type: string
 *                 description: (value is retrieve from content.No need to add value here)
 *             content:
 *                 type: file
 *                 format: binary 
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string
 *             contentid:
 *                type: string 
 *                format: uuid
 */
// ********************** audio001wb get method****************//
/**
 * @swagger
 * /api/audio001wb:
 *   get:
 *     tags: [audio001wb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/audio001wb'
 */

app.get('/api/audio001wb', (req, res) => {
    Audio001wb.find(function(err, audio001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting audio001wb.',
                error: err
            });
        }

        return res.json(audio001wb);
    });
});

/**
 * @swagger
 * /api/audio001wb/{id}:
 *   get:
 *     tags: [audio001wb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/audio001wb'
 */

app.get('/api/audio001wb/:id', (req, res) => {
    var id = req.params.id;
    Audio001wb.findOne({ _id: id }, function(err, audio001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting audio001wb.',
                error: err
            });
        }

        if (!audio001wb) {
            return res.status(404).json({
                message: 'No such audio001wb'
            });
        }

        return res.json(audio001wb);
    });
});

/**
 * @swagger
 * /api/audio001wb/audio:
 *   post:
 *    tags: [audio001wb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             multipart/form-data:
 *                       schema:
 *                          $ref: '#/components/schemas/audio001wb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/audio001wb/audio', [audio.single("content")], (req, res) => {
    const audio001wb = new Audio001wb();
    audio001wb.content = req.file.path;
    audio001wb.fieldname = req.file.fieldname;
    audio001wb.originalname = req.file.originalname;
    audio001wb.filename = req.file.filename;
    audio001wb.status = req.body.status;
    audio001wb.contentid = req.body.contentid;
    audio001wb.inserteduser = req.body.inserteduser;
    audio001wb.inserteddatetime = req.body.inserteddatetime;
    audio001wb.updateduser = req.body.updateduser;
    audio001wb.updateddatetime = req.body.updateddatetime;
    audio001wb.save()
        .then((result) => {
            Contentmaster001mb.findOne({ _id: audio001wb.contentid }, (err, user) => {
                if (user) {
                    user.audio.push(audio001wb);
                    user.save();
                    res.json({ message: 'Audio created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
})


/**
 * @swagger
 * /api/audio001wb/{id}:
 *   put:
 *    tags: [audio001wb]
 *    summary: Put Method
 *    description: Retrieve the list of data
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID of the user to retrieve.
 *        schema:
 *           type: string
 *    requestBody:
 *         required: true
 *         content:
 *             multipart/form-data:
 *                       schema:
 *                         $ref: '#/components/schemas/audio001wb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/audio001wb'
 */

app.put('/api/audio001wb/:id', [audio.single("content")], (req, res) => {
    var id = req.params.id;
    Audio001wb.findOne({ _id: id }, function(err, audio001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting audio001wb',
                error: err
            });
        }

        if (!audio001wb) {
            return res.status(404).json({
                message: 'No such audio001wb'
            });
        }

        audio001wb.contentid = req.body.contentid ? req.body.contentid : audio001wb.contentid;
        audio001wb.fieldname = req.file.fieldname ? req.file.fieldname : audio001wb.fieldname;
        audio001wb.filename = req.file.filename ? req.file.filename : audio001wb.filename;
        audio001wb.originalname = req.file.originalname ? req.file.originalname : audio001wb.originalname;
        audio001wb.status = req.body.status ? req.body.status : audio001wb.status;
        audio001wb.content = req.file.path ? req.file.path : audio001wb.content;
        audio001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : audio001wb.inserteduser;
        audio001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : audio001wb.inserteddatetime;
        audio001wb.updateduser = req.body.updateduser ? req.body.updateduser : audio001wb.updateduser;
        audio001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : audio001wb.updateddatetime;

        audio001wb.save(function(err, audio001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating audio001wb.',
                    error: err
                });
            }

            return res.json(audio001wb);
        });
    });
});
/**
 * @swagger
 * /api/audio001wb/{id}:
 *   delete:
 *    tags: [audio001wb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/audio001wb/:id', (req, res) => {
    var id = req.params.id;
    Audio001wb.findByIdAndRemove(id, function(err, audio001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the audio001wb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});



// ********************** contentmaster001mb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      contentmaster001mb:
 *            type: object
 *            properties:
 *             contentid:
 *                type: number
 *             name:
 *                 type: string  
 *             description:
 *                 type: string
 *             size:
 *                 type: string 
 *             quality:
 *                 type: string
 *             format:
 *                 type: string
 *             discountflag:
 *                 type: boolean
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string
 *             subscid:
 *                type: object 
 *                properties:
 *                   id:
 *                    type: string   
 *             audio:
 *                type: array 
 *             video:
 *                type: array 
 *             photo:
 *                type: array 
 */


// ********************** contentmaster001mb get method****************//
/**
 * @swagger
 * /api/contentmaster001mb:
 *   get:
 *     tags: [contentmaster001mb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/contentmaster001mb'
 */

app.get('/api/contentmaster001mb', (req, res) => {
    Contentmaster001mb.find(function(err, contentmaster001mbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting contentmaster001mb.',
                error: err
            });
        }

        return res.json(contentmaster001mbs);
    });
});

/**
 * @swagger
 * /api/contentmaster001mb/{id}:
 *   get:
 *     tags: [contentmaster001mb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/contentmaster001mb'
 */

app.get('/api/contentmaster001mb/:id', (req, res) => {
    var id = req.params.id;
    Contentmaster001mb.findOne({ _id: id }, function(err, contentmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting contentmaster001mb.',
                error: err
            });
        }

        if (!contentmaster001mb) {
            return res.status(404).json({
                message: 'No such contentmaster001mb'
            });
        }

        return res.json(contentmaster001mb);
    });
});

/**
 * @swagger
 * /api/contentmaster001mb/master:
 *   post:
 *    tags: [contentmaster001mb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/contentmaster001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/contentmaster001mb/master', (req, res) => {
    const contentmaster001mb = new Contentmaster001mb()
    contentmaster001mb.contentid = req.body.contentid;
    contentmaster001mb.name = req.body.name;
    contentmaster001mb.description = req.body.description;
    contentmaster001mb.size = req.body.size;
    contentmaster001mb.quality = req.body.quality;
    contentmaster001mb.format = req.body.format;
    contentmaster001mb.status = req.body.status;
    contentmaster001mb.discountflag = req.body.discountflag;
    contentmaster001mb.inserteduser = req.body.inserteduser;
    contentmaster001mb.inserteddatetime = req.body.inserteddatetime;
    contentmaster001mb.updateduser = req.body.updateduser;
    contentmaster001mb.updateddatetime = req.body.updateddatetime;
    contentmaster001mb.subscid = req.body.subscid.id;
    contentmaster001mb.save(function(err, contentmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating contentmaster001mb',
                error: err
            });
        }
        return res.status(201).json('Contentmaster001mb Created! ');
    });
})


/**
 * @swagger
 * /api/contentmaster001mb/{id}:
 *   put:
 *    tags: [contentmaster001mb]
 *    summary: Put Method
 *    description: Retrieve the list of data
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID of the user to retrieve.
 *        schema:
 *           type: string
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                         $ref: '#/components/schemas/contentmaster001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/contentmaster001mb'
 */

app.put('/api/contentmaster001mb/:id', (req, res) => {
    var id = req.params.id;
    Contentmaster001mb.findOne({ _id: id }, function(err, contentmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting contentmaster001mb',
                error: err
            });
        }

        if (!contentmaster001mb) {
            return res.status(404).json({
                message: 'No such contentmaster001mb'
            });
        }

        contentmaster001mb.subscid = req.body.subscid.id ? req.body.subscid.id : contentmaster001mb.subscid;
        contentmaster001mb.contentid = req.body.contentid ? req.body.contentid : contentmaster001mb.contentid;
        contentmaster001mb.name = req.body.name ? req.body.name : contentmaster001mb.name;
        contentmaster001mb.description = req.body.description ? req.body.description : contentmaster001mb.description;
        contentmaster001mb.size = req.body.size ? req.body.size : contentmaster001mb.size;
        contentmaster001mb.quality = req.body.quality ? req.body.quality : contentmaster001mb.quality;
        contentmaster001mb.format = req.body.format ? req.body.format : contentmaster001mb.format;
        contentmaster001mb.status = req.body.status ? req.body.status : contentmaster001mb.status;
        contentmaster001mb.discountflag = req.body.discountflag ? req.body.discountflag : contentmaster001mb.discountflag;
        contentmaster001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : contentmaster001mb.inserteduser;
        contentmaster001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : contentmaster001mb.inserteddatetime;
        contentmaster001mb.updateduser = req.body.updateduser ? req.body.updateduser : contentmaster001mb.updateduser;
        contentmaster001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : contentmaster001mb.updateddatetime;

        contentmaster001mb.save(function(err, contentmaster001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating contentmaster001mb.',
                    error: err
                });
            }

            return res.json(contentmaster001mb);
        });
    });
});
/**
 * @swagger
 * /api/contentmaster001mb/{id}:
 *   delete:
 *    tags: [contentmaster001mb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/contentmaster001mb/:id', (req, res) => {
    var id = req.params.id;
    Contentmaster001mb.findByIdAndRemove(id, function(err, contentmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the contentmaster001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});



// ********************** categorydetails001mb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      categorydetails001mb:
 *            type: object
 *            properties:
 *             catcode:
 *                type: number
 *             catname:
 *                 type: string  
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string
 *             subscid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string      
 */
// ********************** categorydetails001mb get method****************//
/**
 * @swagger
 * /api/categorydetails001mb:
 *   get:
 *     tags: [categorydetails001mb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/categorydetails001mb'
 */

app.get('/api/categorydetails001mb', (req, res) => {
    Categorydetails001mb.find(function(err, categorydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting categorydetails001mb.',
                error: err
            });
        }

        return res.json(categorydetails001mb);
    });
});

/**
 * @swagger
 * /api/categorydetails001mb/{id}:
 *   get:
 *     tags: [categorydetails001mb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/categorydetails001mb'
 */

app.get('/api/categorydetails001mb/:id', (req, res) => {
    var id = req.params.id;
    Categorydetails001mb.findOne({ _id: id }, function(err, categorydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting categorydetails001mb.',
                error: err
            });
        }

        if (!categorydetails001mb) {
            return res.status(404).json({
                message: 'No such categorydetails001mb'
            });
        }

        return res.json(categorydetails001mb);
    });
});

/**
 * @swagger
 * /api/categorydetails001mb/category:
 *   post:
 *    tags: [categorydetails001mb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/categorydetails001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/categorydetails001mb/category', (req, res) => {
    const categorydetails001mb = new Categorydetails001mb()
    categorydetails001mb.subscid = req.body.subscid.id;
    categorydetails001mb.catcode = req.body.catcode;
    categorydetails001mb.catname = req.body.catname;
    categorydetails001mb.status = req.body.status;
    categorydetails001mb.inserteduser = req.body.inserteduser;
    categorydetails001mb.inserteddatetime = req.body.inserteddatetime;
    categorydetails001mb.updateduser = req.body.updateduser;
    categorydetails001mb.updateddatetime = req.body.updateddatetime;
    categorydetails001mb.save()
        .then((result) => {
            Subscriberdetails001wb.findOne({ _id: categorydetails001mb.subscid }, (err, user) => {
                if (user) {
                    user.categoryid.push(categorydetails001mb);
                    user.save();
                    res.json({ message: 'categorydetails created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
})


/**
 * @swagger
 * /api/categorydetails001mb/{id}:
 *   put:
 *    tags: [categorydetails001mb]
 *    summary: Put Method
 *    description: Retrieve the list of data
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID of the user to retrieve.
 *        schema:
 *           type: string
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                         $ref: '#/components/schemas/categorydetails001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/categorydetails001mb'
 */

app.put('/api/categorydetails001mb/:id', (req, res) => {
    var id = req.params.id;
    Categorydetails001mb.findOne({ _id: id }, function(err, categorydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting categorydetails001mb',
                error: err
            });
        }

        if (!categorydetails001mb) {
            return res.status(404).json({
                message: 'No such categorydetails001mb'
            });
        }
        categorydetails001mb.subscid = req.body.subscid.id ? req.body.subscid.id : categorydetails001mb.catcode;
        categorydetails001mb.catcode = req.body.catcode ? req.body.catcode : categorydetails001mb.catcode;
        categorydetails001mb.catname = req.body.catname ? req.body.catname : categorydetails001mb.catname;
        categorydetails001mb.status = req.body.status ? req.body.status : categorydetails001mb.status;
        categorydetails001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : categorydetails001mb.inserteduser;
        categorydetails001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : categorydetails001mb.inserteddatetime;
        categorydetails001mb.updateduser = req.body.updateduser ? req.body.updateduser : categorydetails001mb.updateduser;
        categorydetails001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : categorydetails001mb.updateddatetime;

        categorydetails001mb.save(function(err, categorydetails001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating categorydetails001mb.',
                    error: err
                });
            }

            return res.json(categorydetails001mb);
        });
    });
});
/**
 * @swagger
 * /api/categorydetails001mb/{id}:
 *   delete:
 *    tags: [categorydetails001mb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/categorydetails001mb/:id', (req, res) => {
    var id = req.params.id;
    Categorydetails001mb.findByIdAndRemove(id, function(err, categorydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the categorydetails001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});


// ********************** companydetails001mb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      companydetails001mb:
 *            type: object
 *            properties:
 *             phonenumber:
 *                type: number
 *             companycode:
 *                 type: string
 *             companyname:
 *                 type: string    
 *             address:
 *                 type: string   
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string
 *             subscid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string 
 *             regionalid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string      
 */
// ********************** companydetails001mb get method****************//
/**
 * @swagger
 * /api/companydetails001mb:
 *   get:
 *     tags: [companydetails001mb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/companydetails001mb'
 */

app.get('/api/companydetails001mb', (req, res) => {
    Companydetails001mb.find(function(err, companydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting companydetails001mb.',
                error: err
            });
        }

        return res.json(companydetails001mb);
    });
});

/**
 * @swagger
 * /api/companydetails001mb/{id}:
 *   get:
 *     tags: [companydetails001mb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/companydetails001mb'
 */

app.get('/api/companydetails001mb/:id', (req, res) => {
    var id = req.params.id;
    Companydetails001mb.findOne({ _id: id }, function(err, companydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting companydetails001mb.',
                error: err
            });
        }

        if (!companydetails001mb) {
            return res.status(404).json({
                message: 'No such companydetails001mb'
            });
        }

        return res.json(companydetails001mb);
    });
});

/**
 * @swagger
 * /api/companydetails001mb/company:
 *   post:
 *    tags: [companydetails001mb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/companydetails001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/companydetails001mb/company', (req, res) => {
        const companydetails001mb = new Companydetails001mb();
        companydetails001mb.subscid = req.body.subscid.id;
        companydetails001mb.companycode = req.body.companycode;
        companydetails001mb.companyname = req.body.companyname;
        companydetails001mb.address = req.body.address;
        companydetails001mb.phonenumber = req.body.phonenumber;
        companydetails001mb.regionalid = req.body.regionalid.id;
        companydetails001mb.status = req.body.status;
        companydetails001mb.inserteduser = req.body.inserteduser;
        companydetails001mb.inserteddatetime = req.body.inserteddatetime;
        companydetails001mb.updateduser = req.body.updateduser;
        companydetails001mb.updateddatetime = req.body.updateddatetime;
        companydetails001mb.save()
            .then((result) => {
                Subscriberdetails001wb.findOne({ _id: companydetails001mb.subscid }, (err, user) => {
                    if (user) {
                        user.companycode.push(companydetails001mb);
                        user.save();
                        res.json({ message: 'companydetails created!' });
                    }
                });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    })
    /**
     * @swagger
     * /api/companydetails001mb/{id}:
     *   put:
     *    tags: [companydetails001mb]
     *    summary: Put Method
     *    description: Retrieve the list of data
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: Numeric ID of the user to retrieve.
     *        schema:
     *           type: string
     *    requestBody:
     *         required: true
     *         content:
     *             application/json:
     *                       schema:
     *                         $ref: '#/components/schemas/companydetails001mb'
     *    responses:
     *       200:
     *         description: Sucess
     *       500:
     *         description: failed
     *         content:
     *             application/json:
     *                       schema:
     *                          type: array
     *                          items:
     *                             $ref: '#/components/schemas/companydetails001mb'
     */

app.put('/api/companydetails001mb/:id', (req, res) => {
    var id = req.params.id;
    Companydetails001mb.findOne({ _id: id }, function(err, companydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting companydetails001mb',
                error: err
            });
        }

        if (!companydetails001mb) {
            return res.status(404).json({
                message: 'No such companydetails001mb'
            });
        }
        companydetails001mb.subscid = req.body.subscid.id ? req.body.subscid.id : companydetails001mb.subscid;
        companydetails001mb.companycode = req.body.companycode ? req.body.companycode : companydetails001mb.companycode;
        companydetails001mb.companyname = req.body.companyname ? req.body.companyname : companydetails001mb.companyname;
        companydetails001mb.address = req.body.address ? req.body.address : companydetails001mb.address;
        companydetails001mb.phonenumber = req.body.phonenumber ? req.body.phonenumber : companydetails001mb.phonenumber;
        companydetails001mb.regionalid = req.body.regionalid.id ? req.body.regionalid.id : companydetails001mb.regionalid;
        companydetails001mb.status = req.body.status ? req.body.status : companydetails001mb.status;
        companydetails001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : companydetails001mb.inserteduser;
        companydetails001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : companydetails001mb.inserteddatetime;
        companydetails001mb.updateduser = req.body.updateduser ? req.body.updateduser : companydetails001mb.updateduser;
        companydetails001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : companydetails001mb.updateddatetime;

        companydetails001mb.save(function(err, companydetails001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating companydetails001mb.',
                    error: err
                });
            }

            return res.json(companydetails001mb);
        });
    });
});
/**
 * @swagger
 * /api/companydetails001mb/{id}:
 *   delete:
 *    tags: [companydetails001mb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/companydetails001mb/:id', (req, res) => {
    var id = req.params.id;
    Companydetails001mb.findByIdAndRemove(id, function(err, companydetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the companydetails001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});



// ********************** language001mb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      language001mb:
 *            type: object
 *            properties:
 *             languageid:
 *                type: number
 *             languagename:
 *                 type: string
 *             languagedesc:
 *                 type: string      
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string
 *             subscid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string    
 */

// ********************** language001mb get method****************//
/**
 * @swagger
 * /api/language001mb:
 *   get:
 *     tags: [language001mb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/language001mb'
 */

app.get('/api/language001mb', (req, res) => {
    Language001mb.find(function(err, language001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting language001mb.',
                error: err
            });
        }

        return res.json(language001mb);
    });
});

/**
 * @swagger
 * /api/language001mb/{id}:
 *   get:
 *     tags: [language001mb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/language001mb'
 */

app.get('/api/language001mb/:id', (req, res) => {
    var id = req.params.id;
    Language001mb.findOne({ _id: id }, function(err, language001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting language001mb.',
                error: err
            });
        }

        if (!language001mb) {
            return res.status(404).json({
                message: 'No such language001mb'
            });
        }

        return res.json(language001mb);
    });
});

/**
 * @swagger
 * /api/language001mb/language:
 *   post:
 *    tags: [language001mb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/language001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/language001mb/language', (req, res) => {
        const language001mb = new Language001mb()
        language001mb.subscid = req.body.subscid.id;
        language001mb.languageid = req.body.languageid;
        language001mb.languagename = req.body.languagename;
        language001mb.languagedesc = req.body.languagedesc;
        language001mb.status = req.body.status;
        language001mb.inserteduser = req.body.inserteduser;
        language001mb.inserteddatetime = req.body.inserteddatetime;
        language001mb.updateduser = req.body.updateduser;
        language001mb.updateddatetime = req.body.updateddatetime;
        language001mb.save()
            .then((result) => {
                Subscriberdetails001wb.findOne({ _id: language001mb.subscid }, (err, user) => {
                    if (user) {
                        user.languageid.push(language001mb);
                        user.save();
                        res.json({ message: 'language created!' });
                    }
                });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    })
    /**
     * @swagger
     * /api/language001mb/{id}:
     *   put:
     *    tags: [language001mb]
     *    summary: Put Method
     *    description: Retrieve the list of data
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: Numeric ID of the user to retrieve.
     *        schema:
     *           type: string
     *    requestBody:
     *         required: true
     *         content:
     *             application/json:
     *                       schema:
     *                         $ref: '#/components/schemas/language001mb'
     *    responses:
     *       200:
     *         description: Sucess
     *       500:
     *         description: failed
     *         content:
     *             application/json:
     *                       schema:
     *                          type: array
     *                          items:
     *                             $ref: '#/components/schemas/language001mb'
     */

app.put('/api/language001mb/:id', (req, res) => {
    var id = req.params.id;
    Language001mb.findOne({ _id: id }, function(err, language001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting language001mb',
                error: err
            });
        }

        if (!language001mb) {
            return res.status(404).json({
                message: 'No such language001mb'
            });
        }
        language001mb.subscid = req.body.subscid.id ? req.body.subscid.id : language001mb.subscid;
        language001mb.languageid = req.body.languageid ? req.body.languageid : language001mb.languageid;
        language001mb.languagename = req.body.languagename ? req.body.languagename : language001mb.languagename;
        language001mb.languagedesc = req.body.languagedesc ? req.body.languagedesc : language001mb.languagedesc;
        language001mb.status = req.body.status ? req.body.status : language001mb.status;
        language001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : language001mb.inserteduser;
        language001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : language001mb.inserteddatetime;
        language001mb.updateduser = req.body.updateduser ? req.body.updateduser : language001mb.updateduser;
        language001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : language001mb.updateddatetime;

        language001mb.save(function(err, language001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating language001mb.',
                    error: err
                });
            }

            return res.json(language001mb);
        });
    });
});
/**
 * @swagger
 * /api/language001mb/{id}:
 *   delete:
 *    tags: [language001mb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/language001mb/:id', (req, res) => {
    var id = req.params.id;
    Language001mb.findByIdAndRemove(id, function(err, language001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the language001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});




// ********************** regionaldetails001mb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      regionaldetails001mb:
 *            type: object
 *            properties:
 *             regionalid:
 *                type: number
 *             regionalname:
 *                 type: string
 *             regionaldesc:
 *                 type: string      
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string
 *             subscid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string    
 */

// ********************** regionaldetails001mb get method****************//
/**
 * @swagger
 * /api/regionaldetails001mb:
 *   get:
 *     tags: [regionaldetails001mb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/regionaldetails001mb'
 */

app.get('/api/regionaldetails001mb', (req, res) => {
    Regionaldetails001mb.find(function(err, regionaldetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting regionaldetails001mb.',
                error: err
            });
        }

        return res.json(regionaldetails001mb);
    });
});

/**
 * @swagger
 * /api/regionaldetails001mb/{id}:
 *   get:
 *     tags: [regionaldetails001mb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/regionaldetails001mb'
 */

app.get('/api/regionaldetails001mb/:id', (req, res) => {
    var id = req.params.id;
    Regionaldetails001mb.findOne({ _id: id }, function(err, regionaldetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting regionaldetails001mb.',
                error: err
            });
        }

        if (!regionaldetails001mb) {
            return res.status(404).json({
                message: 'No such regionaldetails001mb'
            });
        }

        return res.json(regionaldetails001mb);
    });
});

/**
 * @swagger
 * /api/regionaldetails001mb/regional:
 *   post:
 *    tags: [regionaldetails001mb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/regionaldetails001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/regionaldetails001mb/regional', (req, res) => {
        const regionaldetails001mb = new Regionaldetails001mb();
        regionaldetails001mb.subscid = req.body.subscid.id;
        regionaldetails001mb.regionalid = req.body.regionalid;
        regionaldetails001mb.regionalname = req.body.regionalname;
        regionaldetails001mb.regionaldesc = req.body.regionaldesc;
        regionaldetails001mb.status = req.body.status;
        regionaldetails001mb.inserteduser = req.body.inserteduser;
        regionaldetails001mb.inserteddatetime = req.body.inserteddatetime;
        regionaldetails001mb.updateduser = req.body.updateduser;
        regionaldetails001mb.updateddatetime = req.body.updateddatetime;
        regionaldetails001mb.save()
            .then((result) => {
                Subscriberdetails001wb.findOne({ _id: regionaldetails001mb.subscid }, (err, user) => {
                    if (user) {
                        user.regionalid.push(regionaldetails001mb);
                        user.save();
                        res.json({ message: 'regionaldetails created!' });
                    }
                });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    })
    /**
     * @swagger
     * /api/regionaldetails001mb/{id}:
     *   put:
     *    tags: [regionaldetails001mb]
     *    summary: Put Method
     *    description: Retrieve the list of data
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: Numeric ID of the user to retrieve.
     *        schema:
     *           type: string
     *    requestBody:
     *         required: true
     *         content:
     *             application/json:
     *                       schema:
     *                         $ref: '#/components/schemas/regionaldetails001mb'
     *    responses:
     *       200:
     *         description: Sucess
     *       500:
     *         description: failed
     *         content:
     *             application/json:
     *                       schema:
     *                          type: array
     *                          items:
     *                             $ref: '#/components/schemas/regionaldetails001mb'
     */

app.put('/api/regionaldetails001mb/:id', (req, res) => {
    var id = req.params.id;
    Regionaldetails001mb.findOne({ _id: id }, function(err, regionaldetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting regionaldetails001mb',
                error: err
            });
        }

        if (!regionaldetails001mb) {
            return res.status(404).json({
                message: 'No such regionaldetails001mb'
            });
        }
        regionaldetails001mb.subscid = req.body.subscid.id ? req.body.subscid.id : regionaldetails001mb.subscid;
        regionaldetails001mb.regionalid = req.body.regionalid ? req.body.regionalid : regionaldetails001mb.regionalid;
        regionaldetails001mb.regionalname = req.body.regionalname ? req.body.regionalname : regionaldetails001mb.regionalname;
        regionaldetails001mb.regionaldesc = req.body.regionaldesc ? req.body.regionaldesc : regionaldetails001mb.regionaldesc;
        regionaldetails001mb.status = req.body.status ? req.body.status : regionaldetails001mb.status;
        regionaldetails001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : regionaldetails001mb.inserteduser;
        regionaldetails001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : regionaldetails001mb.inserteddatetime;
        regionaldetails001mb.updateduser = req.body.updateduser ? req.body.updateduser : regionaldetails001mb.updateduser;
        regionaldetails001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : regionaldetails001mb.updateddatetime;
        regionaldetails001mb.save(function(err, regionaldetails001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating regionaldetails001mb.',
                    error: err
                });
            }

            return res.json(regionaldetails001mb);
        });
    });
});
/**
 * @swagger
 * /api/regionaldetails001mb/{id}:
 *   delete:
 *    tags: [regionaldetails001mb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/regionaldetails001mb/:id', (req, res) => {
    var id = req.params.id;
    Regionaldetails001mb.findByIdAndRemove(id, function(err, regionaldetails001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the regionaldetails001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});


// ********************** login001mb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      login001mb:
 *            type: object
 *            properties:
 *             logintype:
 *                type: string
 *             password:
 *                 type: string     
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string   
 */

// ********************** login001mb get method****************//
/**
 * @swagger
 * /api/login001mb:
 *   get:
 *     tags: [login001mb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/login001mb'
 */

app.get('/api/login001mb', (req, res) => {
    Login001mb.find(function(err, login001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting login001mb.',
                error: err
            });
        }

        return res.json(login001mb);
    });
});

/**
 * @swagger
 * /api/login001mb/{id}:
 *   get:
 *     tags: [login001mb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/login001mb'
 */

app.get('/api/login001mb/:id', (req, res) => {
    var id = req.params.id;
    Login001mb.findOne({ _id: id }, function(err, login001mb) {
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
});

/**
 * @swagger
 * /api/login001mb/login:
 *   post:
 *    tags: [login001mb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/login001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/login001mb/login', (req, res) => {
        const login001mb = new Login001mb()
        login001mb.email = req.body.email;
        login001mb.password = req.body.password;
        login001mb.rolename = req.body.rolename.rolename;
        login001mb.status = req.body.status;
        login001mb.inserteduser = req.body.inserteduser;
        login001mb.inserteddatetime = req.body.inserteddatetime;
        login001mb.updateduser = req.body.updateduser;
        login001mb.updateddatetime = req.body.updateddatetime;

        login001mb.save()
            .then((result) => {
                res.json({ message: 'Login created' });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    })
    /**
     * @swagger
     * /api/login001mb/{id}:
     *   put:
     *    tags: [login001mb]
     *    summary: Put Method
     *    description: Retrieve the list of data
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: Numeric ID of the user to retrieve.
     *        schema:
     *           type: string
     *    requestBody:
     *         required: true
     *         content:
     *             application/json:
     *                       schema:
     *                         $ref: '#/components/schemas/login001mb'
     *    responses:
     *       200:
     *         description: Sucess
     *       500:
     *         description: failed
     *         content:
     *             application/json:
     *                       schema:
     *                          type: array
     *                          items:
     *                             $ref: '#/components/schemas/login001mb'
     */

app.put('/api/login001mb/:id', (req, res) => {
    var id = req.params.id;
    Login001mb.findOne({ _id: id }, function(err, login001mb) {
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
        login001mb.email = req.body.email ? req.body.email : login001mb.email;
        login001mb.password = req.body.password ? req.body.password : login001mb.password;
        login001mb.rolename = req.body.rolename.rolename ? req.body.rolename.rolename : login001mb.rolename;
        login001mb.status = req.body.status ? req.body.status : login001mb.status
        login001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : login001mb.inserteduser;
        login001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : login001mb.inserteddatetime;
        login001mb.updateduser = req.body.updateduser ? req.body.updateduser : login001mb.updateduser;
        login001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : login001mb.updateddatetime;

        login001mb.save(function(err, login001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating login001mb.',
                    error: err
                });
            }

            return res.json(login001mb);
        });
    });
});
/**
 * @swagger
 * /api/login001mb/{id}:
 *   delete:
 *    tags: [login001mb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/login001mb/:id', (req, res) => {
    var id = req.params.id;
    Login001mb.findByIdAndRemove(id, function(err, login001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the login001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});



// ********************** person001mb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      person001mb:
 *            type: object
 *            properties:
 *             subscid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string    
 *             userid:
 *                 type: object
 *                 properties:
 *                    id: 
 *                      type: string  
 *             personid:   
 *                 type: number 
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string   
 */

// ********************** person001mb get method****************//
/**
 * @swagger
 * /api/person001mb:
 *   get:
 *     tags: [person001mb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/person001mb'
 */

app.get('/api/person001mb', (req, res) => {
    Person001mb.find(function(err, person001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting person001mb.',
                error: err
            });
        }

        return res.json(person001mb);
    });
});

/**
 * @swagger
 * /api/person001mb/{id}:
 *   get:
 *     tags: [person001mb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/person001mb'
 */

app.get('/api/person001mb/:id', (req, res) => {
    var id = req.params.id;
    Person001mb.findOne({ _id: id }, function(err, person001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting person001mb.',
                error: err
            });
        }

        if (!person001mb) {
            return res.status(404).json({
                message: 'No such person001mb'
            });
        }

        return res.json(person001mb);
    });
});

/**
 * @swagger
 * /api/person001mb/person:
 *   post:
 *    tags: [person001mb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/person001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/person001mb/person', (req, res) => {
        const person001mb = new Person001mb();
        person001mb.personid = req.body.personid;
        person001mb.subscid = req.body.subscid.id;
        person001mb.userid = req.body.userid.id;
        person001mb.inserteduser = req.body.inserteduser;
        person001mb.inserteddatetime = req.body.inserteddatetime;
        person001mb.updateduser = req.body.updateduser;
        person001mb.status = req.body.status;
        person001mb.updateddatetime = req.body.updateddatetime;
        person001mb.save(function(err, person001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating person001mb',
                    error: err
                });
            }

            return res.status(201).json('Person001mb Created!');
        });
    })
    /**
     * @swagger
     * /api/person001mb/{id}:
     *   put:
     *    tags: [person001mb]
     *    summary: Put Method
     *    description: Retrieve the list of data
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: Numeric ID of the user to retrieve.
     *        schema:
     *           type: string
     *    requestBody:
     *         required: true
     *         content:
     *             application/json:
     *                       schema:
     *                         $ref: '#/components/schemas/person001mb'
     *    responses:
     *       200:
     *         description: Sucess
     *       500:
     *         description: failed
     *         content:
     *             application/json:
     *                       schema:
     *                          type: array
     *                          items:
     *                             $ref: '#/components/schemas/person001mb'
     */

app.put('/api/person001mb/:id', (req, res) => {
    var id = req.params.id;
    Person001mb.findOne({ _id: id }, function(err, person001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting person001mb',
                error: err
            });
        }

        if (!person001mb) {
            return res.status(404).json({
                message: 'No such person001mb'
            });
        }

        person001mb.personid = req.body.personid ? req.body.personid : person001mb.personid;
        person001mb.subscid = req.body.subscid.id ? req.body.subscid.id : person001mb.subscid;
        person001mb.user = req.body.userid.id ? req.body.userid.id : person001mb.user;
        person001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : person001mb.inserteduser;
        person001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : person001mb.inserteddatetime;
        person001mb.status = req.body.status ? req.body.status : person001mb.status;
        person001mb.updateduser = req.body.updateduser ? req.body.updateduser : person001mb.updateduser;
        person001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : person001mb.updateddatetime;

        person001mb.save(function(err, person001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating person001mb.',
                    error: err
                });
            }

            return res.json(person001mb);
        });
    });
});
/**
 * @swagger
 * /api/person001mb/{id}:
 *   delete:
 *    tags: [person001mb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/person001mb/:id', (req, res) => {
    var id = req.params.id;
    Person001mb.findByIdAndRemove(id, function(err, person001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the person001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});




// ********************** religion001mb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      religion001mb:
 *            type: object
 *            properties:
 *             subscid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string      
 *             religionid:
 *                 type: number
 *             religionname:
 *                 type: string
 *             religiondesc:
 *                 type: string
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string   
 */

// ********************** religion001mb get method****************//
/**
 * @swagger
 * /api/religion001mb:
 *   get:
 *     tags: [religion001mb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/religion001mb'
 */

app.get('/api/religion001mb', (req, res) => {
    Religion001mb.find(function(err, religion001mbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting religion001mb.',
                error: err
            });
        }

        return res.json(religion001mbs);
    });
});

/**
 * @swagger
 * /api/religion001mb/{id}:
 *   get:
 *     tags: [religion001mb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/religion001mb'
 */

app.get('/api/religion001mb/:id', (req, res) => {
    var id = req.params.id;
    Religion001mb.findOne({ _id: id }, function(err, religion001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting religion001mb.',
                error: err
            });
        }

        if (!religion001mb) {
            return res.status(404).json({
                message: 'No such religion001mb'
            });
        }

        return res.json(religion001mb);
    });
});

/**
 * @swagger
 * /api/religion001mb/religion:
 *   post:
 *    tags: [religion001mb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/religion001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/religion001mb/religion', (req, res) => {
        const religion001mb = new Religion001mb();
        religion001mb.subscid = req.body.subscid.id;
        religion001mb.religionid = req.body.religionid;
        religion001mb.religionname = req.body.religionname;
        religion001mb.religiondesc = req.body.religiondesc;
        religion001mb.status = req.body.status;
        religion001mb.inserteduser = req.body.inserteduser;
        religion001mb.inserteddatetime = req.body.inserteddatetime;
        religion001mb.updateduser = req.body.updateduser;
        religion001mb.updateddatetime = req.body.updateddatetime;

        religion001mb.save()
            .then((result) => {

                Subscriberdetails001wb.findOne({ _id: religion001mb.subscid }, (err, user) => {
                    if (user) {
                        user.religionid.push(religion001mb);
                        user.save();
                        res.json({ message: 'religion created!' });
                    }
                });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    })
    /**
     * @swagger
     * /api/religion001mb/{id}:
     *   put:
     *    tags: [religion001mb]
     *    summary: Put Method
     *    description: Retrieve the list of data
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: Numeric ID of the user to retrieve.
     *        schema:
     *           type: string
     *    requestBody:
     *         required: true
     *         content:
     *             application/json:
     *                       schema:
     *                         $ref: '#/components/schemas/religion001mb'
     *    responses:
     *       200:
     *         description: Sucess
     *       500:
     *         description: failed
     *         content:
     *             application/json:
     *                       schema:
     *                          type: array
     *                          items:
     *                             $ref: '#/components/schemas/religion001mb'
     */

app.put('/api/religion001mb/:id', (req, res) => {
    var id = req.params.id;
    Religion001mb.findOne({ _id: id }, function(err, religion001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting religion001mb',
                error: err
            });
        }

        if (!religion001mb) {
            return res.status(404).json({
                message: 'No such religion001mb'
            });
        }
        religion001mb.subscid = req.body.subscid.id ? req.body.subscid.id : religion001mb.religionid;
        religion001mb.religionid = req.body.religionid ? req.body.religionid : religion001mb.religionid;
        religion001mb.religionname = req.body.religionname ? req.body.religionname : religion001mb.religionname;
        religion001mb.religiondesc = req.body.religiondesc ? req.body.religiondesc : religion001mb.religiondesc;
        religion001mb.status = req.body.status ? req.body.status : religion001mb.status;
        religion001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : religion001mb.inserteduser;
        religion001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : religion001mb.inserteddatetime;
        religion001mb.updateduser = req.body.updateduser ? req.body.updateduser : religion001mb.updateduser;
        religion001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : religion001mb.updateddatetime;

        religion001mb.save(function(err, religion001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating religion001mb.',
                    error: err
                });
            }

            return res.json(religion001mb);
        });
    });
});
/**
 * @swagger
 * /api/religion001mb/{id}:
 *   delete:
 *    tags: [religion001mb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/religion001mb/:id', (req, res) => {
    var id = req.params.id;
    Religion001mb.findByIdAndRemove(id, function(err, religion001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the religion001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });

    });
});






// ********************** subcatclassification001mb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      subcatclassification001mb:
 *            type: object
 *            properties:
 *              subscid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string  
 *              subcatcode:
 *                 type: object
 *                 properties:
 *                    id: 
 *                      type: string     
 *              classificationid:
 *                 type: number
 *              classificationname:
 *                 type: string
 *              status:
 *                 type: string
 *              inserteduser:
 *                 type: string
 *              inserteddatetime:
 *                 type: string
 *              updateduser:
 *                 type: string
 *              updateddatetime:
 *                 type: string   
 */

// ********************** subcatclassification001mb get method****************//
/**
 * @swagger
 * /api/subcatclassification001mb:
 *   get:
 *     tags: [subcatclassification001mb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/subcatclassification001mb'
 */

app.get('/api/subcatclassification001mb', (req, res) => {
    Subcatclassification001mb.find(function(err, subcatclassification001mbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subcatclassification001mb.',
                error: err
            });
        }

        return res.json(subcatclassification001mbs);
    });
});

/**
 * @swagger
 * /api/subcatclassification001mb/{id}:
 *   get:
 *     tags: [subcatclassification001mb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/subcatclassification001mb'
 */

app.get('/api/subcatclassification001mb/:id', (req, res) => {
    var id = req.params.id;
    Subcatclassification001mb.findOne({ _id: id }, function(err, subcatclassification001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subcatclassification001mb.',
                error: err
            });
        }

        if (!subcatclassification001mb) {
            return res.status(404).json({
                message: 'No such subcatclassification001mb'
            });
        }

        return res.json(subcatclassification001mb);
    });
});

/**
 * @swagger
 * /api/subcatclassification001mb/subcatclassification:
 *   post:
 *    tags: [subcatclassification001mb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/subcatclassification001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/subcatclassification001mb/subcatclassification', (req, res) => {
        const subcatclassification001mb = new Subcatclassification001mb();
        subcatclassification001mb.subscid = req.body.subscid.id;
        subcatclassification001mb.subcatcode = req.body.subcatcode.id;
        // subcatclassification001mb.catcode = req.body.catcode,
        subcatclassification001mb.classificationid = req.body.classificationid;
        subcatclassification001mb.classificationname = req.body.classificationname;
        subcatclassification001mb.status = req.body.status;
        subcatclassification001mb.inserteduser = req.body.inserteduser;
        subcatclassification001mb.inserteddatetime = req.body.inserteddatetime;
        subcatclassification001mb.updateduser = req.body.updateduser;
        subcatclassification001mb.updateddatetime = req.body.updateddatetime;
        subcatclassification001mb.save()
            .then((result) => {
                Subscriberdetails001wb.findOne({ _id: subcatclassification001mb.subscid }, (err, user) => {
                    if (user) {
                        user.classificationid.push(subcatclassification001mb);
                        user.save();
                        res.json({ message: 'subcatclassification created!' });
                    }
                });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    })
    /**
     * @swagger
     * /api/subcatclassification001mb/{id}:
     *   put:
     *    tags: [subcatclassification001mb]
     *    summary: Put Method
     *    description: Retrieve the list of data
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: Numeric ID of the user to retrieve.
     *        schema:
     *           type: string
     *    requestBody:
     *         required: true
     *         content:
     *             application/json:
     *                       schema:
     *                         $ref: '#/components/schemas/subcatclassification001mb'
     *    responses:
     *       200:
     *         description: Sucess
     *       500:
     *         description: failed
     *         content:
     *             application/json:
     *                       schema:
     *                          type: array
     *                          items:
     *                             $ref: '#/components/schemas/subcatclassification001mb'
     */

app.put('/api/subcatclassification001mb/:id', (req, res) => {
    var id = req.params.id;
    Subcatclassification001mb.findOne({ _id: id }, function(err, subcatclassification001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subcatclassification001mb',
                error: err
            });
        }

        if (!subcatclassification001mb) {
            return res.status(404).json({
                message: 'No such subcatclassification001mb'
            });
        }
        subcatclassification001mb.subcatcode = req.body.subcatcode.id ? req.body.subcatcode.id : subcatclassification001mb.subcatcode;
        subcatclassification001mb.subscid = req.body.subscid.id ? req.body.subscid.id : subcatclassification001mb.subscid;
        // subcatclassification001mb.catcode = req.body.catcode ? req.body.catcode : subcatclassification001mb.catcode;
        subcatclassification001mb.classificationid = req.body.classificationid ? req.body.classificationid : subcatclassification001mb.classificationid;
        subcatclassification001mb.classificationname = req.body.classificationname ? req.body.classificationname : subcatclassification001mb.classificationname;
        subcatclassification001mb.status = req.body.status ? req.body.status : subcatclassification001mb.status;
        subcatclassification001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subcatclassification001mb.inserteduser;
        subcatclassification001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subcatclassification001mb.inserteddatetime;
        subcatclassification001mb.updateduser = req.body.updateduser ? req.body.updateduser : subcatclassification001mb.updateduser;
        subcatclassification001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subcatclassification001mb.updateddatetime;

        subcatclassification001mb.save(function(err, subcatclassification001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating subcatclassification001mb.',
                    error: err
                });
            }

            return res.json(subcatclassification001mb);
        });
    });
});
/**
 * @swagger
 * /api/subcatclassification001mb/{id}:
 *   delete:
 *    tags: [subcatclassification001mb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/subcatclassification001mb/:id', (req, res) => {
    var id = req.params.id;
    Subcatclassification001mb.findByIdAndRemove(id, function(err, subcatclassification001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subcatclassification001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});




// ********************** subcategory001mb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      subcategory001mb:
 *            type: object
 *            properties:
 *             subscid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string  
 *             catcode:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string     
 *             subcatcode:
 *                 type: string
 *             subcatname:
 *                 type: string
 *             subcatstatus:
 *                 type: string
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string   
 */

// ********************** subcategory001mb get method****************//
/**
 * @swagger
 * /api/subcategory001mb:
 *   get:
 *     tags: [subcategory001mb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/subcategory001mb'
 */

app.get('/api/subcategory001mb', (req, res) => {
    Subcategory001mb.find(function(err, subcategory001mbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subcategory001mb.',
                error: err
            });
        }

        return res.json(subcategory001mbs);
    });
});

/**
 * @swagger
 * /api/subcategory001mb/{id}:
 *   get:
 *     tags: [subcategory001mb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/subcategory001mb'
 */

app.get('/api/subcategory001mb/:id', (req, res) => {
    var id = req.params.id;
    Subcategory001mb.findOne({ _id: id }, function(err, subcategory001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subcategory001mb.',
                error: err
            });
        }

        if (!subcategory001mb) {
            return res.status(404).json({
                message: 'No such subcategory001mb'
            });
        }

        return res.json(subcategory001mb);
    });
});

/**
 * @swagger
 * /api/subcategory001mb/subcategory:
 *   post:
 *    tags: [subcategory001mb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/subcategory001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/subcategory001mb/subcategory', (req, res) => {
        const subcategory001mb = new Subcategory001mb();
        subcategory001mb.subscid = req.body.subscid.id;
        subcategory001mb.catcode = req.body.catcode.id;
        subcategory001mb.subcatcode = req.body.subcatcode;
        subcategory001mb.subcatname = req.body.subcatname;
        subcategory001mb.subcatstatus = req.body.subcatstatus;
        subcategory001mb.status = req.body.status;
        subcategory001mb.inserteduser = req.body.inserteduser;
        subcategory001mb.inserteddatetime = req.body.inserteddatetime;
        subcategory001mb.updateduser = req.body.updateduser;
        subcategory001mb.updateddatetime = req.body.updateddatetime;
        subcategory001mb.save()
            .then((result) => {
                Subscriberdetails001wb.findOne({ _id: subcategory001mb.subscid }, (err, user) => {
                    if (user) {
                        user.subcatcode.push(subcategory001mb);
                        user.save();
                        res.json({ message: 'subcategory001mb created!' });
                    }
                });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    })
    /**
     * @swagger
     * /api/subcategory001mb/{id}:
     *   put:
     *    tags: [subcategory001mb]
     *    summary: Put Method
     *    description: Retrieve the list of data
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: Numeric ID of the user to retrieve.
     *        schema:
     *           type: string
     *    requestBody:
     *         required: true
     *         content:
     *             application/json:
     *                       schema:
     *                         $ref: '#/components/schemas/subcategory001mb'
     *    responses:
     *       200:
     *         description: Sucess
     *       500:
     *         description: failed
     *         content:
     *             application/json:
     *                       schema:
     *                          type: array
     *                          items:
     *                             $ref: '#/components/schemas/subcategory001mb'
     */

app.put('/api/subcategory001mb/:id', (req, res) => {
    var id = req.params.id;
    Subcategory001mb.findOne({ _id: id }, function(err, subcategory001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subcategory001mb',
                error: err
            });
        }

        if (!subcategory001mb) {
            return res.status(404).json({
                message: 'No such subcategory001mb'
            });
        }
        subcategory001mb.subscid = req.body.subscid.id ? req.body.subscid.id : subcategory001mb.subscid;
        subcategory001mb.catcode = req.body.catcode.id ? req.body.catcode.id : subcategory001mb.catcode;
        subcategory001mb.subcatcode = req.body.subcatcode ? req.body.subcatcode : subcategory001mb.subcatcode;
        subcategory001mb.subcatname = req.body.subcatname ? req.body.subcatname : subcategory001mb.subcatname;
        subcategory001mb.subcatstatus = req.body.subcatstatus ? req.body.subcatstatus : subcategory001mb.subcatstatus;
        subcategory001mb.status = req.body.status ? req.body.status : subcategory001mb.status;
        subcategory001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subcategory001mb.inserteduser;
        subcategory001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subcategory001mb.inserteddatetime;
        subcategory001mb.updateduser = req.body.updateduser ? req.body.updateduser : subcategory001mb.updateduser;
        subcategory001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subcategory001mb.updateddatetime;

        subcategory001mb.save(function(err, subcategory001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating subcategory001mb.',
                    error: err
                });
            }

            return res.json(subcategory001mb);
        });
    });
});
/**
 * @swagger
 * /api/subcategory001mb/{id}:
 *   delete:
 *    tags: [subcategory001mb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/subcategory001mb/:id', (req, res) => {
    var id = req.params.id;
    Subcategory001mb.findByIdAndRemove(id, function(err, subcategory001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subcategory001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});




// ********************** subscribercontentauth001wb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      subscribercontentauth001wb:
 *            type: object
 *            properties:
 *             subscid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string      
 *             subscsubpid:
 *                 type: number
 *             subscsubpstatus:
 *                 type: string
 *             subscsubpstartdate:
 *                 type: string
 *             subscsubpenddate:
 *                 type: string
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string   
 */

// ********************** subscribercontentauth001wb get method****************//
/**
 * @swagger
 * /api/subscribercontentauth001wb:
 *   get:
 *     tags: [subscribercontentauth001wb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/subscribercontentauth001wb'
 */

app.get('/api/subscribercontentauth001wb', (req, res) => {
    Subscribercontentauth001wb.find(function(err, subscribercontentauth001wbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscribercontentauth001wb.',
                error: err
            });
        }

        return res.json(subscribercontentauth001wbs);
    });
});

/**
 * @swagger
 * /api/subscribercontentauth001wb/{id}:
 *   get:
 *     tags: [subscribercontentauth001wb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/subscribercontentauth001wb'
 */

app.get('/api/subscribercontentauth001wb/:id', (req, res) => {
    var id = req.params.id;
    Subscribercontentauth001wb.findOne({ _id: id }, function(err, subscribercontentauth001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscribercontentauth001wb.',
                error: err
            });
        }

        if (!subscribercontentauth001wb) {
            return res.status(404).json({
                message: 'No such subscribercontentauth001wb'
            });
        }

        return res.json(subscribercontentauth001wb);
    });
});

/**
 * @swagger
 * /api/subscribercontentauth001wb/subscribercontent:
 *   post:
 *    tags: [subscribercontentauth001wb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/subscribercontentauth001wb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/subscribercontentauth001wb/subscribercontent', (req, res) => {
        const subscribercontentauth001wb = new Subscribercontentauth001wb();
        subscribercontentauth001wb.subscid = req.body.subscid.id;
        subscribercontentauth001wb.subscsubpid = req.body.subscsubpid;
        subscribercontentauth001wb.subscsubpstatus = req.body.subscsubpstatus;
        subscribercontentauth001wb.subscsubpstartdate = req.body.subscsubpstartdate;
        subscribercontentauth001wb.subscsubpenddate = req.body.subscsubpenddate;
        subscribercontentauth001wb.inserteduser = req.body.inserteduser;
        subscribercontentauth001wb.inserteddatetime = req.body.inserteddatetime;
        subscribercontentauth001wb.updateduser = req.body.updateduser;
        subscribercontentauth001wb.status = req.body.status;
        subscribercontentauth001wb.updateddatetime = req.body.updateddatetime;
        subscribercontentauth001wb.save()
            .then((result) => {

                Subscriberdetails001wb.findOne({ _id: subscribercontentauth001wb.subscid }, (err, user) => {
                    if (user) {
                        user.subscsubspid.push(subscribercontentauth001wb);
                        user.save();
                        res.json({ message: 'subscribercontentauth created!' });
                    }
                });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    })
    /**
     * @swagger
     * /api/subscribercontentauth001wb/{id}:
     *   put:
     *    tags: [subscribercontentauth001wb]
     *    summary: Put Method
     *    description: Retrieve the list of data
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: Numeric ID of the user to retrieve.
     *        schema:
     *           type: string
     *    requestBody:
     *         required: true
     *         content:
     *             application/json:
     *                       schema:
     *                         $ref: '#/components/schemas/subscribercontentauth001wb'
     *    responses:
     *       200:
     *         description: Sucess
     *       500:
     *         description: failed
     *         content:
     *             application/json:
     *                       schema:
     *                          type: array
     *                          items:
     *                             $ref: '#/components/schemas/subscribercontentauth001wb'
     */

app.put('/api/subscribercontentauth001wb/:id', (req, res) => {
    var id = req.params.id;

    Subscribercontentauth001wb.findOne({ _id: id }, function(err, subscribercontentauth001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscribercontentauth001wb',
                error: err
            });
        }

        if (!subscribercontentauth001wb) {
            return res.status(404).json({
                message: 'No such subscribercontentauth001wb'
            });
        }

        subscribercontentauth001wb.subscid = req.body.subscid.id ? req.body.subscid.id : subscribercontentauth001wb.subscid;
        subscribercontentauth001wb.subscsubpid = req.body.subscsubpid ? req.body.subscsubpid : subscribercontentauth001wb.subscsubpid;
        subscribercontentauth001wb.subscsubpstatus = req.body.subscsubpstatus ? req.body.subscsubpstatus : subscribercontentauth001wb.subscsubpstatus;
        subscribercontentauth001wb.subscsubpstartdate = req.body.subscsubpstartdate ? req.body.subscsubpstartdate : subscribercontentauth001wb.subscsubpstartdate;
        subscribercontentauth001wb.subscsubpenddate = req.body.subscsubpenddate ? req.body.subscsubpenddate : subscribercontentauth001wb.subscsupbenddate;
        subscribercontentauth001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subscribercontentauth001wb.inserteduser;
        subscribercontentauth001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subscribercontentauth001wb.inserteddatetime;
        subscribercontentauth001wb.updateduser = req.body.updateduser ? req.body.updateduser : subscribercontentauth001wb.updateduser;
        subscribercontentauth001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subscribercontentauth001wb.updateddatetime;
        subscribercontentauth001wb.status = req.body.status ? req.body.status : subscribercontentauth001wb.status;
        subscribercontentauth001wb.save(function(err, subscribercontentauth001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating subscribercontentauth001wb.',
                    error: err
                });
            }

            return res.json(subscribercontentauth001wb);
        });
    });
});
/**
 * @swagger
 * /api/subscribercontentauth001wb/{id}:
 *   delete:
 *    tags: [subscribercontentauth001wb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/subscribercontentauth001wb/:id', (req, res) => {
    var id = req.params.id;
    Subscribercontentauth001wb.findByIdAndRemove(id, function(err, subscribercontentauth001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subscribercontentauth001wb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});





// ********************** subscriberdetails001wb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      subscriberdetails001wb:
 *            type: object
 *            properties:    
 *             subscid:
 *                 type: number
 *             subscname:
 *                 type: string
 *             age:
 *               type: number
 *             sex:
 *               type: string
 *             subscdesc:
 *                 type: string
 *             aboutme:
 *                 type: string
 *             address:
 *                 type: string
 *             phoneno:
 *                 type: number
 *             subscstatus:
 *                 type: string
 *             approvedby:
 *                 type: string
 *             subscapproval:
 *                 type: boolean
 *             approvedon:
 *                 type: string
 *             email:
 *               type: string
 *               format: email
 *             password:
 *               type: string
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string   
 *             countryid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string 
 *             cityid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string 
 *             personid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string 
 *             stateid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string 
 *             subpid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string 
 *             payid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string 
 *             companycode:
 *                 type: array
 *             rolename:
 *                 type: object
 *                 properties:
 *                    rolename: 
 *                      type: string 
 *             subcatcode:
 *                 type: array
 *             professionalid:
 *                 type: array
 *             categoryid:
 *                 type: array
 *             languageid:
 *                 type: array
 *             personalid:
 *                 type: array
 *             contentid:
 *                  type: object
 *                  properties:
 *                    id: 
 *                      type: string 
 *             religionid:
 *                 type: array
 *             classificationid:
 *                 type: array
 *             subscsubspid:
 *                 type: array
 *             regionalid:
 *                 type: array
 */

// ********************** subscriberdetails001wb get method****************//
/**
 * @swagger
 * /api/subscriberdetails001wb:
 *   get:
 *     tags: [subscriberdetails001wb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/subscriberdetails001wb'
 */

app.get('/api/subscriberdetails001wb', (req, res) => {
    Subscriberdetails001wb.find(function(err, subscriberdetails001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberdetails001wb.',
                error: err
            });
        }

        return res.json(subscriberdetails001wb);
    });
});

/**
 * @swagger
 * /api/subscriberdetails001wb/{id}:
 *   get:
 *     tags: [subscriberdetails001wb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/subscriberdetails001wb'
 */

app.get('/api/subscriberdetails001wb/:id', (req, res) => {
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
});

/**
 * @swagger
 * /api/subscriberdetails001wb/subscriberdetails:
 *   post:
 *    tags: [subscriberdetails001wb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/subscriberdetails001wb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/subscriberdetails001wb/subscriberdetails', async(req, res) => {
        const subscriberdetails001wb = new Subscriberdetails001wb();
        subscriberdetails001wb.payid = req.body.payid.id;
        subscriberdetails001wb.personid = req.body.personid.id;
        subscriberdetails001wb.subscid = req.body.subscid;
        subscriberdetails001wb.subpid = req.body.subpid.id;
        subscriberdetails001wb.countryid = req.body.countryid.id;
        subscriberdetails001wb.rolename = req.body.rolename.rolename;
        subscriberdetails001wb.contentid = req.body.contentid.id;
        subscriberdetails001wb.cityid = req.body.cityid.id;
        subscriberdetails001wb.stateid = req.body.stateid.id;
        subscriberdetails001wb.email = req.body.email;
        subscriberdetails001wb.password = req.body.password;
        subscriberdetails001wb.subscname = req.body.subscname;
        subscriberdetails001wb.age = req.body.age;
        subscriberdetails001wb.sex = req.body.sex;
        subscriberdetails001wb.subscdesc = req.body.subscdesc;
        subscriberdetails001wb.aboutme = req.body.aboutme;
        subscriberdetails001wb.address = req.body.address;
        subscriberdetails001wb.phoneno = req.body.phoneno;
        subscriberdetails001wb.subscstatus = req.body.subscstatus;
        subscriberdetails001wb.subscapproval = req.body.subscapproval;
        subscriberdetails001wb.approvedby = req.body.approvedby;
        subscriberdetails001wb.approvedon = req.body.approvedon;
        subscriberdetails001wb.approvedby = req.body.approvedby;
        subscriberdetails001wb.inserteduser = req.body.inserteduser;
        subscriberdetails001wb.inserteddatetime = req.body.inserteddatetime;
        subscriberdetails001wb.updateduser = req.body.updateduser;
        subscriberdetails001wb.updateddatetime = req.body.updateddatetime;

        const oldUser = await Subscriberdetails001wb.findOne({ email: subscriberdetails001wb.email });
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
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
            to: subscriberdetails001wb.email,
            subject: 'Sirius Matrimony Confirmation',
            template: 'mail',
            context: {
                name: "Sirius Matrimony"
            }
        };
        transporter.sendMail(mailOptions, function(err, info) {
            if (err)
                console.log(err)
            else
                console.log('email sent' + info.response);
        })
        subscriberdetails001wb.save()
            .then((result) => {
                res.json({ message: 'subscriberdetails001wb created!' });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });

    })
    /**
     * @swagger
     * /api/subscriberdetails001wb/{id}:
     *   put:
     *    tags: [subscriberdetails001wb]
     *    summary: Put Method
     *    description: Retrieve the list of data
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: Numeric ID of the user to retrieve.
     *        schema:
     *           type: string
     *    requestBody:
     *         required: true
     *         content:
     *             application/json:
     *                       schema:
     *                         $ref: '#/components/schemas/subscriberdetails001wb'
     *    responses:
     *       200:
     *         description: Sucess
     *       500:
     *         description: failed
     *         content:
     *             application/json:
     *                       schema:
     *                          type: array
     *                          items:
     *                             $ref: '#/components/schemas/subscriberdetails001wb'
     */

app.put('/api/subscriberdetails001wb/:id', (req, res) => {
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
        subscriberdetails001wb.payid = req.body.payid.id ? req.body.payid.id : subscriberdetails001wb.payid;
        subscriberdetails001wb.password = req.body.password ? req.body.password : subscriberdetails001wb.password;
        subscriberdetails001wb.subpid = req.body.subpid.id ? req.body.subpid.id : subscriberdetails001wb.subpid;
        subscriberdetails001wb.email = req.body.email ? req.body.email : subscriberdetails001wb.email;
        subscriberdetails001wb.contentid = req.body.contentid.id ? req.body.contentid.id : subscriberdetails001wb.contentid;
        subscriberdetails001wb.cityid = req.body.cityid.id ? req.body.cityid.id : subscriberdetails001wb.cityid;
        subscriberdetails001wb.personid = req.body.personid.id ? req.body.personid.id : subscriberdetails001wb.personid;
        subscriberdetails001wb.stateid = req.body.stateid.id ? req.body.stateid.id : subscriberdetails001wb.stateid;
        subscriberdetails001wb.subscid = req.body.subscid ? req.body.subscid : subscriberdetails001wb.subscid;
        subscriberdetails001wb.rolename = req.body.rolename.rolename ? req.body.rolename.id : subscriberdetails001wb.rolename;
        subscriberdetails001wb.subscname = req.body.subscname ? req.body.subscname : subscriberdetails001wb.subscname;
        subscriberdetails001wb.age = req.body.age ? req.body.age : subscriberdetails001wb.age;
        subscriberdetails001wb.sex = req.body.sex ? req.body.sex : subscriberdetails001wb.sex;
        subscriberdetails001wb.subscdesc = req.body.subscdesc ? req.body.subscdesc : subscriberdetails001wb.subscdesc;
        subscriberdetails001wb.aboutme = req.body.aboutme ? req.body.aboutme : subscriberdetails001wb.aboutme;
        subscriberdetails001wb.countryid = req.body.countryid.id ? req.body.countryid.id : subscriberdetails001wb.countryid;
        subscriberdetails001wb.address = req.body.address ? req.body.address : subscriberdetails001wb.address;
        subscriberdetails001wb.phoneno = req.body.phoneno ? req.body.phoneno : subscriberdetails001wb.phoneno;
        subscriberdetails001wb.subscstatus = req.body.subscstatus ? req.body.subscstatus : subscriberdetails001wb.subscstatus;
        subscriberdetails001wb.subscapproval = req.body.subscapproval ? req.body.subscapproval : subscriberdetails001wb.subscapproval;
        subscriberdetails001wb.approvedby = req.body.approvedby ? req.body.approvedby : subscriberdetails001wb.approvedby;
        subscriberdetails001wb.approvedon = req.body.approvedon ? req.body.approvedon : subscriberdetails001wb.approvedon;
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
});
/**
 * @swagger
 * /api/subscriberdetails001wb/{id}:
 *   delete:
 *    tags: [subscriberdetails001wb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/subscriberdetails001wb/:id', (req, res) => {
    var id = req.params.id;
    Subscriberdetails001wb.findByIdAndRemove(id, function(err, subscriberdetails001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subscriberdetails001wb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});


// ********************** subscriberpersonalinfo001wb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      subscriberpersonalinfo001wb:
 *            type: object
 *            properties:
 *             subscid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string      
 *             personalid:
 *                 type: number
 *             personaldetails:
 *                 type: string
 *             hobbies:
 *                 type: string
 *             flex1:
 *                 type: string
 *             flex2:
 *                 type: string
 *             flex3:
 *                 type: string
 *             flex4:
 *                 type: string
 *             flex5:
 *                 type: string
 *             flex6:
 *                 type: string
 *             flex7:
 *                 type: string
 *             flex8:
 *                 type: string
 *             flex9:
 *                 type: string
 *             flex10:
 *                 type: string
 *             flex11:
 *                 type: string
 *             flex12:
 *                 type: string
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string   
 */

// ********************** subscriberpersonalinfo001wb get method****************//
/**
 * @swagger
 * /api/subscriberpersonalinfo001wb:
 *   get:
 *     tags: [subscriberpersonalinfo001wb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/subscriberpersonalinfo001wb'
 */

app.get('/api/subscriberpersonalinfo001wb', (req, res) => {
    Subscriberpersonalinfo001wb.find(function(err, subscriberpersonalinfo001wbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberpersonalinfo001wb.',
                error: err
            });
        }

        return res.json(subscriberpersonalinfo001wbs);
    });
});

/**
 * @swagger
 * /api/subscriberpersonalinfo001wb/{id}:
 *   get:
 *     tags: [subscriberpersonalinfo001wb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/subscriberpersonalinfo001wb'
 */

app.get('/api/subscriberpersonalinfo001wb/:id', (req, res) => {
    var id = req.params.id;
    Subscriberpersonalinfo001wb.findOne({ _id: id }, function(err, subscriberpersonalinfo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberpersonalinfo001wb.',
                error: err
            });
        }

        if (!subscriberpersonalinfo001wb) {
            return res.status(404).json({
                message: 'No such subscriberpersonalinfo001wb'
            });
        }

        return res.json(subscriberpersonalinfo001wb);
    });
});

/**
 * @swagger
 * /api/subscriberpersonalinfo001wb/personal:
 *   post:
 *    tags: [subscriberpersonalinfo001wb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/subscriberpersonalinfo001wb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/subscriberpersonalinfo001wb/personal', (req, res) => {
        const subscriberpersonalinfo001wb = new Subscriberpersonalinfo001wb();
        subscriberpersonalinfo001wb.subscid = req.body.subscid.id;
        subscriberpersonalinfo001wb.personalid = req.body.personalid;
        subscriberpersonalinfo001wb.personaldetails = req.body.personaldetails;
        subscriberpersonalinfo001wb.hobbies = req.body.hobbies;
        subscriberpersonalinfo001wb.flex1 = req.body.flex1;
        subscriberpersonalinfo001wb.flex2 = req.body.flex2;
        subscriberpersonalinfo001wb.flex3 = req.body.flex3;
        subscriberpersonalinfo001wb.flex4 = req.body.flex4;
        subscriberpersonalinfo001wb.flex5 = req.body.flex5;
        subscriberpersonalinfo001wb.flex6 = req.body.flex6;
        subscriberpersonalinfo001wb.flex7 = req.body.flex7;
        subscriberpersonalinfo001wb.flex8 = req.body.flex8;
        subscriberpersonalinfo001wb.flex9 = req.body.flex9;
        subscriberpersonalinfo001wb.flex10 = req.body.flex10;
        subscriberpersonalinfo001wb.flex11 = req.body.flex11;
        subscriberpersonalinfo001wb.flex12 = req.body.flex12;
        subscriberpersonalinfo001wb.inserteduser = req.body.inserteduser;
        subscriberpersonalinfo001wb.inserteddatetime = req.body.inserteddatetime;
        subscriberpersonalinfo001wb.updateduser = req.body.updateduser;
        subscriberpersonalinfo001wb.updateddatetime = req.body.updateddatetime;


        subscriberpersonalinfo001wb.save()
            .then((result) => {

                Subscriberdetails001wb.findOne({ _id: subscriberpersonalinfo001wb.subscid }, (err, user) => {
                    if (user) {
                        user.personalid.push(subscriberpersonalinfo001wb);
                        user.save();
                        res.json({ message: 'subscriberpersonalinfo created!' });
                    }
                });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    })
    /**
     * @swagger
     * /api/subscriberpersonalinfo001wb/{id}:
     *   put:
     *    tags: [subscriberpersonalinfo001wb]
     *    summary: Put Method
     *    description: Retrieve the list of data
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: Numeric ID of the user to retrieve.
     *        schema:
     *           type: string
     *    requestBody:
     *         required: true
     *         content:
     *             application/json:
     *                       schema:
     *                         $ref: '#/components/schemas/subscriberpersonalinfo001wb'
     *    responses:
     *       200:
     *         description: Sucess
     *       500:
     *         description: failed
     *         content:
     *             application/json:
     *                       schema:
     *                          type: array
     *                          items:
     *                             $ref: '#/components/schemas/subscriberpersonalinfo001wb'
     */

app.put('/api/subscriberpersonalinfo001wb/:id', (req, res) => {
    var id = req.params.id;
    Subscriberpersonalinfo001wb.findOne({ _id: id }, function(err, subscriberpersonalinfo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberpersonalinfo001wb',
                error: err
            });
        }

        if (!subscriberpersonalinfo001wb) {
            return res.status(404).json({
                message: 'No such subscriberpersonalinfo001wb'
            });
        }

        subscriberpersonalinfo001wb.personalid = req.body.personalid ? req.body.personalid : subscriberpersonalinfo001wb.personalid;
        subscriberpersonalinfo001wb.subcid = req.body.subscid.id ? req.body.subscid.id : subscriberpersonalinfo001wb.subcid;
        subscriberpersonalinfo001wb.personaldetails = req.body.personaldetails ? req.body.personaldetails : subscriberpersonalinfo001wb.personaldetails;
        subscriberpersonalinfo001wb.hobbies = req.body.hobbies ? req.body.hobbies : subscriberpersonalinfo001wb.hobbies;
        subscriberpersonalinfo001wb.flex1 = req.body.flex1 ? req.body.flex1 : subscriberpersonalinfo001wb.flex1;
        subscriberpersonalinfo001wb.flex2 = req.body.flex2 ? req.body.flex2 : subscriberpersonalinfo001wb.flex2;
        subscriberpersonalinfo001wb.flex3 = req.body.flex3 ? req.body.flex3 : subscriberpersonalinfo001wb.flex3;
        subscriberpersonalinfo001wb.flex4 = req.body.flex4 ? req.body.flex4 : subscriberpersonalinfo001wb.flex4;
        subscriberpersonalinfo001wb.flex5 = req.body.flex5 ? req.body.flex5 : subscriberpersonalinfo001wb.flex5;
        subscriberpersonalinfo001wb.flex6 = req.body.flex6 ? req.body.flex6 : subscriberpersonalinfo001wb.flex6;
        subscriberpersonalinfo001wb.flex7 = req.body.flex7 ? req.body.flex7 : subscriberpersonalinfo001wb.flex7;
        subscriberpersonalinfo001wb.flex8 = req.body.flex8 ? req.body.flex8 : subscriberpersonalinfo001wb.flex8;
        subscriberpersonalinfo001wb.flex9 = req.body.flex9 ? req.body.flex9 : subscriberpersonalinfo001wb.flex9;
        subscriberpersonalinfo001wb.flex10 = req.body.flex10 ? req.body.flex10 : subscriberpersonalinfo001wb.flex10;
        subscriberpersonalinfo001wb.flex11 = req.body.flex11 ? req.body.flex11 : subscriberpersonalinfo001wb.flex11;
        subscriberpersonalinfo001wb.flex12 = req.body.flex12 ? req.body.flex12 : subscriberpersonalinfo001wb.flex12;
        subscriberpersonalinfo001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subscriberpersonalinfo001wb.inserteduser;
        subscriberpersonalinfo001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subscriberpersonalinfo001wb.inserteddatetime;
        subscriberpersonalinfo001wb.updateduser = req.body.updateduser ? req.body.updateduser : subscriberpersonalinfo001wb.updateduser;
        subscriberpersonalinfo001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subscriberpersonalinfo001wb.updateddatetime;

        subscriberpersonalinfo001wb.save(function(err, subscriberpersonalinfo001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating subscriberpersonalinfo001wb.',
                    error: err
                });
            }

            return res.json(subscriberpersonalinfo001wb);
        });
    });
});
/**
 * @swagger
 * /api/subscriberpersonalinfo001wb/{id}:
 *   delete:
 *    tags: [subscriberpersonalinfo001wb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/subscriberpersonalinfo001wb/:id', (req, res) => {
    var id = req.params.id;
    Subscriberpersonalinfo001wb.findByIdAndRemove(id, function(err, subscriberpersonalinfo001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subscriberpersonalinfo001wb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});



// ********************** subscriberprofessionalinfo002wb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      subscriberprofessionalinfo002wb:
 *            type: object
 *            properties:
 *             subscid:
 *                type: object
 *                properties:
 *                    id: 
 *                      type: string  
 *             professionid:
 *                 type: number
 *             professionaldetails:
 *                 type: string
 *             job:
 *                 type: string    
 *             flex1:
 *                 type: string
 *             flex2:
 *                 type: string
 *             flex3:
 *                 type: string
 *             flex4:
 *                 type: string
 *             flex5:
 *                 type: string
 *             flex6:
 *                 type: string
 *             flex7:
 *                 type: string
 *             flex8:
 *                 type: string
 *             flex9:
 *                 type: string
 *             flex10:
 *                 type: string
 *             flex11:
 *                 type: string
 *             flex12:
 *                 type: string
 *             status:
 *                 type: string
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string   
 */

// ********************** subscriberprofessionalinfo002wb get method****************//
/**
 * @swagger
 * /api/subscriberprofessionalinfo002wb:
 *   get:
 *     tags: [subscriberprofessionalinfo002wb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/subscriberprofessionalinfo002wb'
 */

app.get('/api/subscriberprofessionalinfo002wb', (req, res) => {
    Subscriberprofessionalinfo002wb.find(function(err, subscriberprofessionalinfo002wbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberprofessionalinfo002wb.',
                error: err
            });
        }

        return res.json(subscriberprofessionalinfo002wbs);
    });
});

/**
 * @swagger
 * /api/subscriberprofessionalinfo002wb/{id}:
 *   get:
 *     tags: [subscriberprofessionalinfo002wb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/subscriberprofessionalinfo002wb'
 */

app.get('/api/subscriberprofessionalinfo002wb/:id', (req, res) => {
    var id = req.params.id;
    Subscriberprofessionalinfo002wb.findOne({ _id: id }, function(err, subscriberprofessionalinfo002wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberprofessionalinfo002wb.',
                error: err
            });
        }

        if (!subscriberprofessionalinfo002wb) {
            return res.status(404).json({
                message: 'No such subscriberprofessionalinfo002wb'
            });
        }

        return res.json(subscriberprofessionalinfo002wb);
    });
});

/**
 * @swagger
 * /api/subscriberprofessionalinfo002wb/professional:
 *   post:
 *    tags: [subscriberprofessionalinfo002wb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/subscriberprofessionalinfo002wb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/subscriberprofessionalinfo002wb/professional', (req, res) => {
        const subscriberprofessionalinfo002wb = new Subscriberprofessionalinfo002wb();
        subscriberprofessionalinfo002wb.subscid = req.body.subscid.id;
        subscriberprofessionalinfo002wb.professionid = req.body.professionid;
        subscriberprofessionalinfo002wb.professionaldetails = req.body.professionaldetails;
        subscriberprofessionalinfo002wb.job = req.body.job;
        subscriberprofessionalinfo002wb.flex1 = req.body.flex1;
        subscriberprofessionalinfo002wb.flex2 = req.body.flex2;
        subscriberprofessionalinfo002wb.flex3 = req.body.flex3;
        subscriberprofessionalinfo002wb.flex4 = req.body.flex4;
        subscriberprofessionalinfo002wb.flex5 = req.body.flex5;
        subscriberprofessionalinfo002wb.flex6 = req.body.flex6;
        subscriberprofessionalinfo002wb.flex7 = req.body.flex7;
        subscriberprofessionalinfo002wb.flex8 = req.body.flex8;
        subscriberprofessionalinfo002wb.flex9 = req.body.flex9;
        subscriberprofessionalinfo002wb.flex10 = req.body.flex10;
        subscriberprofessionalinfo002wb.flex11 = req.body.flex11;
        subscriberprofessionalinfo002wb.flex12 = req.body.flex12;
        subscriberprofessionalinfo002wb.inserteduser = req.body.inserteduser,
            subscriberprofessionalinfo002wb.inserteddatetime = req.body.inserteddatetime,
            subscriberprofessionalinfo002wb.updateduser = req.body.updateduser,
            subscriberprofessionalinfo002wb.updateddatetime = req.body.updateddatetime
        subscriberprofessionalinfo002wb.save()
            .then((result) => {
                Subscriberdetails001wb.findOne({ _id: subscriberprofessionalinfo002wb.subscid }, (err, user) => {
                    if (user) {
                        user.professionalid.push(subscriberprofessionalinfo002wb);
                        user.save();
                        res.json({ message: 'subscriberprofessional created!' });
                    }
                });

            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    })
    /**
     * @swagger
     * /api/subscriberprofessionalinfo002wb/{id}:
     *   put:
     *    tags: [subscriberprofessionalinfo002wb]
     *    summary: Put Method
     *    description: Retrieve the list of data
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: Numeric ID of the user to retrieve.
     *        schema:
     *           type: string
     *    requestBody:
     *         required: true
     *         content:
     *             application/json:
     *                       schema:
     *                         $ref: '#/components/schemas/subscriberprofessionalinfo002wb'
     *    responses:
     *       200:
     *         description: Sucess
     *       500:
     *         description: failed
     *         content:
     *             application/json:
     *                       schema:
     *                          type: array
     *                          items:
     *                             $ref: '#/components/schemas/subscriberprofessionalinfo002wb'
     */

app.put('/api/subscriberprofessionalinfo002wb/:id', (req, res) => {
    var id = req.params.id;
    Subscriberprofessionalinfo002wb.findOne({ _id: id }, function(err, subscriberprofessionalinfo002wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriberprofessionalinfo002wb',
                error: err
            });
        }

        if (!subscriberprofessionalinfo002wb) {
            return res.status(404).json({
                message: 'No such subscriberprofessionalinfo002wb'
            });
        }
        subscriberprofessionalinfo002wb.professionid = req.body.professionid ? req.body.professionid : subscriberprofessionalinfo002wb.professionid;
        subscriberprofessionalinfo002wb.subcid = req.body.subscid.id ? req.body.subscid.id : subscriberprofessionalinfo002wb.subcid;
        subscriberprofessionalinfo002wb.professionaldetails = req.body.professionaldetails ? req.body.personaldetails : subscriberprofessionalinfo002wb.professionaldetails;
        subscriberprofessionalinfo002wb.job = req.body.job ? req.body.job : subscriberprofessionalinfo002wb.job;
        subscriberprofessionalinfo002wb.flex1 = req.body.flex1 ? req.body.flex1 : subscriberprofessionalinfo002wb.flex1;
        subscriberprofessionalinfo002wb.flex2 = req.body.flex2 ? req.body.flex2 : subscriberprofessionalinfo002wb.flex2;
        subscriberprofessionalinfo002wb.flex3 = req.body.flex3 ? req.body.flex3 : subscriberprofessionalinfo002wb.flex3;
        subscriberprofessionalinfo002wb.flex4 = req.body.flex4 ? req.body.flex4 : subscriberprofessionalinfo002wb.flex4;
        subscriberprofessionalinfo002wb.flex5 = req.body.flex5 ? req.body.flex5 : subscriberprofessionalinfo002wb.flex5;
        subscriberprofessionalinfo002wb.flex6 = req.body.flex6 ? req.body.flex6 : subscriberprofessionalinfo002wb.flex6;
        subscriberprofessionalinfo002wb.flex7 = req.body.flex7 ? req.body.flex7 : subscriberprofessionalinfo002wb.flex7;
        subscriberprofessionalinfo002wb.flex8 = req.body.flex8 ? req.body.flex8 : subscriberprofessionalinfo002wb.flex8;
        subscriberprofessionalinfo002wb.flex9 = req.body.flex9 ? req.body.flex9 : subscriberprofessionalinfo002wb.flex9;
        subscriberprofessionalinfo002wb.flex10 = req.body.flex10 ? req.body.flex10 : subscriberprofessionalinfo002wb.flex10;
        subscriberprofessionalinfo002wb.flex11 = req.body.flex11 ? req.body.flex11 : subscriberprofessionalinfo002wb.flex11;
        subscriberprofessionalinfo002wb.flex12 = req.body.flex12 ? req.body.flex12 : subscriberprofessionalinfo002wb.flex12;
        subscriberprofessionalinfo002wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subscriberprofessionalinfo002wb.inserteduser;
        subscriberprofessionalinfo002wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subscriberprofessionalinfo002wb.inserteddatetime;
        subscriberprofessionalinfo002wb.updateduser = req.body.updateduser ? req.body.updateduser : subscriberprofessionalinfo002wb.updateduser;
        subscriberprofessionalinfo002wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subscriberprofessionalinfo002wb.updateddatetime;

        subscriberprofessionalinfo002wb.save(function(err, subscriberprofessionalinfo002wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating subscriberprofessionalinfo002wb.',
                    error: err
                });
            }

            return res.json(subscriberprofessionalinfo002wb);
        });
    });
});
/**
 * @swagger
 * /api/subscriberprofessionalinfo002wb/{id}:
 *   delete:
 *    tags: [subscriberprofessionalinfo002wb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/subscriberprofessionalinfo002wb/:id', (req, res) => {
    var id = req.params.id;
    Subscriberprofessionalinfo002wb.findByIdAndRemove(id, function(err, subscriberprofessionalinfo002wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subscriberprofessionalinfo002wb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});



// ********************** subscriptionmaster001mb schema method****************//
/** 
 * @swagger
 * components:
 *    schemas:
 *      subscriptionmaster001mb:
 *            type: object
 *            properties:    
 *             subpid:
 *                 type: number
 *             subpname:
 *                 type: string
 *             subscid:
 *                 type: object
 *                 properties:
 *                    id: 
 *                      type: string  
 *             description:
 *                 type: string
 *             tenure:
 *                 type: string
 *             amount:
 *                 type: number
 *             status:
 *                 type: string
 *             discountflag:
 *                 type: boolean
 *             inserteduser:
 *                 type: string
 *             inserteddatetime:
 *                 type: string
 *             updateduser:
 *                 type: string
 *             updateddatetime:
 *                 type: string   
 */

// ********************** subscriptionmaster001mb get method****************//
/**
 * @swagger
 * /api/subscriptionmaster001mb:
 *   get:
 *     tags: [subscriptionmaster001mb]
 *     summary: Get Method
 *     description: Get the list of data
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/subscriptionmaster001mb'
 */

app.get('/api/subscriptionmaster001mb', (req, res) => {
    Subscriptionmaster001mb.find(function(err, subscriptionmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriptionmaster001mb.',
                error: err
            });
        }

        return res.json(subscriptionmaster001mb);
    });
});

/**
 * @swagger
 * /api/subscriptionmaster001mb/{id}:
 *   get:
 *     tags: [subscriptionmaster001mb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/subscriptionmaster001mb'
 */

app.get('/api/subscriptionmaster001mb/:id', (req, res) => {
    var id = req.params.id;
    Subscriptionmaster001mb.findOne({ _id: id }, function(err, subscriptionmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriptionmaster001mb.',
                error: err
            });
        }

        if (!subscriptionmaster001mb) {
            return res.status(404).json({
                message: 'No such subscriptionmaster001mb'
            });
        }

        return res.json(subscriptionmaster001mb);
    });
});

/**
 * @swagger
 * /api/subscriptionmaster001mb/master:
 *   post:
 *    tags: [subscriptionmaster001mb]  
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/subscriptionmaster001mb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */

app.post('/api/subscriptionmaster001mb/master', (req, res) => {
        const subscriptionmaster001mb = new Subscriptionmaster001mb();
        subscriptionmaster001mb.subpid = req.body.subpid;
        subscriptionmaster001mb.subscid = req.body.subscid.id;
        subscriptionmaster001mb.subpname = req.body.subpname;
        subscriptionmaster001mb.description = req.body.description;
        subscriptionmaster001mb.tenure = req.body.tenure;
        subscriptionmaster001mb.amount = req.body.amount;
        subscriptionmaster001mb.status = req.body.status;
        subscriptionmaster001mb.discountflag = req.body.discountflag;
        subscriptionmaster001mb.inserteduser = req.body.inserteduser;
        subscriptionmaster001mb.inserteddatetime = req.body.inserteddatetime;
        subscriptionmaster001mb.updateduser = req.body.updateduser;
        subscriptionmaster001mb.updateddatetime = req.body.updateddatetime;

        subscriptionmaster001mb.save(function(err, subscriptionmaster001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating subscriptionmaster001mb',
                    error: err
                });
            }

            return res.json({ messsage: 'Subscriptionmaster Created' });
        });
    })
    /**
     * @swagger
     * /api/subscriptionmaster001mb/{id}:
     *   put:
     *    tags: [subscriptionmaster001mb]
     *    summary: Put Method
     *    description: Retrieve the list of data
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: Numeric ID of the user to retrieve.
     *        schema:
     *           type: string
     *    requestBody:
     *         required: true
     *         content:
     *             application/json:
     *                       schema:
     *                         $ref: '#/components/schemas/subscriptionmaster001mb'
     *    responses:
     *       200:
     *         description: Sucess
     *       500:
     *         description: failed
     *         content:
     *             application/json:
     *                       schema:
     *                          type: array
     *                          items:
     *                             $ref: '#/components/schemas/subscriptionmaster001mb'
     */

app.put('/api/subscriptionmaster001mb/:id', (req, res) => {
    var id = req.params.id;

    Subscriptionmaster001mb.findOne({ _id: id }, function(err, subscriptionmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscriptionmaster001mb',
                error: err
            });
        }

        if (!subscriptionmaster001mb) {
            return res.status(404).json({
                message: 'No such subscriptionmaster001mb'
            });
        }

        subscriptionmaster001mb.subpid = req.body.subpid ? req.body.subpid : subscriptionmaster001mb.subpid;
        subscriptionmaster001mb.subpname = req.body.subpname ? req.body.subpname : subscriptionmaster001mb.subpname;
        subscriptionmaster001mb.subscid = req.body.subscid.id ? req.body.subscid.id : subscriptionmaster001mb.subscid;
        subscriptionmaster001mb.description = req.body.description ? req.body.description : subscriptionmaster001mb.description;
        subscriptionmaster001mb.tenure = req.body.tenure ? req.body.tenure : subscriptionmaster001mb.tenure;
        subscriptionmaster001mb.amount = req.body.amount ? req.body.amount : subscriptionmaster001mb.amount;
        subscriptionmaster001mb.status = req.body.status ? req.body.status : subscriptionmaster001mb.status;
        subscriptionmaster001mb.discountflag = req.body.discountflag ? req.body.discountflag : subscriptionmaster001mb.discountflag;
        subscriptionmaster001mb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subscriptionmaster001mb.inserteduser;
        subscriptionmaster001mb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subscriptionmaster001mb.inserteddatetime;
        subscriptionmaster001mb.updateduser = req.body.updateduser ? req.body.updateduser : subscriptionmaster001mb.updateduser;
        subscriptionmaster001mb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subscriptionmaster001mb.updateddatetime;

        subscriptionmaster001mb.save(function(err, subscriptionmaster001mb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating subscriptionmaster001mb.',
                    error: err
                });
            }

            return res.json(subscriptionmaster001mb);
        });
    });
});
/**
 * @swagger
 * /api/subscriptionmaster001mb/{id}:
 *   delete:
 *    tags: [subscriptionmaster001mb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.delete('/api/subscriptionmaster001mb/:id', (req, res) => {
    var id = req.params.id;
    Subscriptionmaster001mb.findByIdAndRemove(id, function(err, subscriptionmaster001mb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subscriptionmaster001mb.',
                error: err
            });
        }

        return res.json({ message: 'Deleted Sucessfully' });
    });
});

//-----------------user001ws_doc-----------------//
/** 
 * @swagger
 * components:
 *    schemas:                 
 *      users001wb:
 *           type: object
 *           properties:
 *             firstname:
 *                   type: string
 *             lasttname:
 *                   type: string
 *             zipcode:                     
 *                   type: number
 *             employeeid:
 *                   type: number
 *             dob: 
 *                   type: string
 *             email:
 *                   type: string 
 *             confirmemail:
 *                   type: string
 *             sex:
 *                   type: string
 *             address1:
 *                   type: string
 *             address2:
 *                   type: string
 *             address3:
 *                   type: string
 *             city: 
 *                   type: string
 *             state: 
 *                   type: string
 *             country:
 *                   type: string
 *             mobile:
 *                   type: number
 *             landline:
 *                   type: number
 *             status:
 *                   type: string       
 *             inserteduser:
 *                   type: string
 *             inserteddatetime:
 *                   type: string
 *             updateduser:
 *                   type: string
 *             updateddatetime:
 *                   type: string     
 *             subscid:
 *                type: object 
 *                properties:
 *                    id:
 *                     type: string
 *             stateid:
 *                type: object 
 *                properties:
 *                    id:
 *                     type: string
 *             cityid: 
 *                type: object 
 *                properties:
 *                    id:
 *                     type: string
 *             countryid:
 *                type: object 
 *                properties:
 *                    id:
 *                     type: string 
 *             personid:
 *                type: object 
 *                properties:
 *                    id:
 *                     type: string 
 *             roleid:
 *                type: object 
 *                properties:
 *                    id:
 *                     type: string    
 * 
 */
// ********************** users001wb get method****************//
/**
 * @swagger
 * /api/users001wb:
 *   get:
 *     tags: [users001wb]
 *     summary: Get Method
 *     description: Retrieve the list of data
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: failed 
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/users001wb'
 */

app.get('/api/users001wb', (req, res) => {
    Users001wb.find(function(err, users001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting users001wb.',
                error: err
            });
        }
        return res.json(users001wb);
    });
});
/**
 * @swagger
 * /api/users001wb/{id}:
 *   get:
 *     tags: [users001wb]
 *     summary: Retrieve a data by id.
 *     description: Retrieve a data by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed 
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/users001wb'
 */
app.get('/api/users001wb/:id', (req, res) => {
    var id = req.params.id;
    Users001wb.findOne({ _id: id }, function(err, users001wb) {
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
});
/**
 * @swagger
 * /api/users001wb/user:
 *   post:
 *    tags: [users001wb]
 *    summary: Post Method
 *    description: Retrieve the list of data
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                          $ref: '#/components/schemas/users001wb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed
 */
app.post('/api/users001wb/user', async(req, res) => {
    const users001wb = new Users001wb();
    users001wb.subscid = req.body.subscid.id;
    users001wb.rolename = req.body.rolename.rolename;
    users001wb.personid = req.body.personid.id;
    users001wb.firstname = req.body.firstname;
    users001wb.lasttname = req.body.lasttname;
    users001wb.zipcode = req.body.zipcode;
    users001wb.employeeid = req.body.employeeid;
    users001wb.dob = req.body.dob;
    users001wb.email = req.body.email;
    users001wb.confirmemail = req.body.confirmemail;
    users001wb.sex = req.body.sex;
    users001wb.address1 = req.body.address1;
    users001wb.address2 = req.body.address2;
    users001wb.address3 = req.body.address3;
    users001wb.cityid = req.body.cityid.id;
    users001wb.stateid = req.body.stateid.id;
    users001wb.countryid = req.body.countryid.id;
    users001wb.mobile = req.body.mobile;
    users001wb.landline = req.body.landline;
    users001wb.status = req.body.status;
    users001wb.inserteduser = req.body.inserteduser;
    users001wb.inserteddatetime = req.body.inserteddatetime;
    users001wb.updateduser = req.body.updateduser;
    users001wb.updateddatetime = req.body.updateddatetime;

    const oldUser = await Users001wb.findOne({ email: users001wb.email });
    if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
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
        to: users001wb.email,
        subject: 'Sirius Matrimony Confirmation',
        template: 'mail',
        context: {
            name: "Sirius Matrimony"
        }
    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log('email sent' + info.response);
    })
    users001wb.save()
        .then((result) => {
            res.json({ message: 'user created' });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
});
/**
 * @swagger
 * /api/users001wb/{id}:
 *   put:
 *    tags: [users001wb]
 *    summary: Put Method
 *    description: Retrieve the list of data
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID of the user to retrieve.
 *        schema:
 *           type: string
 *    requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                       schema:
 *                         $ref: '#/components/schemas/users001wb'
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed 
 *         content:
 *             application/json:
 *                       schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/users001wb'
 */
app.put('/api/users001wb/:id', (req, res) => {
    var id = req.params.id;
    Users001wb.findOne({ _id: id }, function(err, users001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting users001wb',
                error: err
            });
        }
        if (!users001wb) {
            return res.status(404).json({
                message: 'No such users001wb'
            });
        }
        users001wb.subscid = req.body.subscid.id ? req.body.subscid.id : users001wb.subscid;
        users001wb.personid = req.body.personid.id ? req.body.personid.id : users001wb.personid;
        users001wb.rolename = req.body.rolename.rolename ? req.body.rolename.rolename : users001wb.rolename;
        users001wb.firstname = req.body.firstname ? req.body.firstname : users001wb.firstname;
        users001wb.lasttname = req.body.lasttname ? req.body.lasttname : users001wb.lasttname;
        users001wb.zipcode = req.body.zipcode ? req.body.zipcode : users001wb.zipcode;
        users001wb.employeeid = req.body.employeeid ? req.body.employeeid : users001wb.employeeid;
        users001wb.dob = req.body.dob ? req.body.dob : users001wb.dob;
        users001wb.email = req.body.email ? req.body.email : users001wb.email;
        users001wb.confirmemail = req.body.confirmemail ? req.body.confirmemail : users001wb.confirmemail;
        users001wb.sex = req.body.sex ? req.body.sex : users001wb.sex;
        users001wb.address1 = req.body.address1 ? req.body.address1 : users001wb.address1;
        users001wb.address2 = req.body.address2 ? req.body.address2 : users001wb.address2;
        users001wb.address3 = req.body.address3 ? req.body.address3 : users001wb.address3;
        users001wb.cityid = req.body.cityid.id ? req.body.cityid.id : users001wb.cityid;
        users001wb.stateid = req.body.stateid.id ? req.body.stateid.id : users001wb.stateid;
        users001wb.countryid = req.body.countryid.id ? req.body.countryid.id : users001wb.countryid;
        users001wb.mobile = req.body.mobile ? req.body.mobile : users001wb.mobile;
        users001wb.landline = req.body.landline ? req.body.landline : users001wb.landline;
        users001wb.status = req.body.status ? req.body.status : users001wb.status;
        users001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : users001wb.inserteduser;
        users001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : users001wb.inserteddatetime;
        users001wb.updateduser = req.body.updateduser ? req.body.updateduser : users001wb.updateduser;
        users001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : users001wb.updateddatetime;
        users001wb.save(function(err, users001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating users001wb.',
                    error: err
                });
            }
            return res.json(users001wb);
        });
    });
});
/**
 * @swagger
 * /api/users001wb/{id}:
 *   delete:
 *    tags: [users001wb]
 *    summary: Delete Method
 *    description: Delete the list of data
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Sucess
 *       500:
 *         description: failed 
 */
app.delete('/api/users001wb/:id', (req, res) => {
    var id = req.params.id;
    Users001wb.findByIdAndRemove(id, function(err, users001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the users001wb.',
                error: err
            });
        }
        return res.json({ message: 'Deleted successfully' });
    });
});