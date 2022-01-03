import * as subscriberdetailscontroller from "../services/subscriberdetailsservice.js";
import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/', subscriberdetailscontroller.list);
router.get('/:id', subscriberdetailscontroller.show);
router.post('/', subscriberdetailscontroller.create);
router.put('/:id', subscriberdetailscontroller.update);
router.delete('/:id', subscriberdetailscontroller.remove);

module.exports = router;