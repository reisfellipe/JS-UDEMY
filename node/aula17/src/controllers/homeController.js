// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo:'Um titulo de testes',
//     descricao:'Uma descricao de testes;'
// })
// .then(dados => console.log(dados))
// .catch(e => console.log(e));


exports.paginaInicial = (req, res) => {
    req.session.usuario = {nome: 'Fellipe', logado:true};
    req.flash('info', 'Primeira flash messagem');
    req.flash('error', 'Deu erro ops');
    req.flash('success', 'Agora deu certo');
    res.render('index');
    return;
};

exports.trataPost=(req,res,next)=>{
    res.send(req.body);
    return;
};