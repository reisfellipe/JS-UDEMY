exports.paginaInicial = (req, re) => {
    res.render('index');
    return;
};

exports.trataPost=(req,res)=>{
    res.send('Ei, sou uma nova rota de POST.');
    return;
};