const multer = require('multer');
const multerConfig = require('../config/multer');

const upload = multer(multerConfig).single('image');

class PhotoController {
  async store(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      return res.json(req.file);
    });
  }
}

module.exports = new PhotoController();
