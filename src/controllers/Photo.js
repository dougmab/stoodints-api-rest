const multer = require('multer');

const { Photo } = require('../models');
const multerConfig = require('../config/multer');

const upload = multer(multerConfig).single('image');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      const { originalname, filename } = req.file;
      const { studentId } = req.body;
      const photo = await Photo.create({ originalname, filename, student_id: studentId });

      return res.json(photo);
    });
  }
}

module.exports = new PhotoController();
