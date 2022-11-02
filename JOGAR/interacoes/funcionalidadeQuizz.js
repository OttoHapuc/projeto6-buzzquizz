function goToQuizz(ID){
    /*
    promisse = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    promisse.then(print);
    */
    promisse2 = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${ID}`)
    promisse2.then(renderizarQuizz);

    //escondendo a tag "main" e mostrando a classe quizz

    document.getElementsByTagName("main")[0].classList.add("invisivel");
    document.querySelector(".quizz").classList.remove("invisivel");
}

function renderizarQuizz(obj){
    obj = obj.data;
    console.log(obj);

    let quizzHTML = `
    <div class="quizz_header">
        <img src="${obj.image}">
        <div class="quizz_title">${obj.title}</div>
    </div>
    `

    randomArray = [0,1,2,3];
    function comparador() { 
        return Math.random() - 0.5; 
    }
    randomArray.sort(comparador);


    for (let i=0; i<obj.questions.length; i++){
        let objElem = obj.questions[i];
        quizzHTML+=`
        <div class="quizz_questions_list">
            <div class="quizz_question_container">
                <div class="question_title" style="background-color: ${objElem.color};">
                    <div class="quizz_title">
                    ${objElem.title}
                    </div>
                </div>
                <div class="question_alternatives">
                    <div class="alternative" onclick="escolherAlternativa(${objElem.answers[randomArray[0]].isCorrectAnswer});">
                        <img src=${objElem.answers[randomArray[0]].image}>
                        <div class="alternative_text">${objElem.answers[randomArray[0]].text}</div>
                    </div>
                    <div class="alternative" onclick="escolherAlternativa(${objElem.answers[randomArray[1]].isCorrectAnswer});">
                        <img src=${objElem.answers[randomArray[1]].image}>
                        <div class="alternative_text">${objElem.answers[randomArray[1]].text}</div>
                    </div>
                </div>
                <div class="question_alternatives">
                    <div class="alternative" onclick="escolherAlternativa(${objElem.answers[randomArray[2]].isCorrectAnswer});">
                        <img src=${objElem.answers[randomArray[2]].image}>
                        <div class="alternative_text">${objElem.answers[randomArray[2]].text}</div>
                    </div>
                    <div class="alternative" onclick="escolherAlternativa(${objElem.answers[randomArray[3]].isCorrectAnswer});">
                        <img src=${objElem.answers[randomArray[3]].image}>
                        <div class="alternative_text">${objElem.answers[randomArray[3]].text}</div>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    document.querySelector(".quizz").innerHTML = quizzHTML;
}

function escolherAlternativa(indicador){
    alert("Alternativa = "+ indicador);
}