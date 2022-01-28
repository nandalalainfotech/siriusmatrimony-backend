import * as countryservice from "../services/countryservice.js";

import express from 'express';

const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', countryservice.list);
router.get('/:id', countryservice.show);
router.post('/create', countryservice.create);
router.put('/:id', countryservice.update);
router.delete('/:id', countryservice.remove);

export default router;
