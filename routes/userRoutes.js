const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/protected', authMiddleware, (req, res) => {
    // Esta rota está protegida, apenas usuários autenticados podem acessá-la
});
module.exports = router;
