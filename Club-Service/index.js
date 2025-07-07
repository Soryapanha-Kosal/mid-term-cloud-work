const express = require('express');
const connectDB = require('./db');
const clubRoutes = require('./routes/clubRoutes');
const authToken = require('./middleware/authToken');
const authRole = require('./middleware/authRole');

const app = express();
app.use(express.json());

connectDB();

// Health check route
app.get('/', authToken, authRole('club_leader'), (req, res) => {
  res.json({ message: 'Club endpoint working ✅' });
});

// ✅ Activate actual club routes
app.use('/club', authToken, authRole('club_leader'), clubRoutes);

const PORT = 5002;
app.listen(PORT, () => {
  console.log(`✅ Club Service running on port ${PORT}`);
});
