const { Router } = require('express');
const tokenController = require('../controllers/Token');

const router = new Router();

router.post('/', tokenController.store);

module.exports = router;
