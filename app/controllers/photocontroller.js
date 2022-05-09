import * as photoservice from "../services/photoservice.js";

import express from 'express';
import upload from "../middleware/upload.js";
const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
router.get('/show/:filename', photoservice.show);
router.post('/create',[upload.single("image")], photoservice.create);

router.get('/list', photoservice.list);

router.put('/update/:id',[upload.single("image")], photoservice.update);
router.delete('/:id', photoservice.remove);

export default router;