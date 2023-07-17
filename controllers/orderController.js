const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { products, totalPrice } = req.body;

    // Obtém o ID do usuário logado
    const userId = req.userId;

    // Cria a ordem de compra com os produtos e o valor total
    const order = await Order.create({
      userId,
      products,
      totalPrice,
    });

    res.status(201).json({
      message: 'Order created successfully',
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    // Obtém o ID do usuário logado
    const userId = req.userId;

    // Busca todas as ordens de compra do usuário logado
    const orders = await Order.findAll({ where: { userId } });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const { id } = req.params;

    // Obtém o ID do usuário logado
    const userId = req.userId;

    // Busca a ordem de compra pelo ID, verificando se pertence ao usuário logado
    const order = await Order.findOne({ where: { id, userId } });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { products, totalPrice } = req.body;

    // Obtém o ID do usuário logado
    const userId = req.userId;

    // Busca a ordem de compra pelo ID, verificando se pertence ao usuário logado
    const order = await Order.findOne({ where: { id, userId } });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Atualiza os dados da ordem de compra
    order.products = products;
    order.totalPrice = totalPrice;
    await order.save();

    res.status(200).json({ message: 'Order updated successfully', order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    // Obtém o ID do usuário logado
    const userId = req.userId;

    // Busca a ordem de compra pelo ID, verificando se pertence ao usuário logado
    const order = await Order.findOne({ where: { id, userId } });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Exclui a ordem de compra
    await order.destroy();

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
