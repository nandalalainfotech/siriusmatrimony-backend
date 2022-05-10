import * as audioservice from "../services/audioservice.js";
import express from 'express';
import upload from "../middleware/audio.js";

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', audioservice.list);
router.get('/show/:filename', audioservice.show);
router.post('/create' , [upload.single("audio")], audioservice.create);
router.put('/update/:id' , [upload.single("audio")], audioservice.update);
router.delete('/:id', audioservice.remove);

export default router;