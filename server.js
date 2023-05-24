const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

const app = express();
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


// Ruta principal del servidor
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Ruta para obtener la lista de archivos Markdown disponibles
app.get('/files', (req, res) => {
  fs.readdir(__dirname + '/markdown', (err, files) => {
    if (err) {
      res.status(500).json({ error: 'Error al leer los archivos Markdown' });
    } else {
      res.json({ files });
    }
  });
});