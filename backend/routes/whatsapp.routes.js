const express = require('express');
const router = express.Router();
const Whatsapp = require('../models/Whatsapp');

// POST - save whatsapp message
router.post('/', async (req, res) => {
  try {
    console.log('Incoming body:', req.body);

    const { mobileNumber, message } = req.body;

    if (!mobileNumber || !message) {
      return res.status(400).json({
        error: 'mobileNumber and message are required'
      });
    }

    const whatsapp = new Whatsapp({
      mobileNumber,
      message
    });

    await whatsapp.save();

    return res.status(201).json({
      message: 'Whatsapp message saved successfully'
    });
  } catch (error) {
    console.error('POST /whatsapp error:', error);
    return res.status(500).json({
      error: error.message
    });
  }
});

// GET - list whatsapp messages
router.get('/', async (req, res) => {
  try {
    const whatsapps = await Whatsapp.find().sort({ createdAt: -1 });
    res.json(whatsapps);
  } catch (error) {
    console.error('GET /whatsapp error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
