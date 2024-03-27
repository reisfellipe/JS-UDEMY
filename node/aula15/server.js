require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
// const connectionString = 'mongodb+srv://justfellipe:asenhaesenha@cluster0.bk5ee3g.mongodb.net/BASEDEDADOS?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado ao MongoDB');
        app.listen(3000, () => {
            console.log("Acessar http://localhost:3000");
            console.log('Servidor executando na porta 3000');
        });
    })
    .catch(e => console.log(e));



const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: ' kbhcuiebfoief lkjsdncponcpiefm',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); //Vamos usar essa engine para tratar dados no html, que no html só não é possível

//Nossos próprios middlewares
app.use(middlewareGlobal); //Assim garantimos que todas as requisições, rotas passem pelo middlewares antes
app.use(routes);
// app.on('Conectado agora!', () => {
//     app.listen(3000, () => {
//         console.log("Acessar http://localhost:3000");
//         console.log('Servidor executando na porta 3000');
//     });
// });

//comentário qualquer
