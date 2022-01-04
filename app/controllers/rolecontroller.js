import * as roleservice from "../services/roleservice.js";
import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', roleservice.list);
router.get('/:id', roleservice.show);
router.post('/create', roleservice.create);
router.put('/:id', roleservice.update);
router.delete('/:id', roleservice.remove);

export default router;