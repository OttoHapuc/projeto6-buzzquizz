
// Exibição de Quizz tela-1 ===========================

function carregaQuizzDoServidor() {

    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');

    promise.then(processaDados);
}
carregaQuizzDoServidor();

let lista = []
function processaDados(resposta){
    
    for (let i = 0; i < resposta.data.length; i++) {
        lista.push(resposta.data[i]);
    }

    exibeQuizzes();
}

function exibeQuizzes() {

    const quizzEscolhido = document.querySelector('.corpoDeApresentacao');
    quizzEscolhido.innerHTML = "";


    for (let i = 0; i < lista.length; i++) {

        let divQuizzescolhido = `
            <div onclick="goToQuizz('${lista[i].id}')" class="quizzEscolhido btn">
                <img src="${lista[i].image}">
                <div class="gradienteTodosOsQuizz flex"><p>${lista[i].title}</p></div>
            </div>
        `

        quizzEscolhido.innerHTML += divQuizzescolhido;
    }
}