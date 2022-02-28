import * as loginservice from "../services/loginservice.js";

import express from 'express';
import verifyToken from "../middleware/auth.js";

const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/:username/:password', loginservice.loginauth);
router.get('/list', loginservice.list);
router.get('/:id', loginservice.show);
export default router;