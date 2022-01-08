import * as personservice from "../services/personservice.js";

import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', personservice.list);
router.get('/:id', personservice.show);
router.post('/create', personservice.create);
router.put('/:id', personservice.update);
router.delete('/:id', personservice.remove);

export default router;