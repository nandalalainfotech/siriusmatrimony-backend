import * as languageservice from "../services/languageservice.js";
import rolebaseauth from "../middleware/roleauth.js";
import verifyToken from "../middleware/auth.js";
import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With", "Authorization");
    next();
});

router.get('/list', verifyToken, languageservice.list);
router.get('/:id', verifyToken, languageservice.show);
router.post('/create', verifyToken, rolebaseauth(["admin"]), languageservice.create);
router.put('/:id', verifyToken, rolebaseauth(["user", "admin"]), languageservice.update);
router.delete('/:id', verifyToken, rolebaseauth(["user", "admin"]), languageservice.remove);

export default router;