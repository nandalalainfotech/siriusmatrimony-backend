import * as usersservice from "../services/usersservice.js";

import express from 'express';
import verifyToken from "../middleware/auth.js";


const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', usersservice.list);

router.get('/:id', usersservice.show);
router.post('/create', usersservice.create);
router.put('/:id', usersservice.update);
router.delete('/:id', usersservice.remove);

export default router;