const express = require('express');
const app = express();

//Importar os arquivos de rota

const index =  require('./route/index');
const livros = require('./route/livrosRoute');

app.use((req, res, next) => {
    console.log('Nova requisicao realizada')

    next()
});


app.use('/', index);
app.use('/livros', livros);


module.exports = app;
