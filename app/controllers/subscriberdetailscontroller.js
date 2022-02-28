import * as subscriberdetails from "../services/subscriberdetailsservice.js";

import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/verify',subscriberdetails.verify)
router.get('/list', subscriberdetails.list);
router.get('/:id', subscriberdetails.show);
router.post('/create', subscriberdetails.create);
router.put('/:personid/:loginid/:subid', subscriberdetails.update);
router.delete('/:personid/:loginid/:subid', subscriberdetails.remove);

export default router;