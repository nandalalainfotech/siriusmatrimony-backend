import mongoose from "mongoose";
import country001mb from "./country001mb.js";
import categorydetails001mb from "./categorydetails001mb.js";
import companydetails001mb from "./companydetails001mb.js";
import contentmaster001mb from "./contentmaster001mb.js";
import language001mb from "./language001mb.js";
import regionaldetails001mb from "./regionaldetails001mb.js";
import religion001mb from "./religion001mb.js";
import subscriberdetails001wb from "./subscriberdetails001wb.js";
import state001mb from "./state001mb.js";
import subcatclassification001mb from "./subcatclassification001mb.js";
import subcategory001mb from "./subcategory001mb.js";
import subscribercontent001wb from "./subscribercontent001wb.js";
import subscribercontentauth001wb from "./subscribercontentauth001wb.js";
import subscriberpersonalinfo001wb from "./subscriberpersonalinfo001wb.js";
import subscriberprofessionalinfo002wb from "./subscriberprofessionalinfo002wb.js";
import subscriptionmaster001mb from "./subscriptionmaster001mb.js";
import usersample001mb from "./usersample001mb.js";
import review001mb from "./review001mb.js";
import users001wb from "./users001wb.js";
import photo001wb from "./photo001wb.js";
import video001wb from "./video001wb.js";
import role001wb from "./role001wb.js";
import city001mb from "./city001mb.js"
import audio001wb from "./audio001wb.js"
import person001mb from "./person001mb.js"

mongoose.Promise = global.Promise;
const db = {};

db.mongoose = mongoose;
db.country001mb = country001mb;
db.categorydetails001mb = categorydetails001mb;
db.companydetails001mb = companydetails001mb;
db.contentmaster001mb = contentmaster001mb;
db.language001mb = language001mb;
db.regionaldetails001mb = regionaldetails001mb;
db.religion001mb = religion001mb;
db.subscriberdetails001wb = subscriberdetails001wb;
db.state001mb = state001mb;
db.subcatclassification001mb = subcatclassification001mb;
db.subcategory001mb = subcategory001mb;
db.subscribercontent001wb = subscribercontent001wb;
db.subscribercontentauth001wb = subscribercontentauth001wb;
db.subscriberpersonalinfo001wb = subscriberpersonalinfo001wb;
db.subscriberprofessionalinfo002wb = subscriberprofessionalinfo002wb;
db.subscriptionmaster001mb = subscriptionmaster001mb;
db.usersample001mb = usersample001mb;
db.review001mb = review001mb;
db.users001wb = users001wb;
db.photo001wb = photo001wb;
db.video001wb = video001wb;
db.role001wb = role001wb;
db.city001mb = city001mb;
db.audio001wb = audio001wb;
db.person001mb = person001mb ;
export default db;