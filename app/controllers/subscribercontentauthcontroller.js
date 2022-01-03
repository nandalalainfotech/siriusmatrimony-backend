import * as subscribercontentauthservice from "../services/subscribercontentauthservice.js";
import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', subscribercontentauthservice.list);
router.get('/:id', subscribercontentauthservice.show);
router.post('/create', subscribercontentauthservice.create);
router.put('/:id', subscribercontentauthservice.update);
router.delete('/:id', subscribercontentauthservice.remove);

export default router;