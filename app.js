const express = require('express');
const app = express();
const db = require('./db/connection');

const PORT = 3000;

app.listen(PORT, function () {
    console.log(`O Express está rodando na porta ${PORT}`);
});

// db connection
db  .authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso");
    })
    .catch(error => {
        console.log("Ocorreu um erro ao conectar", error);
});

// routes
app.get('/', (req, res) => {
    res.send("Está funcionando");
});