import * as usersservice from "../services/usersservice.js";

import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.put('/update', usersservice.update);
router.get('/verify',usersservice.verify)
router.get('/list', usersservice.list);
router.get('/:id', usersservice.show);
router.post('/create', usersservice.create);
router.delete('/:personid/:loginid/:userid', usersservice.remove);
export default router;