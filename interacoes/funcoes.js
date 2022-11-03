


function criarQizz() {

    const tela1 = document.querySelector('.AreaDeExibicaoInicial-Tela1')

    tela1.classList.add('invisivel')

    //leonardo    adicionar pagina criar quizz
    const criarTela1 = document.querySelector(".conteudo1")

    criarTela1.classList.remove("invisivel");
}

function quizzSelecionado() {

    const tela1 = document.querySelector('.AreaDeExibicaoInicial-Tela1');
    const tela2 = document.querySelector('.AreaDeJogo-Tela2');

    tela1.classList.add('invisivel');
    tela2.classList.remove('invisivel');

}

// leonardo 

function botao1(){
    const cond1 = document.querySelector("input.tituloQuizz").value
    if (cond1.length>16 && cond1.length < 65)   {
        console.log("deu")
    }
    else{
        alert ("preenchar os dados novamente")
    }
}


