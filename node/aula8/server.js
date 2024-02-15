const express  = require('express');
const app = express();

// http://faceboook.com/profiles/12345?campanha=googleads&nome_campanha=mentoria
// campanha=googleads &
// nome_campanha=mentoria
//

// app.use(express.urlencoded({extended:true}));
app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
);

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
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req,res)=>{
    console.log(req.body);
    res.send(`Recebi os dados: ${req.body.nome}`);
})


app.listen(3000, ()=>{
    console.log("Acessar http://localhost:3000");
    console.log('Servidor executando na porta 3');
});