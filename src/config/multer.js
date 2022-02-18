const multer = require('multer');
const { extname, resolve } = require('path');
const { existsSync, mkdirSync } = require('fs');

const random = () => Math.floor(Math.random() * 10000 + 10000);

const uploadDir = resolve(__dirname, '..', '..', 'uploads', 'images');

if (!existsSync(uploadDir)) {
  mkdirSync(uploadDir);
}

module.exports = {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('File type not authorized, must be PNG or JPG/JPEG.'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  }),
};
