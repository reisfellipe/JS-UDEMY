//A function Router() entende qual rota que é e busca um controlador vai decidir qual view e qual model a gente vai utilizar

const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);
// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;