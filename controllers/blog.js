// Importo i moduli di utils
const { getJsonData } = require('../utils');

// Esporto i metodi del controller
module.exports = {
    // Definisco un metodo GET 
    get: (req, res) => {
        // Inglobo in una variabile il contenuto del DB
        const posts = getJsonData('blog');
        // Specifico il tipo di risposta da inviare al browser
        res.format({
            // Tipo HTML
            html: () => {
                let html = '<main>';
                posts.forEach(({title, content, img, tags}) => {
                    html += `
                        <div>
                            <h2> ${title} </h2>
                            <img style="width: 100px" src="/${img}"/>
                            <p> ${content} </p>
                            <ul>
                    `;
                    tags.forEach(t => html += `<li>${t}</li>`);
                    html += `
                            </ul>
                        </div>
                    `;
                });
                html += `</main>`;
                // Inserisco nella risposta l'html
                res.send(html);
            },
            // Tipo JSON
            json: () => {
                res.json(posts);
            }

        })
    }
}
