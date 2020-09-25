const express = require('express');
const app = express();

//Importar os arquivos de rota

const index =  require('./routes/index');
const cities = require('./routes/citiesRoute');
const id = require('./routes/citiesRoute');

app.use((req, res, next) => {
    console.log('Nova requisicao realizada')

    next()
});


app.use('/', index);
app.use('/cities', cities);
app.use('/:id', id)


module.exports = app;
