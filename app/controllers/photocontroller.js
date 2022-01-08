import * as photoservice from "../services/photoservice.js";

import express from 'express';
import upload from "../middleware/upload.js";
const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/list', photoservice.list);
router.get('/:id', photoservice.show);
router.put('/:id', photoservice.update);
router.delete('/:id', photoservice.remove);

router.post('/create',[upload.single("file")], photoservice.upload);
export default router;