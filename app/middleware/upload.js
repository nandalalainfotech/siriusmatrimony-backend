import multer from "multer";
import path from "path";
import { GridFsStorage } from "multer-gridfs-storage";
import crypto from "crypto";

const url = 'mongodb+srv://sirius_db:ChettyStreet2021@siriuscluster.hkn0z.mongodb.net/siriusdb?retryWrites=true&w=majority';
const storage = new GridFsStorage({
    url: url,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads',
                };
                resolve(fileInfo);
            });
        });
    },
});

const upload = multer({ storage });
export default upload;
