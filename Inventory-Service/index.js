const express = require('express');
const connectDB = require('./db');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();
app.use(express.json());

connectDB();

app.use('/inventory', inventoryRoutes);

const PORT = 5005;
app.listen(PORT, () => {
  console.log(`✅ Inventory Service running on port ${PORT}`);
});
