function botoes() {
    // definir ações dos botões do menu
    let links = document.querySelectorAll("nav.appbar a");
    for (var link of links) {
      link.addEventListener("click", function() {
        mudaTela(this); //seleciona o que eu clicar para mudar de cor
      });
    }
  }
  
  function mudaTela(target) {
    // mudar tela significa esconder todas as telas e mostrar somente a que está ativa
    
    desativar(); // mandando desativar tudo antes de ativar qualquer outra coisa...
    
    
    target.classList.add("ativo");
    let tela = target.href;
    tela = tela.split("#"); //divide o link a partir do primeiro '#'
    tela = tela[tela.length - 1];  //seleciona o ultimo item da lista 
  
    document.querySelector("div#"+tela).classList.add("ativo");
  
  }
  
  function desativar() {
    // desativar tudo que estiver Ativo
    document.querySelector(".secao-tela.ativo").classList.remove("ativo");
    document.querySelector("nav.appbar a.ativo").classList.remove("ativo");
  }
  
  // Chamada da função principal para atribuir onClick nos botôes
  botoes();