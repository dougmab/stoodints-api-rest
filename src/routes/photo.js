const { Router } = require('express');

const photoController = require('../controllers/Photo');

const router = new Router();

router.post('/', photoController.store);

module.exports = router;
