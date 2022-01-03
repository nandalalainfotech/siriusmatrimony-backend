import * as companydetailsservice from "../services/companydetailsservice.js";

import express from 'express';

const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', companydetailsservice.list);
router.get('/:id', companydetailsservice.show);
router.post('/create', companydetailsservice.create);
router.put('/:id', companydetailsservice.update);
router.delete('/:id', companydetailsservice.remove);

export default router;