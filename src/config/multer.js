const multer = require('multer');
const { extname, resolve } = require('path');
const { existsSync, mkdirSync } = require('fs');

const random = () => Math.floor(Math.random() * 10000 + 10000);

const uploadDir = resolve(__dirname, '..', '..', 'uploads');

if (!existsSync(uploadDir)) {
  mkdirSync(uploadDir);
}

module.exports = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  }),
};
