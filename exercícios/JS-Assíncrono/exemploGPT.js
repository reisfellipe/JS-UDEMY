// Função que simula uma operação assíncrona
function operacaoAssincrona(callback) {
    // Simulando um atraso de 2 segundos (pode ser uma chamada de API, leitura de arquivo, etc.)
    setTimeout(function() {
      console.log("Operação assíncrona concluída!");
      // Chamando a callback após a conclusão da operação assíncrona
      callback();
    }, 2000);
  }
  
  // Função callback que será executada após a operação assíncrona
  function minhaCallback() {
    console.log("Callback executada!");
  }
  
  // Chamando a função com a callback
  operacaoAssincrona(minhaCallback);
  