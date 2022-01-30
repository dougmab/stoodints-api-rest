const { Router } = require('express');
const userController = require('../controllers/User');

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

module.exports = router;
