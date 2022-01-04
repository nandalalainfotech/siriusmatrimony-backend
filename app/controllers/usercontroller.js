import * as userservice from "../services/userservice.js";

import express from 'express';

const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/username', userservice.getUser);

router.post('/createUser', userservice.createUser);


export default router;