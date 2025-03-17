const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config(); // To read .env file

const app = express();

// ✅ Middlewares
app.use(cors()); // To handle cross-origin requests
app.use(express.json()); // To parse JSON bodies

// ✅ API Routes
app.use('/api/auth', authRoutes); // All auth routes like /signup, /signin

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    // These options are no longer required for Mongoose 6+
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('✅ MongoDB connected successfully');
}).catch((err) => {
    console.error('❌ MongoDB connection error:', err);
});

// ✅ Default Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// ✅ Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
