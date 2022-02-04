class PhotoController {
  store(req, res) {
    res.json(req.file);
  }
}

module.exports = new PhotoController();
