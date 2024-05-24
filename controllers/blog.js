// Importo i moduli di utils
const { getJsonData, putJsonData } = require('../utils');

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
                            <img style="width: 200px" src="/${img}"/>
                            <p> ${content} </p>
                            <ul>
                    `;
                    tags.forEach(t => html += `<li>${t}</li>`);
                    html += `
                            </ul>
                            <hr>
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
    },
    // Definisco un metodo POST
    post: (req, res) => {
        // Inglobo in una variabile il contenuto del DB
        const posts = getJsonData('blog');
        // Aggiorno i post con quello nuovo creato tramite req.body
        putJsonData('blog', [...posts, req.body]);// req.body rappresenta il corpo della richiesta HTTP
        res.send('Post inserito correttamente');
    }
}
