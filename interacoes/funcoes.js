let criarTela1 = document.querySelector(".conteudo1")
let criarTela2 = document.querySelector(".conteudo2")
let criarTela3 = document.querySelector(".conteudo3")
let criarTela4
let alterarAba
let numeroPergunta 
let numeroNivel


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
function botao1(event){
    event.preventDefault()
    console.log("AAAAAHAHAHAHAHHAH")
    console.log("teste")
    const cond1 = document.querySelector("input.tituloQuizz").value
    if (cond1.length>16 && cond1.length < 65)   {
        console.log("deu")
        criarTela1.classList.add("invisivel");
        criarTela2.classList.remove("invisivel");
        console.log(numeroPergunta)
        renderizar()
    }
    else{
        alert ("preenchar os dados novamente")
    }
}
//pagina 2
function renderizar(){  //arrumar validacao
    let adicionarMsg = document.querySelector(".add")
    numeroPergunta = document.querySelector("input.quantidadePergunta").value
    for( i=0 ; i<numeroPergunta ; i++)
    adicionarMsg.innerHTML +=`
            <p class="indicacao indicacao2">Pergunta 1  <ion-icon onclick="switchAba(this)" name="albums-sharp"></ion-icon></p>
            <input type="text" class="texto2 reduzir tituloQuizz2" placeholder="Texto da pergunta" required></input> 
            <input type="color" class="texto2 reduzir corQuizz" placeholder="Cor de fundo da pergunta" required></input> 
            <p class="indicacao reduzir ">Resposta correta</p>
            <input type="text"  class="texto2 reduzir respostaCerta" placeholder="Resposta correta"required></input> 
            <input type="url"  class="texto2 reduzir url0" placeholder="URL da imagem"required></input> 
            <p class="indicacao reduzir ">Respostas incorretas</p>
            <input type="text"  class="texto2 reduzir respostaErrada1" placeholder="Resposta incorreta 1"required></input> 
            <input type="url" pattern="https?://.+" class="texto2 reduzir url1" placeholder="URL da imagem 1"required></input> 
            <input type="text"  class="texto2 reduzir respostaErrada2" placeholder="Resposta incorreta 2"></input> 
            <input type="url" pattern="https?://.+" class="texto2 reduzir url2" placeholder="URL da imagem 2"></input> 
            <input type="text"  class="texto2 reduzir respostaErrada3" placeholder="Resposta correta 3"></input> 
            <input type="url" pattern="https?://.+" class="texto2 reduzir url3" placeholder="URL da imagem 3"></input> `

    adicionarMsg.innerHTML += `<button type="submit"  class="botao1">Prosseguir pra criar níveis</button>`
        
}

function botao2(event){
    event.preventDefault()
    console.log ("alo")
    let cond2 = document.querySelector("input.tituloQuizz2").value
    if (cond2.length>20 ) {
        criarTela2.classList.add("invisivel");
        criarTela3.classList.remove("invisivel");
        let adicionarNiveis = document.querySelector(".add2")
        numeroNivel = document.querySelector("input.quantidadeNivel").value
        for (i=0; i<numeroNivel; i++)
        adicionarNiveis.innerHTML +=`<form class=" inserir1" onsubmit="botao3">
        <p class="indicacao indicacao2">Nível ${i+1}  <ion-icon onclick="switchAba(this)" name="albums-sharp"></ion-icon></p>
        <input type="text" class="texto2 reduzir tituloNivel" placeholder="Titulo do nível" required></input> 
        <input type="number" min="3" max="100" class="texto2 reduzir porcentagemMinima" placeholder="% de acerto mínima" required></input> 
        <input type="url" pattern="https?://.+" class="texto2 reduzir urlNivel" placeholder="URL da imagem do nível"required></input> 
        <input type="text"  class="texto2 reduzir descricaoNivel" placeholder="Descrição do nível"required></input> </form>`

    }   
    else{
        alert ("preenchar os dados novamente")
    }
}



// diminuir e aumentar aba 
// criar class para diminiir

//fazer um map, por acabar
function switchAba(){
    let alterarAba = document.querySelectorAll(".reduzir")
    alterarAba.classList.toggle("invisivel")

}
//pagina 3

 

function botao3(){
 
    
}