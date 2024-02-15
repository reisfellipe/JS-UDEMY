const express  = require('express');
const app = express();

// http://faceboook.com/profiles/12345?campanha=googleads&nome_campanha=mentoria
// campanha=googleads &
// nome_campanha=mentoria
//


app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

//                          ? está informando ao navegador que esse parâmetro pode ou nao ser recebido na URL
app.get('/testes/:idUsuarios?/:parametro?', (req, res)=>{
    console.log(req.params);
    // res.send(req.params);
    res.send(req.query);
});

app.post('/', (req,res)=>{
    res.send('Recebi o formulário');
})


app.listen(3000, ()=>{
    console.log("Acessar http://localhost:3000");
    console.log('Servidor executando na porta 3');
});