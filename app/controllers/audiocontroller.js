import * as audioservice from "../services/audioservice.js";

import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', audioservice.list);
router.get('/:id', audioservice.show);
router.post('/create', audioservice.create);
router.put('/:id', audioservice.update);
router.delete('/:id', audioservice.remove);

export default router;