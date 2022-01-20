import * as regionaldetailsservice from "../services/regionaldetailsservice.js";

import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', regionaldetailsservice.list);
router.get('/:id', regionaldetailsservice.show);
router.post('/create', regionaldetailsservice.create);
router.put('/:id', regionaldetailsservice.update);
router.delete('/:id', regionaldetailsservice.remove);

export default router;