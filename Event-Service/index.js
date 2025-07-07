const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const eventRoutes = require('./routes/eventRoutes');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected (Event Service)'))
  .catch((err) => console.error('❌ MongoDB connection failed:', err));

app.use('/event', eventRoutes);

const PORT = 5003;
app.listen(PORT, () => {
  console.log(`✅ Event Service running on port ${PORT}`);
});
