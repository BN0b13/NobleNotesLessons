const express = require('express');
const path = require('path');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/', (req, res) => {
  const homepage = (path.join(process.cwd(), '/public/html/index.html'));
  res.sendFile(homepage);
});

router.get('/chords', (req, res) => {
  const homepage = (path.join(process.cwd(), '/public/html/chords.html'));
  res.sendFile(homepage);
});

router.get('/scales', (req, res) => {
  const homepage = (path.join(process.cwd(), '/public/html/scales.html'));
  res.sendFile(homepage);
});


module.exports = router;