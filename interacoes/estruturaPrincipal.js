
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

    const exibeQuizzDoUsuario = document.querySelector(".corpoDeApresentacaoUsuario");
    exibeQuizzDoUsuario.innerHTML = "";

    let dadosDoLocalStorage = localStorage.id;
    if (localStorage.length !==0){
        if (localStorage.id.includes(",")){

            const forever = document.querySelector(".botao");
            forever.classList.add("invisivel");

            const tituloMeusQuses = document.querySelector('.meusQuises');
            tituloMeusQuses.classList.remove("invisivel");

            let elementosDoLocalStorage = dadosDoLocalStorage.split(",");
            
            for (i=0; i< elementosDoLocalStorage.length; i++){
                for (k=0; k < lista.length; k++){
                    if (Number(elementosDoLocalStorage[i])=== lista[k].id){
                        let divQuizzescolhido = `
                            <div onclick="goToQuizz('${lista[k].id}')" class="quizzEscolhido btn">
                                <img src="${lista[k].image}">
                                <div class="gradienteTodosOsQuizz flex"><p>${lista[k].title}</p></div>
                            </div>
                        `
                        exibeQuizzDoUsuario.innerHTML += divQuizzescolhido
                    }
                }
            }
        }
    else {
        const forever = document.querySelector(".botao");
            forever.classList.add("invisivel");

        const tituloMeusQuses = document.querySelector('.meusQuises');
        tituloMeusQuses.classList.remove("invisivel");

        let elementosDoLocalStorage = dadosDoLocalStorage.split(",");
        for (i=0; i< elementosDoLocalStorage.length; i++){
            for (k=0; k < lista.length; k++){
                if (Number(elementosDoLocalStorage[i])=== lista[k].id){
                    let divQuizzescolhido = `
                        <div onclick="goToQuizz('${lista[k].id}')" class="quizzEscolhido btn">
                            <img src="${lista[k].image}">
                            <div class="gradienteTodosOsQuizz flex"><p>${lista[k].title}</p></div>
                        </div>
                    `
                    exibeQuizzDoUsuario.innerHTML += divQuizzescolhido
                }
            }
        }
    }
    }
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