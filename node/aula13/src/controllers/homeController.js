exports.paginaInicial = (req, res, next) => {
    console.log('Respondendo ao cliente');
    res.render('index');
    console.log(`Olha o que tem na req.session.nome ${req.session.nome}`);
    next();
};

exports.trataPost=(req,res)=>{
    res.send('Ei, sou uma nova rota de POST.');
};