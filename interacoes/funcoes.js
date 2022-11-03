function criarQizz() {

    const tela1 = document.querySelector('.AreaDeExibicaoInicial-Tela1')

    tela1.classList.add('invisivel')
}

function quizzSelecionado() {

    const tela1 = document.querySelector('.AreaDeExibicaoInicial-Tela1');
    const tela2 = document.querySelector('.AreaDeJogo-Tela2');

    tela1.classList.add('invisivel');
    tela2.classList.remove('invisivel');

}