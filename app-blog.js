// Importo express
const express = require('express');
// Invoco express e salvo il risultato in una funzione
const app = express();
const port = 3000;

// Importo il controller
const posts = require('./controllers/blog');

// Imposto un middleware per i file statici
app.use(express.static('public'));

// Definisco la rotta principale
app.get('/', (req, res) => {
    res.send(`<h1>Benvenuto nel mio Blog!</h1>`);
});

// Definisco una seconda rotta in GET per visualizzare i post
app.get('/posts', posts.get);

// Avvio il server
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});