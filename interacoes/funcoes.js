let criarTela1 = document.querySelector(".conteudo1")
let criarTela2 = document.querySelector(".conteudo2")
let criarTela3 = document.querySelector(".conteudo3")
let criarTela4


function criarQizz() {

    const tela1 = document.querySelector('.AreaDeExibicaoInicial-Tela1')

    tela1.classList.add('invisivel')

    //leonardo    adicionar pagina criar quizz
    criarTela1.classList.remove("invisivel");
}

function quizzSelecionado() {

    const tela1 = document.querySelector('.AreaDeExibicaoInicial-Tela1');
    const tela2 = document.querySelector('.AreaDeJogo-Tela2');

    tela1.classList.add('invisivel');
    tela2.classList.remove('invisivel');

}

// leonardo 
//pagina 1
function botao1(){
    const cond1 = document.querySelector("input.tituloQuizz").value
    if (cond1.length>16 && cond1.length < 65)   {
        console.log("deu")
        criarTela1.classList.add("invisivel");
        criarTela2.classList.remove("invisivel");
    }
    else{
        alert ("preenchar os dados novamente")
    }
}
//pagina 2
function botao2(){
    const cond2 = document.querySelector("input.tituloQuizz2").value
    if (cond2.length>20 ) {
        criarTela2.classList.add("invisivel");
        criarTela3.classList.remove("invisivel");
    }   
    else{
        alert ("preenchar os dados novamente")
    }

}
