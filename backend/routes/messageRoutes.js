const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// @route   POST /api/messages
// @desc    Insert a new message document
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields (name, email, message) are required' });
    }

    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    });

    await newMessage.save();
    return res.status(201).json({
      success: true,
      message: 'Message saved successfully!',
      data: newMessage,
    });
  } catch (error) {
    console.error('Error inserting message:', error.message);
    return res.status(500).json({ error: 'Server error while saving message' });
  }
});

// @route   GET /api/messages
// @desc    Fetch all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    return res.json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    console.error('Error fetching messages:', error.message);
    return res.status(500).json({ error: 'Server error while fetching messages' });
  }
});

module.exports = router;
