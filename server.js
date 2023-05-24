const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Ruta principal del servidor
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
