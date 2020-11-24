const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/animais', (req, res, next) => {
  const data = require('../db.json')
  res.json(data.Animais);
});

router.get('/animais/:id', (req, res, next) => {
  const data = require('../db.json');
  for (let i=0; i < data.Animais.length; i++) {
    if (data.Animais[i]._id.toString() == req.params.id) {
      console.log(data.Animais[i]);
      res.json(data.Animais[i]);
    }
  }
});

module.exports = router;
