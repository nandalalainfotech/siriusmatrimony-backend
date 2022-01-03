import * as subscriberprofessionalinfoservice from "../services/subscriberprofessionalinfoservice.js";
import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', subscriberprofessionalinfoservice.list);
router.get('/:id', subscriberprofessionalinfoservice.show);
router.post('/create', subscriberprofessionalinfoservice.create);
router.put('/:id', subscriberprofessionalinfoservice.update);
router.delete('/:id', subscriberprofessionalinfoservice.remove);

export default router;