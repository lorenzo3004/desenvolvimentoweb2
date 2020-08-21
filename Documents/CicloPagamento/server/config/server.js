'use strict'

//Declarar as dependências do arquivo
const express = require('express');
const bodyParser = require("body-parser");
const routes = require("./routes.js");
const app = express();

//configurar arquivo de rotas
app.use('/', routes);

//Configurar a conversão das informações que chegam em uma requisição
app.use(bodyParser.json());

//Definir a porta que o servidor vai escutar
const port = 1234;

//configurando o servidor para escutar a porta definida
app.listen(port, () => {
    console.log('Servidor rodando na porta ${port}');
})