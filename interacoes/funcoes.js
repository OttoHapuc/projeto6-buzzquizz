let criarTela1 = document.querySelector(".conteudo1")
let criarTela2 = document.querySelector(".conteudo2")
let criarTela3 = document.querySelector(".conteudo3")
let criarTela4 = document.querySelector(".conteudo4")
let alterarAba
let numeroPergunta 
let numeroNivel
let cond2
let title 
let image


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
let tituloDoQuizz = {
    id:"",
    title:"",
    image:"",
    questions: [],
    levels: []
};
let qntPerguntas = 0;
let qntNiveis = 0;
function botao1(event){
    event.preventDefault()
        criarTela1.classList.add("invisivel");
        criarTela2.classList.remove("invisivel");
        title = document.querySelector("input.tituloQuizz").value;
        image = document.querySelector("input.urlQuizz").value;

        qntPerguntas = document.querySelector('input.quantidadePergunta').value;
        qntNiveis = document.querySelector('input.quantidadeNivel').value;

        tituloDoQuizz.title = title;
        tituloDoQuizz.image = image

        console.log(tituloDoQuizz)
        renderizar()
}
//pagina 2
function renderizar(){  //perguntas
    let adicionarMsg = document.querySelector(".add")
    numeroPergunta = document.querySelector("input.quantidadePergunta").value
    for( i=0 ; i<numeroPergunta ; i++){
    adicionarMsg.innerHTML +=`
            <div class="pergunta${i+1} inserir2">
                <p class="indicacao indicacao2"><span>Pergunta ${i+1}</span>  
                <ion-icon onclick="salvarValoresDaPergunta(this)" name="create"></ion-icon>
                <input type="text" minlength="20" class="texto2 reduzir tituloQuizz2" placeholder="Texto da pergunta" required></input>
                <input type="color" class="texto2 reduzir corQuizz" placeholder="Cor de fundo da pergunta" required></input>
                </p>
                <p class="indicacao reduzir ">Resposta correta</p>
                <input type="text"  class="texto2 reduzir respostaCerta" placeholder="Resposta correta"required></input>
                <input type="url"  class="texto2 reduzir url0" placeholder="URL da imagem"required></input>
                <p class="indicacao reduzir ">Respostas incorretas</p>
                <input type="text"  class="texto2 reduzir respostaErrada1" placeholder="Resposta incorreta 1"required></input>
                <input type="url" pattern="https?://.+" class="texto2 reduzir url1" placeholder="URL da imagem 1"required></input>
                <input type="text"  class="texto2 reduzir respostaErrada2" placeholder="Resposta incorreta 2"></input>
                <input type="url" pattern="https?://.+" class="texto2 reduzir url2" placeholder="URL da imagem 2"></input>
                <input type="text"  class="texto2 reduzir respostaErrada3" placeholder="Resposta correta 3"></input>
                <input type="url" pattern="https?://.+" class="texto2 reduzir url3" placeholder="URL da imagem 3"></input>
            </div> `
    }
    adicionarMsg.innerHTML += `<button type="submit"  onclick="salvarValoresDaPergunta()" class="botao1">Prosseguir pra criar níveis</button>`

}

let CorpoPerguntasDoQuizz_questions = {
    title:"",
    color:"",
    answers:[]
};
let perguntasDoQuizz_answers = {
    text: "",
    image: "",
    isCorrectAnswer: ""
};
function salvarValoresDaPergunta(aDiv) {

    
    let perguntasDoQuizz_answers = {
        text: "",
        image: "",
        isCorrectAnswer: ""
    };
    //chamar os input da aba 2 de criação;
    //pergunta
    let textoDaPergunta = document.querySelector('input.tituloQuizz2').value;
    let corQuizz = document.querySelector('input.corQuizz').value;

    CorpoPerguntasDoQuizz_questions.title = textoDaPergunta;
    CorpoPerguntasDoQuizz_questions.color = corQuizz;

    let inputRespostacerta = document.querySelector('input.respostaCerta').value;
    let url0 = document.querySelector('input.url0').value;

    perguntasDoQuizz_answers.text = inputRespostacerta;
    perguntasDoQuizz_answers.image = url0;
    perguntasDoQuizz_answers.isCorrectAnswer = true;
    CorpoPerguntasDoQuizz_questions.answers.push(perguntasDoQuizz_answers)

    let respostaErrada1 = document.querySelector('input.respostaErrada1').value;
    let url1 = document.querySelector('input.url1').value;

    perguntasDoQuizz_answers.text = respostaErrada1;
    perguntasDoQuizz_answers.image = url1;
    perguntasDoQuizz_answers.isCorrectAnswer = false;
    CorpoPerguntasDoQuizz_questions.answers.push(perguntasDoQuizz_answers)    

    let respostaErrada2 = document.querySelector('input.respostaErrada2').value;
    let url2 = document.querySelector('input.url2').value;

    perguntasDoQuizz_answers.text = respostaErrada2;
    perguntasDoQuizz_answers.image = url2;
    perguntasDoQuizz_answers.isCorrectAnswer = false;
    CorpoPerguntasDoQuizz_questions.answers.push(perguntasDoQuizz_answers) 

    let respostaErrada3 = document.querySelector('input.respostaErrada3').value;
    let url3 = document.querySelector('input.url3').value;

    perguntasDoQuizz_answers.text = respostaErrada3;
    perguntasDoQuizz_answers.image = url3;
    perguntasDoQuizz_answers.isCorrectAnswer = false;
    CorpoPerguntasDoQuizz_questions.answers.push(perguntasDoQuizz_answers) 

    tituloDoQuizz.questions.push(CorpoPerguntasDoQuizz_questions);

    const batata = aDiv.parentNode.parentNode;
    batata.innerHTML = `
        <p class="indicacao indicacao2"><span>Pergunta ${i+1}</span>  
            <ion-icon style="color: green;" name="create"></ion-icon>
        </p>
    `
}
// TELA 3
function botao2(event){
    event.preventDefault()
        criarTela2.classList.add("invisivel");
        criarTela3.classList.remove("invisivel");
        let adicionarNiveis = document.querySelector(".add3")
        numeroNivel = document.querySelector("input.quantidadeNivel").value
        adicionarNiveis.innerHTML += `<p class="indicacao indicacao2">Nível 1  <ion-icon onclick="switchAba(this)" name="albums-sharp"></ion-icon></p>
        <input type="text" minlength="10" class="texto2 reduzir tituloNivel" placeholder="Titulo do nível" required></input> 
        <input type="number" min="0" max="0" class="texto2 reduzir porcentagemMinima" placeholder="% de acerto mínima" required></input> 
        <input type="url" pattern="https?://.+" class="texto2 reduzir urlNivel" placeholder="URL da imagem do nível"required></input> 
        <input type="text" minlength="30"  class="texto2 reduzir descricaoNivel" placeholder="Descrição do nível"required></input> `
        for (i=1; i<numeroNivel; i++)
        adicionarNiveis.innerHTML +=`
        <p class="indicacao indicacao2">Nível ${i+1}  <ion-icon onclick="switchAba(this)" name="albums-sharp"></ion-icon></p>
        <input type="text" minlength="10" class="texto2 reduzir tituloNivel" placeholder="Titulo do nível" required></input> 
        <input type="number" min="0" max="100" class="texto2 reduzir porcentagemMinima" placeholder="% de acerto mínima" required></input> 
        <input type="url" pattern="https?://.+" class="texto2 reduzir urlNivel" placeholder="URL da imagem do nível"required></input> 
        <input type="text" minlength="30"  class="texto2 reduzir descricaoNivel" placeholder="Descrição do nível"required></input> `

        adicionarNiveis.innerHTML +=`
        <button type="submit" class="botao1">Finalizar Quizz</button>`
}



// diminuir e aumentar aba 
// criar class para diminiir

//fazer um map, por acabar
function switchAba(){
    let alterarAba = document.querySelectorAll(".reduzir")
    alterarAba.classList.toggle("invisivel")

}
//pagina 4

function botao3(event){
    event.preventDefault()
        criarTela3.classList.add("invisivel")
        criarTela4.classList.remove("invisivel")
        let adicionarFinal = document.querySelector(".imagem")
        adicionarFinal.innerHTML += image
        let adicionarTitulo = document.querySelector(".textoImagem")
        adicionarTitulo.innerHTML += title
 
    
}

let armazenamentoDeQuizz = [];



let niveisDoJogo = {
    title:"",
    image:"",
    texto:"",
    minValue:""
}