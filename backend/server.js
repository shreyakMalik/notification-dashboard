const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
const emailRoutes = require('./routes/email.routes');
app.use('/email', emailRoutes);

const smsRoutes = require('./routes/sms.routes');
app.use('/sms', smsRoutes);

const whatsappRoutes = require('./routes/whatsapp.routes');
app.use('/whatsapp', whatsappRoutes);



// test route
app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

// connect DB FIRST, then start server
mongoose.connect('mongodb://127.0.0.1:27017/vibe_app')
  .then(() => {
    console.log('MongoDB connected');

    app.listen(5000, () => {
      console.log('Server running on port 5000');
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
