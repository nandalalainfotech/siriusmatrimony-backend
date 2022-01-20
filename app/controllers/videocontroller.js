import * as videoservice from "../services/videoservice.js";
import videoUpload from "../middleware/videoupload.js";
import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', videoservice.list);
router.get('/:id', videoservice.show);
router.put('/:id', videoservice.update);
router.delete('/:id', videoservice.remove);
router.post('/create', [videoUpload.single("file")], videoservice.create);

export default router;