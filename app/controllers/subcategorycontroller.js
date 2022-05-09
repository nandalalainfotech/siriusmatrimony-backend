import * as subcategoryservice from "../services/subcategoryservice.js";
import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', subcategoryservice.list);
router.get('/:id', subcategoryservice.show);
router.post('/create', subcategoryservice.create);
router.put('/:id/update', subcategoryservice.update);
router.delete('/:id/delete', subcategoryservice.remove);

export default router;