const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/linguagens", {
  useNewUrlParser: true,
  useUnifiedTopology: true });

let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("Successful connection")
});

//Importar os arquivos de rota

const index =  require('./route/index');
const lp = require('./route/lpRoute');

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  });


app.use('/', index);
app.use('/lp', lp);


module.exports = app;












