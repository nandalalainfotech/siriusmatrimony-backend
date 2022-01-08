import multer from "multer";
import path from "path";

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {  
  callback(null, './upload');
    
  },
  filename: (req,file,cb)=> {  
    cb(null, file.fieldname + ' - ' + Date.now() + path.extname(file.originalname))
}
});

const upload = multer({ storage });
export default upload;
