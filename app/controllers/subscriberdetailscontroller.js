import * as subscriberdetails from "../services/subscriberdetailsservice.js";

import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/', subscriberdetails.list);
router.get('/:id', subscriberdetails.show);
router.post('/', subscriberdetails.create);
router.put('/:id', subscriberdetails.update);
router.delete('/:id', subscriberdetails.remove);

export default router;