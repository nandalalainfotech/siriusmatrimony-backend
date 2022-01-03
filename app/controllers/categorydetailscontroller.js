
import * as categorydetailsservice from "../services/categorydetailsservice.js";

import express from 'express';

const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', categorydetailsservice.list);
router.get('/:id', categorydetailsservice.show);
router.post('/create', categorydetailsservice.create);
router.put('/:id', categorydetailsservice.update);
router.delete('/:id', categorydetailsservice.remove);

export default router;