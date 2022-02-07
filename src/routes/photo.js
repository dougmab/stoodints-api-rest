const { Router } = require('express');
const loginReq = require('../middlewares/loginRequired');

const photoController = require('../controllers/Photo');

const router = new Router();

router.post('/', loginReq, photoController.store);

module.exports = router;
