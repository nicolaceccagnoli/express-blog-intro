// Importo express
const express = require('express');
// Invoco express e salvo il risultato in una funzione
const app = express();
const port = 3000;

// Definisco la rotta principale
app.get('/', (req, res) => {
    res.send(`<h1>Benvenuto nel mio Blog!</h1>`);
});

// Avvio il server
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});