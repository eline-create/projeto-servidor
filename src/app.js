const express = require('express');
const app = express();

//Importar os arquivos de rota

const index =  require('./routes/index');
const cities = require('./routes/citiesRoute');
const city = require('./routes/citiesRoute');

app.use((req, res, next) => {
    console.log('Nova requisicao realizada')

    next()
});


app.use('/', index);
app.use('/cities', cities);
app.use('/:city', city)


module.exports = app;
