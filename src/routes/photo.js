const { Router } = require('express');
const multer = require('multer');

const photoController = require('../controllers/Photo');
const multerConfig = require('../config/multer');

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('image'), photoController.store);

module.exports = router;
