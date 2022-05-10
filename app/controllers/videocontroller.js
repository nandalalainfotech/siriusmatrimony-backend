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
router.get('/show/:filename', videoservice.show);
router.put('/update/:id', [videoUpload.single("video")], videoservice.update);
router.delete('/:id', videoservice.remove);
router.post('/create', [videoUpload.single("video")], videoservice.create);

export default router;