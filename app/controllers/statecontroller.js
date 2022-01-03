import * as stateservice from "../services/stateservice.js";
import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', stateservice.list);
router.get('/:id', stateservice.show);
router.post('/create', stateservice.create);
router.put('/:id', stateservice.update);
router.delete('/:id', stateservice.remove);

export default router;