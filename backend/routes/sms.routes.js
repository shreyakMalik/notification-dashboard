const express = require('express');
const router = express.Router();
const Sms = require('../models/Sms');

// POST - save sms
router.post('/', async (req, res) => {
  try {
    const { mobileNumber, message } = req.body;

    if (!mobileNumber || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const sms = new Sms({ mobileNumber, message });
    await sms.save();

    res.status(201).json({ message: 'SMS saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - list sms
router.get('/', async (req, res) => {
  const smsList = await Sms.find().sort({ createdAt: -1 });
  res.json(smsList);
});

module.exports = router;
