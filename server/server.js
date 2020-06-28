//cod luat din cursul online, nu am schimbat multe...

const express = require('express');
const cors = require('cors');
const app = express();

var bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

// Import
const uid = require('uid');

// Instantiate

let jocuri = [
    {
        id: uid(8),
        nume: "Monopoly",
        pret: "15$",
        src: "https://images-na.ssl-images-amazon.com/images/I/81qy%2BMXuxDL._AC_SX355_.jpg"

    },
    {
        id: uid(8),
        nume: "Chess",
        pret: "10$",
        src: "https://static-cdn.jtvnw.net/ttv-boxart/Chess.jpg"
    },
    {
        id: uid(8),
        nume: "Jumanji",
        pret: "25$",
        src: "https://www.kroger.com/product/images/xlarge/front/0077898853132"
    }
]

app.get('/', (req, res) => res.send('Let there be light'))

app.get('/lista-jocuri', (req, res) => {
    res.send(jocuri);
});

app.post('/adauga-joc', (req, res) => {
    const jocData = req.body;
    jocData.id = uid(8);
    jocuri.push(req.body);
    res.statusCode = 201;
    res.send(jocuri);
});

app.delete('/sterge-joc/:id', (req, res) => {
    console.log("sterge", req.params.id)
    jocuri = jocuri.filter(joc => joc.id !== req.params.id);
    res.send(jocuri);
});


app.get('*', function (req, res) {
    res.status(404).sendFile(__dirname + '/error/404.html');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


