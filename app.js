const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes'); 
const authMiddleware = require('./middlewares/authMiddleware');

app.use(express.json());
app.use(cors());

// Rotas sem autenticação
app.use('/api/users', userRoutes);

// Rotas com autenticação
app.use('/api/categories', authMiddleware, categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', authMiddleware, orderRoutes); 

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
