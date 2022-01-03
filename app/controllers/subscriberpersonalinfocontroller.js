import * as subscriberpersonalinfoservice from "../services/subscriberpersonalinfoservice.js";
import express from 'express'

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', subscriberpersonalinfoservice.list);
router.get('/:id', subscriberpersonalinfoservice.show);
router.post('/create', subscriberpersonalinfoservice.create);
router.put('/:id', subscriberpersonalinfoservice.update);
router.delete('/:id', subscriberpersonalinfoservice.remove);

export default router;