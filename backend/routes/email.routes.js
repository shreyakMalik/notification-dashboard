const express = require('express');
const router = express.Router();
const Email = require('../models/Email');

// POST - save email
router.post('/', async (req, res) => {
  try {
    console.log('Incoming body:', req.body);

    const emailTo = req.body.emailTo;

    if (!emailTo) {
      return res.status(400).json({
        error: 'emailTo field is required'
      });
    }

    const email = new Email({
      emailTo: emailTo
    });

    await email.save();

    return res.status(201).json({
      message: 'Email saved successfully'
    });
  } catch (error) {
    console.error('POST /email error:', error);
    return res.status(500).json({
      error: error.message
    });
  }
});

// GET - list emails
router.get('/', async (req, res) => {
  try {
    const emails = await Email.find().sort({ createdAt: -1 });
    res.json(emails);
  } catch (error) {
    console.error('GET /email error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
