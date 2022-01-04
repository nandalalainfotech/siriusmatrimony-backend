import * as countrycontroller from "../services/countryservice.js";

import express from 'express';

const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', countrycontroller.list);
router.get('/:id', countrycontroller.show);
router.post('/create', countrycontroller.create);
router.put('/:id', countrycontroller.update);
router.delete('/:id', countrycontroller.remove);

export default router;
// Country001mb.find({_id:'61d2b34ec10e1306343d0625'}).populate('companyname', 'address').exec(function (err, Country001mb) {