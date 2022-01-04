import * as photoservice from "../services/photoservice.js";

import express from 'express';

const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', photoservice.list);
router.get('/:id', photoservice.show);
router.post('/create', photoservice.create);
router.put('/:id', photoservice.update);
router.delete('/:id', photoservice.remove);

export default router;