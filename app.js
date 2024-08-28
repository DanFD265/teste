let contagem = 0;
let exibicao = document.getElementById('variavel');


function apertou() {
    contagem++;
    console.log(contagem);
}
contagem.innerHTML = 'contagem';