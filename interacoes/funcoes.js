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

function quizzSelecionado() {

    const tela1 = document.querySelector('.AreaDeExibicaoInicial-Tela1');
    const tela2 = document.querySelector('.AreaDeJogo-Tela2');

    tela1.classList.add('invisivel');
    tela2.classList.remove('invisivel');

}

// leonardo 
//pagina 1
let tituloDoQuizz = {
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
    adicionarMsg.innerHTML += `<button type="submit" class="botao1 botaoTela2 invisivel">Prosseguir pra criar níveis</button>`

}
let contaPergunta = 1
function salvarValoresDaPergunta(aDiv) {
    if (contaPergunta === Number(qntPerguntas)){
        let primeiroBotao = document.querySelector('.botaoTela2');
        primeiroBotao.classList.remove('invisivel')
    }
    //chamar os input da aba 2 de criação;
    //pergunta
    let textoDaPergunta = document.querySelector('input.tituloQuizz2').value;
    let corQuizz = document.querySelector('input.corQuizz').value;
    let CorpoPerguntasDoQuizz_questions = {
        title:textoDaPergunta,
        color:corQuizz,
        answers:[]
    };

    let inputRespostacerta = document.querySelector('input.respostaCerta').value;
    let url0 = document.querySelector('input.url0').value;
    let perguntasDoQuizz_answers2 = {
        text: inputRespostacerta,
        image: url0,
        isCorrectAnswer: true
    };
    CorpoPerguntasDoQuizz_questions.answers.push(perguntasDoQuizz_answers2)


    
    let respostaErrada1 = document.querySelector('input.respostaErrada1').value;
    if (respostaErrada1 !== ""){
        let url1 = document.querySelector('input.url1').value;
        let perguntasDoQuizz_answers3 = {
            text: respostaErrada1,
            image: url1,
            isCorrectAnswer: false
        };
        CorpoPerguntasDoQuizz_questions.answers.push(perguntasDoQuizz_answers3)    
    }


    
    let respostaErrada2 = document.querySelector('input.respostaErrada2').value;
    if (respostaErrada2 !== ""){
        let url2 = document.querySelector('input.url2').value;
        let perguntasDoQuizz_answers4 = {
            text: respostaErrada2,
            image: url2,
            isCorrectAnswer: false
        };
        CorpoPerguntasDoQuizz_questions.answers.push(perguntasDoQuizz_answers4) 
    }

    
    let respostaErrada3 = document.querySelector('input.respostaErrada3').value;
    if (respostaErrada3 !== ""){
        let url3 = document.querySelector('input.url3').value;
        let perguntasDoQuizz_answers5 = {
            text: respostaErrada3,
            image: url3,
            isCorrectAnswer: false
        };
        CorpoPerguntasDoQuizz_questions.answers.push(perguntasDoQuizz_answers5) 
    }
    
    tituloDoQuizz.questions.push(CorpoPerguntasDoQuizz_questions);
    

    let batata = aDiv.parentNode.parentNode;
    batata.innerHTML = `
        <p class="indicacao indicacao2"><span>Pergunta ${contaPergunta}</span>  
            <ion-icon style="color: green;" name="create"></ion-icon>
        </p>
    `    
    contaPergunta ++;
}
// TELA 3
let contaPergunta2 = 1
function botao2(event){
    
    event.preventDefault()
        criarTela2.classList.add("invisivel");
        criarTela3.classList.remove("invisivel");
        let adicionarNiveis = document.querySelector(".add3")
        numeroNivel = document.querySelector("input.quantidadeNivel").value
        for (i=1; i<=numeroNivel; i++){
        adicionarNiveis.innerHTML +=`
        <div class="niveisDeJogo">
            <p class="indicacao indicacao2"><span>Nível ${i}</span>  <ion-icon onclick="switchAba(this)" name="create"></ion-icon></p>
            <input type="text" minlength="10" class="texto2 reduzir tituloNivel" placeholder="Titulo do nível" required></input>
            <input type="number" min="0" max="100" class="texto2 reduzir porcentagemMinima" placeholder="% de acerto mínima" required></input>
            <input type="url" pattern="https?://.+" class="texto2 reduzir urlNivel" placeholder="URL da imagem do nível"required></input>
            <input type="text" minlength="30"  class="texto2 reduzir descricaoNivel" placeholder="Descrição do nível"required></input>
        </div>`
        }
        adicionarNiveis.innerHTML +=`
        <button type="submit" class="botao1 botaoTela3 invisivel">Finalizar Quizz</button>`
        
}



// diminuir e aumentar aba 
// criar class para diminiir

//fazer um map, por acabar
let contadorDeNiveis = 1;
function switchAba(essaDiv){
    //let alterarAba = document.querySelectorAll(".reduzir");
    //alterarAba.classList.toggle("invisivel");

    console.log(contaPergunta2)
    console.log(qntNiveis)
    if (contaPergunta2 === Number(qntNiveis)){
        let primeiroBotao = document.querySelector('.botaoTela3');
        primeiroBotao.classList.remove('invisivel')
    }
    let niveisDoJogo = {
        title:"",
        image:"",
        text:"",
        minValue:""
    }

    let tituloDoNivel = document.querySelector('input.tituloNivel').value;
    let porcentagemMinima = document.querySelector('input.porcentagemMinima').value;
    let urlNivel = document.querySelector('input.urlNivel').value;
    let descricaoNivel = document.querySelector('input.descricaoNivel').value;

    niveisDoJogo.title = tituloDoNivel;
    niveisDoJogo.image = urlNivel;
    niveisDoJogo.text = descricaoNivel;
    niveisDoJogo.minValue = porcentagemMinima;

    tituloDoQuizz.levels.push(niveisDoJogo)

    essaDiv.parentNode.parentNode.innerHTML = `
    <div class="niveisDeJogo">
        <p class="indicacao indicacao2">
            <span>Nível ${contadorDeNiveis}</span>  
            <ion-icon style="color: green;" name="create"></ion-icon>
        </p>
    </div>
    `
    contadorDeNiveis++;
    contaPergunta2++;
}
//pagina 4

function botao3(event){
    event.preventDefault();
        criarTela3.classList.add("invisivel");
        criarTela4.classList.remove("invisivel");
        let adicionarFinal = document.querySelector(".imagemFinal");

        adicionarFinal.innerHTML += ` <img  src="${image}"  ></img> `;
        let adicionarTitulo = document.querySelector(".imagemFinal");
        adicionarTitulo.innerHTML += `<p class="textoImagem">${title}</p>`;

    const enviarObjeto = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", tituloDoQuizz);

    enviarObjeto.then(processaID);
    enviarObjeto.catch(deuErroNoObjt);
    //salvar id no local storage
}

function processaID(resposta) { 
    const valorDeID = resposta.data.id;

    let valoresDoStorage = localStorage
    if (valoresDoStorage.length === 0) {
        localStorage.setItem("id", valorDeID)
    }
    else{
        let primeiroValor = valoresDoStorage.id;
        primeiroValor+=","+valorDeID;
        localStorage.setItem("id", primeiroValor);
    }
}
function deuErroNoObjt(erro){
    alert("Preencha os campos corretamente, verifique se o link de imagem é válido e tente novamente.");
}

function criarQuizz(){
    document.getElementsByTagName("main")[0].classList.toggle("invisivel");
    document.querySelector(".criar").classList.toggle("invisivel");
}

function acessarQuizz(){
    criarQuizz();
    listOfIDs = localStorage.id.split(",");
    lastCreatedQuizz = listOfIDs[listOfIDs.length-1];
    goToQuizz(lastCreatedQuizz);
}