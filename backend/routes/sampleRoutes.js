const express = require('express');
const router = express.Router();
const Sample = require('../models/Sample');

// @route   POST /api/samples
// @desc    Insert a new sample document
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }

    const newSample = new Sample({
      name,
      description,
    });

    await newSample.save();
    return res.status(201).json({
      success: true,
      message: 'Sample created successfully!',
      data: newSample,
    });
  } catch (error) {
    console.error('Error inserting sample:', error.message);
    return res.status(500).json({ error: 'Server error while inserting data' });
  }
});

// @route   GET /api/samples
// @desc    Fetch all sample documents
router.get('/', async (req, res) => {
  try {
    const samples = await Sample.find().sort({ createdAt: -1 });
    return res.json({
      success: true,
      count: samples.length,
      data: samples,
    });
  } catch (error) {
    console.error('Error fetching samples:', error.message);
    return res.status(500).json({ error: 'Server error while fetching data' });
  }
});

module.exports = router;
