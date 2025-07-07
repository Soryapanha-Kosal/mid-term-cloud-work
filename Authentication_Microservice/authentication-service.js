const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected (Auth Service)');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err);
  }
};

connectDB();

const userSchema = new mongoose.Schema({
  emailid: String,
  pass: String,
  role: String
});
const PersonModel = mongoose.model('Person', userSchema);

app.post('/register', async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const user = new PersonModel({ emailid: email, pass: password, role });
    await user.save();
    res.json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, password, role } = req.body;
  const user = await PersonModel.findOne({ emailid: email, pass: password, role });
  if (user) {
    const token = jwt.sign({ email, role }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Auth Service running on port ${PORT}`));
