// Quiz

let start = document.getElementById("start");
let quizStart = document.getElementById("quizStart");
let rep1 = document.getElementById("rep1");
let rep2 = document.getElementById("rep2");
let rep3 = document.getElementById("rep3");
let rep4 = document.getElementById("rep4");

let scoreQ = 0;
let totalQ = 0;

// bouton start

quizStart.style.display = "none";

start.addEventListener('click', function(){
    if (quizStart.style.display == "none"){
        quizStart.style.display = "block";
    }else{
        quizStart.style.display = "none";
        scoreQ = 0;
        totalQ = 0;
    }
})

// Quiz question

let repQuiz = Object.entries(etude);
let piegeQuiz1 = Object.entries(etude);
let piegeQuiz2 = Object.entries(etude);
let piegeQuiz3 = Object.entries(etude);
let indexQ = 0;
let indexQP1 = 0;
let indexQP2 = 0;
let indexQP3 = 0;


function quizAsk(){

    while (indexQ === indexQP1 || indexQ === indexQP2 || indexQ === indexQP3 || indexQP1 === indexQP2 || indexQP1 === indexQP3 || indexQP2 === indexQP3 ){
        indexQ = Math.floor(Math.random() * repQuiz.length);
        indexQP1 = Math.floor(Math.random() * repQuiz.length);
        indexQP2 = Math.floor(Math.random() * repQuiz.length);
        indexQP3 = Math.floor(Math.random() * repQuiz.length);
    }
    console.log(indexQ, indexQP1, indexQP2, indexQP3)
}
quizAsk()


// CARTE
let note = document.getElementById("notes");
let rendu = document.getElementById("rendu");
let reponse = document.getElementById("reponse");
let action = document.getElementById("action");
let oui = document.getElementById("oui");
let non = document.getElementById("non");
oui.style.display = "none";
non.style.display = "none";

let score = 0;
let total = 0;

let question = Object.entries(etude);
let index = 0;

function ankiAsk(){
    oui.style.display = "none";
    non.style.display = "none";

    index = Math.floor(Math.random() * question.length);

    const [cle, valeur] = question[index];
    
    rendu.innerHTML = '<p>' + cle + '</p>';
    action.addEventListener('click', function(){
        reponse.style.display = "block";
        reponse.innerHTML = '<p>' + valeur + '</p>'
        oui.style.display="block";
        non.style.display= "block";
        
    })
}

non.addEventListener('click', function(){
    total += 1;
    note.innerHTML= '<p>' + score + '/' + total + '</p>';
    reponse.style.display = "none";
    ankiAsk();
})


oui.addEventListener('click', function(){
    score += 1;
    total += 1;
    note.innerHTML= '<p>' + score + '/' + total + '</p>';
    reponse.style.display = "none";
    ankiAsk();
})

ankiAsk();

// afficher et cacher les block

let quiz = document.getElementById("quiz");
let anki = document.getElementById("anki");
let bQuiz = document.getElementById("blockQuiz");
let bAnki = document.getElementById("blockAnki");


quiz.addEventListener('click', function(){
    bQuiz.style.display = "block";
    bAnki.style.display = "none";
})

anki.addEventListener('click', function(){
    bAnki.style.display = "block";
    bQuiz.style.display = "none";
})
