import * as contentmasterservice from "../services/contentmasterservice.js";

import express from 'express';

const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', contentmasterservice.list);
router.get('/:id', contentmasterservice.show);
router.post('/create', contentmasterservice.create);
router.put('/:id', contentmasterservice.update);
router.delete('/:id', contentmasterservice.remove);

export default router;