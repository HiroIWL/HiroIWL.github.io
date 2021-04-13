function oizinho() {
	let mensagem = document.querySelector('#input-nome').value

	/*let serve para criar uma variavel, seguido de 'nome = ' */


	alert(mensagem)
}

let botao_oi = document.querySelector('#btn-oi')

botao_oi.onclick = function() {
	console.log('Vai chamar a função "oizinho()"')
	oizinho()
}

