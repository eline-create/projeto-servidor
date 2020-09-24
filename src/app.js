const express = require('express');
const app = express();

//Importar os arquivos de rota

const index =  require('./route/index');
const rest = require('./route/restRoute');

app.use((req, res, next) => {
    console.log('Nova requisicao realizada')

    next()
});


app.use('/', index);
app.use('/rest', rest);


module.exports = app;
