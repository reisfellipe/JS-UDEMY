const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://reisfellipedev:asenhaesenha@udemyjs.dnv31sm.mongodb.net/BASEDEDADOS?retryWrites=true&w=majority&appName=udemyJs';
mongoose.connect(connectionString);


const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');
const {outroMiddleware} = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended:true}));

// app.use(express.static('./public')); ou colocando o caminho absoluto visto abaixo
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); //Vamos usar essa engine para tratar dados no html, que no html só não é possível

//Nossos próprios middlewares
app.use(meuMiddleware); //Assim garantimos que todas as requisições, rotas passem pelo middlewares antes
app.use(outroMiddleware);
app.use(routes);

app.listen(3000, ()=>{
    console.log("Acessar http://localhost:3000");
    console.log('Servidor executando na porta 3000');
});