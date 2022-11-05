var pontuac = 0;
var maxPontuac = 0;
var questionIndex = 0;
var quizzID;
var levels;

var scoreNeeded = [];

function goToQuizz(ID){
    quizzID = ID;
    promisse2 = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${ID}`)
    promisse2.then(renderizarQuizz);
    promisse2.catch(deuErro);
    //escondendo a tag "main" e mostrando a classe quizz

    document.getElementsByTagName("main")[0].classList.add("invisivel");
    document.querySelector(".quizz").classList.remove("invisivel");
}

function deuErro(){
    console.log("ERRO DE REQUEST!");
}

function renderizarQuizz(obj){
    obj = obj.data;
    console.log(obj);

    pontuac = 0;
    maxPontuac = obj.questions.length;
    levels = obj.levels;

    let quizzHTML = `
    <div class="quizz_header">
        <img src="${obj.image}">
        <div class="quizz_title">${obj.title}</div>
    </div>
    `;

    for (let i=0; i<obj.questions.length; i++){
        let objElem = obj.questions[i];

        let questionsAmmount = obj.questions[i].answers.length;

        randomArray = [];

        for (let i=0; i<questionsAmmount; i++){
            randomArray.push(i);
        }
    
        function comparador() { 
            return Math.random() - 0.5; 
        }
        randomArray.sort(comparador);
    
        console.log(randomArray);

        quizzHTML+=`
        <div class="quizz_questions_list">
            <div class="quizz_question_container">
                <div class="question_title" style="background-color: ${objElem.color};">
                    <div class="quizz_title">
                    ${objElem.title}
                    </div>
                </div>
                <div class="question_alternatives">`;

        for(let j=0; j<questionsAmmount; j++){
            quizzHTML +=`
            <div class="alternative ${objElem.answers[randomArray[j]].isCorrectAnswer}" onclick="escolherAlternativa(${objElem.answers[randomArray[j]].isCorrectAnswer}, this, ${i});">
                <img src=${objElem.answers[randomArray[j]].image}>
                <div class="alternative_text">${objElem.answers[randomArray[j]].text}</div>
            </div>`
        }

        quizzHTML +=`
                    </div>
                </div>
            </div>
        </div>
        `
    }

    document.querySelector(".quizz").innerHTML = quizzHTML;
}

function escolherAlternativa(indicador, clickedElem, questionNumber){

    let finalLevelScore = 0;

    if (indicador){
        pontuac++;
    }

    //efeitos visuais e scroll

    for (let i=0; i<4; i++){
        document.querySelectorAll(".alternative")[(questionNumber*4)+i].classList.add("red");
        document.querySelectorAll(".alternative")[(questionNumber*4)+i].classList.add("low_opacity");
        document.querySelectorAll(".alternative")[(questionNumber*4)+i].removeAttribute("onclick");        
    }
    for (let i=0; i<4; i++){
        if (document.querySelectorAll(".alternative")[(questionNumber*4)+i].classList.contains("true")){
            document.querySelectorAll(".alternative")[(questionNumber*4)+i].classList.remove("red");
            document.querySelectorAll(".alternative")[(questionNumber*4)+i].classList.add("green");
        }
    } 
    clickedElem.classList.remove("low_opacity");

    questionIndex++;

    setTimeout(scrollar,2000);

    //caso tenha chegado no final das perguntas
    if (questionIndex == maxPontuac){
        let score = pontuac/maxPontuac;
        for (let i=0; i< levels.length; i++){
            if (score >= (levels[i].minValue/100)){
                finalLevelScore = i;
            }
        }

        renderizarTelaFinal(finalLevelScore, score);

    }
}

function scrollar(){
    document.querySelectorAll(".alternative")[questionIndex*4].scrollIntoView({behavior: "smooth"});
}

function renderizarTelaFinal(index, scr){
    const fixedScore = (scr*100).toFixed(0);
    document.querySelector(".quizz").innerHTML += `
    <div class="quizz_question_container">
        <div class="question_title" style="background-color: #EC362D; height: 99px;">
            <div class="quizz_title">
                ${fixedScore}% de acerto: ${levels[index].title}
            </div>
        </div>
        <img src="${levels[index].image}" class="results">

        <div class="level_text">
            ${levels[index].text}
        </div>

        <div class="buttons">
            <button class="restart btn" onclick="restart()">Reiniciar Quizz</button>
            <br>
            <button class="back btn" onclick="backHome()">Voltar para home</button>
        </div>
    </div>
    `;
    document.querySelector(".back").scrollIntoView({behavior: "smooth"});
}

function backHome(){
    pontuac = 0;
    maxPontuac = 0;
    questionIndex = 0;
    scoreNeeded = [];
    document.querySelector(".quizz").innerHTML = ``;
    document.getElementsByTagName("main")[0].classList.remove("invisivel");
    document.querySelector(".quizz").classList.add("invisivel");
}

function restart(ID){
    pontuac = 0;
    maxPontuac = 0;
    questionIndex = 0;
    scoreNeeded = [];
    document.querySelector(".quizz").innerHTML = ``;
    goToQuizz(quizzID);

}