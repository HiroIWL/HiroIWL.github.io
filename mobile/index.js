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


  window.onload = () => {
    nome_aleatorio_m();
    nome_aleatorio_n();
    nome_aleatorio_t();
    resultado_aleatorio();
}



// funções que geram strings aleatórias para o gráfico de porcentagem

  function nome_aleatorio_t() {
    let lista_de_nomes = [ "0%","5%", "10%", "15%", "20%", "25%", "30%", "35%", "40%", "45%", "50%", "55%", "60%", "65%", "70%", "75%", "80%", "85%", "90%", "95%", "100%" ]
    let tamanho = lista_de_nomes.length;
    let posicao = Math.floor(Math.random() * tamanho)
    let nome = lista_de_nomes [posicao];

    console.log(lista_de_nomes)

    document.querySelector("#legenda-t").textContent = nome;

}


function nome_aleatorio_n() {
  let lista_de_nomes = ["0%","5%", "10%", "15%", "20%", "25%", "30%", "35%", "40%", "45%", "50%", "55%", "60%", "65%", "70%", "75%", "80%", "85%", "90%", "95%", "100%"]
  let tamanho = lista_de_nomes.length;
  let posicao = Math.floor(Math.random() * tamanho)
  let nome = lista_de_nomes [posicao];

  console.log(lista_de_nomes)

  document.querySelector("#legenda-n").textContent = nome;

}

function nome_aleatorio_m() {
  let lista_de_nomes = ["0%","5%", "10%", "15%", "20%", "25%", "30%", "35%", "40%", "45%", "50%", "55%", "60%", "65%", "70%", "75%", "80%", "85%", "90%", "95%", "100%"]
  let tamanho = lista_de_nomes.length;
  let posicao = Math.floor(Math.random() * tamanho)
  let nome = lista_de_nomes [posicao];

  console.log(lista_de_nomes)

  document.querySelector("#legenda-m").textContent = nome;

}

// função que irá gerar resultados diários do estado geral da coluna

function resultado_aleatorio() {
  let lista_de_nomes = ["Razoável","Ruim","Excelente"]
  let tamanho = lista_de_nomes.length;
  let posicao = Math.floor(Math.random() * tamanho)
  let nome = lista_de_nomes [posicao];

  console.log(lista_de_nomes)

  document.querySelector("#resultado").textContent = nome;
}