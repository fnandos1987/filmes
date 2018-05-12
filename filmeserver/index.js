const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const filmes = require('./filmes');
var app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Busca tudo')
})

app.get(`/${filmes.colecao}`, (req, res) => {
    res.send(filmes.lista());
});

app.get(`/${filmes.colecao}/:id`, (req, res) => {
    res.send(filmes.porId(req.params.id));
});


app.post(`/${filmes.colecao}`, (req, res) => {
    res.send(filmes.adiciona({ id: null, nome: req.body.nome, ano: req.body.ano }));
});

app.put(`/${filmes.colecao}/:id`, (req, res) => {
    res.send(filmes.altera({ id: req.params.id, nome: req.body.nome, ano: req.body.ano }));
});

app.put(`/${filmes.colecao}`, (req, res) => {
    res.send(filmes.altera({ id: req.body.id, nome: req.body.nome, ano: req.body.ano }));
});


app.delete(`/${filmes.colecao}/:id`, (req, res) => {
    res.send(filmes.remove(req.params.id));
});


app.listen(3000)