import * as personroleservice from "../services/personroleservice.js";
import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', personroleservice.list);
router.get('/:id', personroleservice.show);
router.post('/create', personroleservice.create);
router.put('/:id', personroleservice.update);
router.delete('/:id', personroleservice.remove);

export default router;