const { Router } = require('express');
const loginReq = require('../middlewares/loginRequired');
const userController = require('../controllers/User');

const router = new Router();

router.get('/', loginReq, userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);

router.put('/', loginReq, userController.update);

router.delete('/', loginReq, userController.delete);

module.exports = router;
