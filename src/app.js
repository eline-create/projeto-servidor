const express = require('express');
const app = express();

//Importar os arquivos de rota

const index =  require('./route/index');
const lp = require('./route/lpRoute');

app.use((req, res, next) => {
    console.log('Nova requisicao realizada')

    next()
});


app.use('/', index);
app.use('/lp', lp);


module.exports = app;
