const express = require('express');
const router = express.Router();
const fs = require('fs');
const fileName = '../db.json';
const data = require(fileName);

router.get('/animais', (req, res, next) => {
  res.json(data.Animais);
});

router.get('/animais/:id', (req, res, next) => {
  for (let i=0; i < data.Animais.length; i++) {
    if (data.Animais[i]._id.toString() == req.params.id) {
      res.json(data.Animais[i]);
    }
  }
});

router.post('/animais/:id/comments/:com_id', (req, res, next) => {
  let animal;
  for (let i=0; i < data.Animais.length; i++) {
    if (data.Animais[i]._id.toString() == req.params.id) {
      animal = i;
    }
  }
  for (let i=0; i < data.Animais[animal].Comentarios.length; i++) {
    if (data.Animais[animal].Comentarios[i].id.toString() == req.params.com_id) {
      data.Animais[animal].Comentarios[i].Likes = req.body.likes;
    }
  }
  fs.writeFile(fileName, JSON.stringify(data, null ,2), function writeJSON(err) {
    console.log(data.Animais[animal].Comentarios);
    if (err) return console.log(err);
  });
})

router.post('/animais/:id/comments', (req, res, next) => {
    for (let i=0; i < data.Animais.length; i++) {
      if (data.Animais[i]._id.toString() == req.params.id) {
        animal = i;
      }
    }
    let novo = {
      "id": req.body.id,
      "Nome": req.body.nome,
      "Texto": req.body.comment,
      "Likes": 0
    }
    data.Animais[animal].Comentarios.push(novo);
    fs.writeFile(fileName, JSON.stringify(data, null ,2), function writeJSON(err) {
      console.log(data.Animais[animal].Comentarios);
      if (err) return console.log(err);
    });
})

module.exports = router;
