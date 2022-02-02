const { Router } = require('express');
const studentController = require('../controllers/Student');

const router = new Router();

router.get('/', studentController.index);

module.exports = router;
