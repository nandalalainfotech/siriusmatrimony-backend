import * as paymentservice from "../services/paymentservice.js";

import express from 'express';

const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', paymentservice.list);
router.get('/:id', paymentservice.show);
router.post('/create', paymentservice.create);
router.put('/:id', paymentservice.update);
router.delete('/:id', paymentservice.remove);

export default router;
