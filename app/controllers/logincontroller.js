import * as loginservice from "../services/loginservice.js";

import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', loginservice.list);
router.get('/:id', loginservice.show);
router.post('/create', loginservice.create);
router.put('/:id', loginservice.update);
router.delete('/:id', loginservice.remove);

export default router;