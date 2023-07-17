const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  // Se está tentando criar um usuário admin, então deve checar se o usuário solicitante é admin
  if (isAdmin === 1) {
    // Se não houver um usuário logado (não houver um token), retorna erro
    if (!req.isAdmin) {
      return res.status(403).json({ error: 'User does not have admin privileges' });
    }
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      isAdmin: Boolean(isAdmin), // Garante que será um valor booleano
    });

    res.status(201).json({
      message: 'User created successfully',
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    console.log('Password comparison result:', validPassword);

    if (!validPassword) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const isAdmin = user.isAdmin; // Obtém o valor isAdmin do usuário

    const token = jwt.sign({ email, isAdmin }, 'swordfish', { expiresIn: '1h' });

    res.status(200).json({ message: 'Authenticated successfully', token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

