const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/registerUser', userController.registerUser);
router.post('/registerAdmin', authMiddleware, userController.registerAdmin);
router.post('/login', userController.login);
router.delete('/:id', authMiddleware, userController.deleteUser);
router.get('/protected', authMiddleware, (req, res) => {
    // Esta rota está protegida, apenas usuários autenticados podem acessá-la
});
module.exports = router;
