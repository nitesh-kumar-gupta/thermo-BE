const multer=require('multer');
const uuid = require('node-uuid');
const fs = require('fs');
const dir = './tmp';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        let uuid1 = uuid.v1().replace(/-/g,'');
        cb(null, uuid1);
    }
});
const upload = multer({
    storage: storage
})
module.exports=upload;