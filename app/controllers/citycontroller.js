import * as citycontroller from "../services/cityservice.js";

import express from 'express';

const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', citycontroller.list);
router.get('/:id', citycontroller.show);
router.post('/create', citycontroller.create);
router.put('/:id', citycontroller.update);
router.delete('/:id', citycontroller.remove);

export default router;
