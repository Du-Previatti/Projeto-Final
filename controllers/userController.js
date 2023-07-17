const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  try {
    let user;

    // Verifica se está criando um novo usuário admin
    if (isAdmin === 1) {
      // Verifica se o usuário logado possui permissões de administrador
      if (!req.isAdmin) {
        return res.status(403).json({ error: 'User does not have admin privileges' });
      }

      // Cria o usuário admin
      const hashedPassword = await bcrypt.hash(password, 10);
      user = await User.create({
        name,
        email,
        password: hashedPassword,
        isAdmin: true,
      });
    } else {
      // Cria o usuário não admin
      user = await User.create({
        name,
        email,
        password,
        isAdmin: false,
      });
    }

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

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Verifica se o usuário logado possui permissões de administrador
    if (!req.isAdmin) {
      return res.status(403).json({ error: 'You are not authorized to delete this user' });
    }

    // Procedimento para excluir o usuário
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy();

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

