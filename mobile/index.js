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
    
}



// funções que geram strings aleatórias para o gráfico de porcentagem


  function porcentagem_Aleatoria() {
    let numero = Math.round(Math.random() * 100 )
    return numero;
    
   
}



  function nome_aleatorio_t() {
   

    document.querySelector("#legenda-t").textContent = porcentagem_Aleatoria() + "%";
    
    
}


function nome_aleatorio_n() {


  document.querySelector("#legenda-n").textContent = porcentagem_Aleatoria() + "%";
 
}

function nome_aleatorio_m() {


  document.querySelector("#legenda-m").textContent = porcentagem_Aleatoria() + "%";
 
  

}

// função que irá gerar resultados diários do estado geral da coluna



function calcular_media () {
 let manhã = document.querySelector("#legenda-m").value;
 let tarde = document.querySelector("#legenda-t").value;
 let noite = document.querySelector("#legenda-n").value;

   manhã = parseInt(manhã);
   tarde = parseInt(tarde);
   noite = parseInt(noite);


  let media = (manhã + tarde + noite)/ 3;
  
  let resultado = null;

  if (media >= 75) {
    resultado = "Ruim"
  }
  else if (media < 75 && media > 25 ) {
    resultado = "Razoável"
  }
  else if (media <= 25 ) {
    resultado = "Excelente"
  }

  console.log(manhã, tarde, noite);
  console.log(media);
  console.log(resultado);

  let span_resultado = document.querySelector("#resultado");
  span_resultado.textContent = resultado;
}

// botão para calcular a média
let btn_calcular_media = document.querySelector(".calcular-media");
btn_calcular_media.onclick = () => { calcular_media(); }




let notif = document.querySelector(".not");
let btn = document.getElementById('limpar');
btn.addEventListener('click', () => {
 notif.classList.replace('not', 'remover');
})



