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
import nodemailer from "nodemailer";
// import swaggerDocument from "./swagger";
import swaggerjsdoc from "swagger-jsdoc";
import role001wb from "./app/models/role001wb.js";
const app = express();
app.use(cors());
dotenv.config();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, UPDATE, OPTIONS, HEAD")
    next();
});


// const router = express.Router();

// router.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });

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
const Subsriberdetails001wb = db.subscriberdetails001wb;


app.use(bodyParser.urlencoded({ extended: true }));

function initial() {
    // Login001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Login001mb.insertMany([{
    //                 'logintype': "mobile no ",
    //                 'password': "xyz",
    //                 'inserteduser': "raj",
    //                 'inserteddatetime': 11 / 12 / 22,
    //                 'updateddatetime': 11 / 12 / 22,
    //                 'updateduser': "raj",

    //             }, ])
    //             .then(() => {})
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Country001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Country001mb.insertMany([{
    //                 'countryid': 123,
    //                 'countryname': "palls",
    //                 'countrydesc': "good",
    //                 'status': "good",
    //                 'inserteduser': "raj",
    //                 'inserteddatetime': 11 / 12 / 22,
    //                 'updateddatetime': 11 / 12 / 22,
    //                 'updateduser': "raj",

    //             }, ])
    //             .then(() => {})
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // City001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         City001mb.insertMany([{
    //                 'cityid': 123,
    //                 'cityname': "xyz",
    //                 'citydesc': "good",
    //                 'status': "good",
    //                 'inserteduser': "raj",
    //                 'inserteddatetime': 11 / 12 / 22,
    //                 'updateddatetime': 11 / 12 / 22,
    //                 'updateduser': "raj",

    //             }, ])
    //             .then(() => {})
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Categorydetails001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Categorydetails001mb.insertMany([{
    //                     'catcode': "T867",
    //                     'catname': "C22",
    //                     'status': "GOOD",
    //                     'inserteduser': "raj",
    //                     'inserteddatetime': 11 / 12 / 2021,
    //                     'updateduser': "raj",
    //                     'updateddatetime': 11 / 12 / 2021
    //                 }

    //             ])
    //             .then(() => {})
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Companydetails001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Companydetails001mb.insertMany([{
    //                     'companycode': "S33",
    //                     'companyname': "XYZ",
    //                     'address': "street",
    //                     'phonenumber': 78778876,
    //                     'regionalid': 98,
    //                     'status': "good",
    //                     'inserteduser': "raj",
    //                     'inserteddatetime': 11 / 12 / 2021,
    //                     'updateduser': "raj",
    //                     'updateddatetime': 11 / 12 / 2021
    //                 }

    //             ])
    //             .then(() => {})
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Contentmaster001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Contentmaster001mb.insertMany([{
    //                     'contentid': 6767,
    //                     'name': "RAJ",
    //                     'description': "good",
    //                     'size': "222",
    //                     'quality': "good",
    //                     'format': "size",
    //                     'status': "good",
    //                     'discountflag': true,
    //                     'inserteduser': "raj",
    //                     'inserteddatetime': 11 / 12 / 2021,
    //                     'updateduser': "raj",
    //                     'updateddatetime': 11 / 12 / 2021
    //                 }

    //             ])
    //             .then(() => {})
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Language001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Language001mb.insertMany([{
    //                     'languageid': 77,
    //                     'languagename': "raj",
    //                     'languagedesc': "ok",
    //                     'status': "good",
    //                     'inserteduser': "raj",
    //                     'inserteddatetime': 11 / 12 / 2021,
    //                     'updateduser': "raj",
    //                     'updateddatetime': 11 / 12 / 2021
    //                 }

    //             ])
    //             .then(() => {})
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Regionaldetails001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Regionaldetails001mb.insertMany([{
    //                     'regionalid': 544,
    //                     'regionalname': "RAJ",
    //                     'regionaldesc': "good",
    //                     'status': "good",
    //                     'inserteduser': "raj",
    //                     'inserteddatetime': 11 / 12 / 2021,
    //                     'updateduser': "raj",
    //                     'updateddatetime': 11 / 12 / 2021
    //                 }

    //             ])
    //             .then(() => {})
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Religion001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Religion001mb.insertMany([{
    //                     'regionalid': 666,
    //                     'regionalname': "RAJ",
    //                     'regionaldesc': "good",
    //                     'status': "good",
    //                     'inserteduser': "raj",
    //                     'inserteddatetime': 11 / 12 / 2021,
    //                     'updateduser': "raj",
    //                     'updateddatetime': 11 / 12 / 2021
    //                 }

    //             ])
    //             .then(() => {})
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Subscriberdetails001wb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Subscriberdetails001wb.insertMany([{
    //                      'regionalid': 434,
    //                       'companycode': 3443,
    //                          'catcode': 4343,
    //                         'subcatcode': 4343,
    //                        'categoryid': 4343,
    //                         'subscid': 434,
    //                         'subscname': "RAJ",
    //                     '  classificationid': 898,
    //                         'sex': "male",
    //                         'subscdesc': "good",
    //                         'aboutme': "good",
    //                         'address': "street",
    //                         'phoneno': 77787,
    //                         'subscapproval': true,
    //                         'approvedby': "raj",
    //                         'approvedon': 11 / 12 / 2021,
    //                         'subscsubspid': 786,
    //                         'subscstatus': "good",
    //                         'inserteduser': "raj",
    //                         'inserteddatetime': 11 / 12 / 2021,
    //                         'updateduser': "raj",
    //                         'updateddatetime': 11 / 12 / 2021
    //                 }

    //             ])
    //             .then(() => {})
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // State001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         State001mb.insertMany([{
    //                     'stateid': 123,
    //                     'statename': "sri",
    //                     'statedesc': "good",
    //                     'status': "active",
    //                     'inserteduser': "aravindh",
    //                     'inserteddatetime': 11 / 12 / 22,
    //                     'updateduser': "sam",
    //                     'updateddatetime': 9 / 12 / 22,
    //                 }

    //             ])
    //             .then(() => {

    //             })
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Subcatclassification001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Subcatclassification001mb.insertMany([{
    //                     'catcode': "ab12",
    //                     'subcatcode': "ab13",
    //                     'classificationid': 1234,
    //                     'classificationname': "dass",
    //                     'status': "good",
    //                     'inserteduser': "aravindh",
    //                     'inserteddatetime': 11 / 12 / 22,
    //                     'updateduser': "chandru",
    //                     'updateddatetime': 6 / 12 / 22
    //                 }

    //             ])
    //             .then(() => {

    //             })
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Subcategory001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Subcategory001mb.insertMany([{
    //                     'catcode': "a2b",
    //                     'subcatcode': "s21",
    //                     'subcatname': "sri",
    //                     'subcatstatus': "active",
    //                     'status': "good",
    //                     'inserteduser': "aravind",
    //                     'inserteddatetime': 11 / 12 / 22,
    //                     'updateduser': "chandru",
    //                     'updateddatetime': 9 / 12 / 22
    //                 }

    //             ])
    //             .then(() => {

    //             })
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Usersample001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Usersample001mb.insertMany([{
    //                     'username': "Raj",
    //                     'password': "****",
    //                     'securityquestion': "xys",
    //                     'securityanswer': "xys"

    //                 }

    //             ])
    //             .then(() => {

    //             })
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Review001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Review001mb.insertMany([{
    //                 'comments': "good",
    //                 'rating': "9",
    //                 'status': "good"
    //             }])
    //             .then(() => {

    //             })
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Subscribercontent001wb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Subscribercontent001wb.insertMany([{
    //                     'subscid': 123,
    //                     'subsccontentid1': 12,
    //                     'subsccontentidattach1': 123,
    //                     'subsccontentidappovalflag1': true,
    //                     'subsccontentidattach2': 34,
    //                     'subsccontentidappovalflag2': false,
    //                     'subsccontentidattachn': 12,
    //                     'subsccontentidappovalflagn': false,
    //                     'inserteduser': "wedas",
    //                     'inserteddatetime': 11 / 12 / 22,
    //                     'updateduser': "fsdf",
    //                     'updateddatetime': 8 / 12 / 22
    //                 }

    //             ])
    //             .then(() => {

    //             })
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Subscribercontentauth001wb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Subscribercontentauth001wb.insertMany([{
    //             'subscid': 123,
    //             'subscsubpid': 12,
    //             'subscsubpstatus': "good",
    //             'subscsubpstartdate': 1 / 12 / 22,
    //             'subscsupbenddate': 2 / 12 / 22,
    //             'inserteduser': "aravindh",
    //             'inserteddatetime': 3 / 12 / 22,
    //             'updateduser': "chandru",
    //             'updateddatetime': 4 / 12 / 22
    //         }

    //         ])
    //             .then(() => {

    //             })
    //             .catch((err) => console.log("error", err));
    // }
    // });
    // Subscriberpersonalinfo001wb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Subscriberpersonalinfo001wb.insertMany([{
    //                     'subcid': 12,
    //                     'personaldetails': "my details?",
    //                     'hobbies': "playing",
    //                     'flex1': "flex1",
    //                     'flex2': "flex2",
    //                     'flex3': "flex3",
    //                     'flex4': "flex4",
    //                     'flex5': "flex5",
    //                     'flex6': "flex6",
    //                     'flex7': "flex7",
    //                     'flex8': "flex8",
    //                     'flex9': "flex9",
    //                     'flex10': "flex10",
    //                     'flex11': "flex11",
    //                     'flex12': "flex12",
    //                     'inserteduser': "aravindh",
    //                     'inserteddatetime': 3 / 11 / 22,
    //                     'updateduser': "chandru",
    //                     'updateddatetime': 4 / 12 / 22
    //                 }

    //             ])
    //             .then(() => {

    //             })
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Subscriberprofessionalinfo002wb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Subscriberprofessionalinfo002wb.insertMany([{
    //                      'subcid': 12,
    //                     'professionaldetails': "hi",
    //                     'job': "engineer",
    //                     'flex1': "flex1",
    //                     'flex2': "flex2",
    //                     'flex3': "flex3",
    //                     'flex4': "flex4",
    //                     'flex5': "flex5",
    //                     'flex6': "flex6",
    //                     'flex7': "flex7",
    //                     'flex8': "flex8",
    //                     'flex9': "flex9",
    //                     'flex10': "flex10",
    //                     'flex11': "flex11",
    //                     'flex12': "flex12",
    //                     'inserteduser': "raj",
    //                     'inserteddatetime': 3 / 11 / 22,
    //                     'updateduser': "sri",
    //                     'updateddatetime': 4 / 12 / 22
    //                 }

    //             ])
    //             .then(() => {

    //             })
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Video001wb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Video001wb.insertMany([{
    //                     'category': "s222",
    //                     'filename': "img.png",
    //                     'originalfilename': "video",
    //                     'status': "active",
    //                     'content': "678667",
    //                     'inserteduser': "raj",
    //                     'inserteddatetime': 6 / 11 / 22,
    //                     'updateduser': "raju",
    //                     'updateddatetime': 7 / 11 / 22
    //                 }

    //             ])
    //             .then(() => {

    //             })
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Photo001wb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Photo001wb.insertMany([{
    //                     'category': "s222",
    //                     'filename': "img.png",
    //                     'originalname': "photo",
    //                     'content': "678667",
    //                     'status': "active",
    //                     'inserteduser': "raj",
    //                     'inserteddatetime': 6 / 11 / 22,
    //                     'updateduser': "raju",
    //                     'updateddatetime': 7 / 11 / 22
    //                 }

    //             ])
    //             .then(() => {

    //             })
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Person001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Person001mb.insertMany([{
    //                     'status': "active",
    //                     'inserteduser': "raj",
    //                     'inserteddatetime': 5 / 11 / 22,
    //                     'updateduser': "raju",
    //                     'updateddatetime': 12 / 11 / 22
    //                 }

    //             ])
    //             .then(() => {

    //             })
    //             .catch((err) => console.log("error", err));
    //     }
    // });

    // Users001wb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Users001wb.insertMany([{
    //                     'firstname': "RAJ",
    //                     'lasttname': "d",
    //                     'zipcode': 1223243,
    //                     'employeeid': 8778,
    //                     'dob': 3 / 11 / 2000,
    //                     'email': "xyz@gmail.com",
    //                     'confirmemail': "xyz@gmail.com",
    //                     'sex': "male",
    //                     'address1': "xyz",
    //                     'address2': "xyz",
    //                     'address3': "xyz",
    //                     'city': "chennai",
    //                     'state': "tn",
    //                     'country': "india",
    //                     'mobile': 76886797974,
    //                     'landline': 423321211,
    //                     'status': "active",
    //                     'inserteduser': "raj",
    //                     'inserteddatetime': 5 / 11 / 22,
    //                     'updateduser': "raju",
    //                     'updateddatetime': 12 / 11 / 22
    //                 }

    //             ])
    //             .then(() => {

    //             })
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Subscriptionmaster001mb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Subscriptionmaster001mb.insertMany([{
    //                     'subpid': 1212,
    //                     'subpname': "sri",
    //                     'description': "good",
    //                     'tenure': "3 years",
    //                     'amount': 23,
    //                     'status': "active",
    //                     'discountflag': true,
    //                     'inserteduser': "aravindh",
    //                     'inserteddatetime': 3 / 11 / 22,
    //                     'updateduser': "selvam",
    //                     'updateddatetime': 3 / 11 / 22
    //                 }

    //             ])
    //             .then(() => {

    //             })
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Role001wb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Role001wb.insertMany([{
    //                 'rolename': "farmer",
    //                 'status': "active",
    //                 'discountflag': true,
    //                 'inserteduser': "aravindh",
    //                 'inserteddatetime': 3 / 11 / 22,
    //                 'updateduser': "selvam",
    //                 'updateddatetime': 3 / 11 / 22
    //             }])
    //             .then(() => {})
    //             .catch((err) => console.log("error", err));
    //     }
    // });
    // Audio001wb.estimatedDocumentCount((err, count) => {
    //     if (!err && count === 0) {
    //         Audio001wb.insertMany([{
    //                 'category': "s222",
    //                 'filename': "img.mp3",
    //                 'originalfilename': "audio",
    //                 'content': "678667",
    //                 'status': "active",
    //                 'inserteduser': "raj",
    //                 'inserteddatetime': 6 / 11 / 22,
    //                 'updateduser': "raju",
    //                 'updateddatetime': 7 / 11 / 22
    //             }])
    //             .then(() => {})
    //             .catch((err) => console.log("error", err));
    //     }
    // });
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

const PORT = process.env.PORT || 8081;

db.mongoose
    .connect(process.env.DATABASE_URI, {

        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {

        console.log(`Successfully connect to MongoDB .`);
        initial();
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
            title: 'API Testing on Swagger',
            version: '1.0.0',
            description: 'Generate a Api',
        },

    },
    apis: ['index.js'],
};
const specs = swaggerjsdoc(options);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));

// **********************schema method****************//
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
 *             roleid:
 *                type: object 
 *                properties:
 *                    id:
 *                     type: string    
 * 
 */


// ------------------ role001wb-----------------


// **********************get method****************//
/**
 * @swagger
 * /api/role001wb:
 *   get:
 *     tags:
 *       - Role001wb
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

// ------------------ users001wb -----------------

// **********************get method****************//
/**
 * @swagger
 * /api/users001wb:
 *   get:
 *     tags:
 *       - Users001wb
 *     summary: Get Method
 *     description: Retrieve the list of data
 *     responses:
 *       200:
 *         description: Success
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
 *     tags:
 *       - Users001wb
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
 * /api/users001wb/{id}:
 *   post:
 *    tags:
 *       [Users001wb]
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
 *         description: 
 */
app.post('/api/users001wb/:id', (req, res) => {

    var users001wb = new Users001wb();
    users001wb.subscid = req.body.subscid.id,
        users001wb.roleid = req.body.roleid.id,
        users001wb.firstname = req.body.firstname,
        users001wb.lasttname = req.body.lasttname,
        users001wb.zipcode = req.body.zipcode,
        users001wb.employeeid = req.body.employeeid,
        users001wb.dob = req.body.dob,
        users001wb.email = req.body.email,
        users001wb.confirmemail = req.body.confirmemail,
        users001wb.sex = req.body.sex,
        users001wb.address1 = req.body.address1,
        users001wb.address2 = req.body.address2,
        users001wb.address3 = req.body.address3,
        users001wb.cityid = req.body.cityid.id,
        users001wb.stateid = req.body.stateid.id,
        users001wb.countryid = req.body.countryid.id,
        users001wb.mobile = req.body.mobile,
        users001wb.landline = req.body.landline,
        users001wb.status = req.body.status,
        users001wb.inserteduser = req.body.inserteduser,
        users001wb.inserteddatetime = req.body.inserteddatetime,
        users001wb.updateduser = req.body.updateduser,
        users001wb.updateddatetime = req.body.updateddatetime

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gkraju987@gmail.com',
            pass: '987654321@0'
        }
    });
    const mailOptions = {
        from: 'gkraju987@gmail.com',
        to: users001wb.email,
        subject: 'test mail',
        html: '<h1>Mail Tested </h1>'
    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
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
 *    tags:
 *       [Users001wb]
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
        users001wb.roleid = req.body.roleid.id ? req.body.roleid.id : users001wb.role;
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
 *    tags:
 *        [Users001wb]
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

        return res.status(204).json();
    });
});