import * as subscribercontentservice from "../services/subscribercontentservice.js";

import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', subscribercontentservice.list);
router.get('/:id', subscribercontentservice.show);
router.post('/create', subscribercontentservice.create);
router.put('/:id', subscribercontentservice.update);
router.delete('/:id', subscribercontentservice.remove);

export default router;