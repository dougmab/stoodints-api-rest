const { Router } = require('express');
const userController = require('../controllers/User');

const router = new Router();

router.get('/', userController.index);
router.post('/', userController.store);

module.exports = router;
