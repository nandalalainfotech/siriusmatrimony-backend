import * as religionservice from "../services/religionservice.js";

import express from 'express';

const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/', religionservice.list);
router.get('/:id', religionservice.show);
router.post('/', religionservice.create);
router.put('/:id', religionservice.update);
router.delete('/:id', religionservice.remove);

export default router;