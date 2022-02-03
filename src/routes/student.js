const { Router } = require('express');
const studentController = require('../controllers/Student');
const loginReq = require('../middlewares/loginRequired');

const router = new Router();

router.get('/', studentController.index);
router.get('/:id', studentController.show);

router.post('/', loginReq, studentController.store);

router.put('/:id', loginReq, studentController.update);

router.delete('/:id', loginReq, studentController.delete);

module.exports = router;
