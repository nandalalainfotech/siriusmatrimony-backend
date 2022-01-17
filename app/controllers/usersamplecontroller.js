import * as usersampleservice from "../services/usersampleservice.js";

import express from 'express';

const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', usersampleservice.list);

router.get('/username', usersampleservice.getUser);

router.post('/create', usersampleservice.createUser);


export default router;