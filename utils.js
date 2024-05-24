// Importo File System per accedere ai file sul server
const fs = require('fs');
// Importo Path per creare percorsi ai file
const path = require('path');

// Dichiaro una funzione per leggere i data da un file json
const getJsonData = (file) => {
    const filePath = path.join(__dirname, 'db',  `${file}.json`);
    const fileData = fs.readFileSync(filePath, 'utf-8');
    // JSON.parse() converte la stringa JSON in un oggetto JS
    return JSON.parse(fileData);
}

// Dichiaro una funzione per scrivere data su un file json
const putJsonData = (file, newData) => {
    const filePath = path.join(__dirname, 'db', `${file}.json`);
    // JSON.stringify() converte l'oggetto newData in una stringa JSON
    const string = JSON.stringify(newData);
    // Scrivo String all'interno del File
    fs.writeFileSync(filePath, string);
}

// Esporto i moduli
module.exports = {
    getJsonData,
    putJsonData
}