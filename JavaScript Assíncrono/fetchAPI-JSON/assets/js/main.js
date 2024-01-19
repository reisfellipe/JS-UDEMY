fetch('pessoas.json')
    .then(resposta=>resposta.json())
    .then(json=>console.log(json));