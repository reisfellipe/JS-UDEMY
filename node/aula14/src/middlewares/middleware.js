//NÃO PODE ESQUECER O NEXT dentro do middleware se não a requisição não termina
module.exports = (req,res,next) => {
    
    if(req.body.cliente){
        req.body.cliente = req.body.cliente.replace('Reis', 'NÃO USE REIS');
        console.log();
        console.log(`Vi que você postou ${req.body.cliente}`);
        console.log();
    }

    next();
};

// OUU...

// exports.outroMiddleware = (req,res,next) => {
//     console.log('Sou seu outro middleware');
//     next();
// };
