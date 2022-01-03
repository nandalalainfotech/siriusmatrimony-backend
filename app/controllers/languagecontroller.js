import * as languageservice from "../services/languageservice.js";

import express from 'express';

const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', languageservice.list);
router.get('/:id', languageservice.show);
router.post('/create', languageservice.create);
router.put('/:id', languageservice.update);
router.delete('/:id', languageservice.remove);

export default router;