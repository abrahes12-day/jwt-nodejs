const controller = require('../controller/Users');
const router = require('express').Router();
const verifyToken = require('../middleware/VerifyToken');
const refreshToken = require('../controller/RefreshToken');

router.get('/users', verifyToken, controller.getUser);
router.post('/registration', controller.register);
router.post('/login', controller.login);
router.get('/token', refreshToken);
router.delete('/logout', controller.logout);

module.exports = router;