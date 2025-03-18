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

// Quiz

let start = document.getElementById("start");
let askQuiz = document.getElementById("askQuiz");
let quizStart = document.getElementById("quizStart");
let rep1 = document.getElementById("rep1");
let rep2 = document.getElementById("rep2");
let rep3 = document.getElementById("rep3");
let rep4 = document.getElementById("rep4");
let notesQ = document.getElementById("notesQ");

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

let [cleRep, valeurRep] = repQuiz[indexQ];
let [clePi1, valeurPi1] = repQuiz[indexQP1];
let [clePi2, valeurPi2] = repQuiz[indexQP2];
let [clePi3, valeurPi3] = repQuiz[indexQP3];

let repList= [];

let a = 0;
let b = 0;
let c = 0;
let d = 0;

function quizAsk(){
    
    bQuiz.style.background = "rgb(255, 255, 255)";

    indexQ = 0;
    indexQP1 = 0;
    indexQP2 = 0;
    indexQP3 = 0;

    a = 0;
    b = 0;
    c = 0;
    d = 0;



    while (indexQ === indexQP1 || indexQ === indexQP2 || indexQ === indexQP3 || indexQP1 === indexQP2 || indexQP1 === indexQP3 || indexQP2 === indexQP3 ){
        indexQ = Math.floor(Math.random() * repQuiz.length);
        indexQP1 = Math.floor(Math.random() * repQuiz.length);
        indexQP2 = Math.floor(Math.random() * repQuiz.length);
        indexQP3 = Math.floor(Math.random() * repQuiz.length);
    }
    
    [cleRep, valeurRep] = repQuiz[indexQ];
    [clePi1, valeurPi1] = repQuiz[indexQP1];
    [clePi2, valeurPi2] = repQuiz[indexQP2];
    [clePi3, valeurPi3] = repQuiz[indexQP3];

    askQuiz.innerHTML = '<p>' + cleRep + '</p>';

    repList = [valeurRep, valeurPi1, valeurPi2, valeurPi3];

    while (a === b || a === c || a === d || b === c || b === d || c === d ){
    a = Math.floor(Math.random() * repList.length);
    b = Math.floor(Math.random() * repList.length);
    c = Math.floor(Math.random() * repList.length);
    d = Math.floor(Math.random() * repList.length);
    }

    rep1.innerHTML = repList[a];
    rep2.innerHTML = repList[b];
    rep3.innerHTML = repList[c];
    rep4.innerHTML = repList[d];

}
quizAsk();


rep1.addEventListener('click', function(){
    if (repList[a]=== valeurRep){
        rep1.innerHTML = "Bonne réponse";
        scoreQ += 1;
        totalQ += 1;
        notesQ.innerHTML = "<p>" + scoreQ + "/" + totalQ + "</p>";
        bQuiz.style.background = "rgb(121, 248, 178)";
        setTimeout(quizAsk, 1000);
    }else{
        rep1.innerHTML = "Mauvaise réponse";
        totalQ += 1;
        notesQ.innerHTML = "<p>" + scoreQ + "/" + totalQ + "</p>";
        setTimeout(quizAsk, 1000);
        bQuiz.style.background = "rgb(248, 121, 121)";
    }
    
})
rep2.addEventListener('click', function(){
    if (repList[b] === valeurRep){
        rep2.innerHTML = "Bonne réponse";
        scoreQ += 1;
        totalQ += 1;
        notesQ.innerHTML = "<p>" + scoreQ + "/" + totalQ + "</p>";
        bQuiz.style.background = "rgb(121, 248, 178)";
        setTimeout(quizAsk, 1000);
    }else{
        rep2.innerHTML = "Mauvaise réponse";
        totalQ += 1;
        notesQ.innerHTML = "<p>" + scoreQ + "/" + totalQ + "</p>";
        setTimeout(quizAsk, 1000);
        bQuiz.style.background = "rgb(248, 121, 121)";
    }
    
})
rep3.addEventListener('click', function(){
    if (repList[c] === valeurRep){
        rep3.innerHTML = "Bonne réponse";
        scoreQ += 1;
        totalQ += 1;
        notesQ.innerHTML = "<p>" + scoreQ + "/" + totalQ + "</p>";
        bQuiz.style.background = "rgb(121, 248, 178)";
        setTimeout(quizAsk, 1000);
    }else{
        rep3.innerHTML = "Mauvaise réponse";
        totalQ += 1;
        notesQ.innerHTML = "<p>" + scoreQ + "/" + totalQ + "</p>";
        setTimeout(quizAsk, 1000);
        bQuiz.style.background = "rgb(248, 121, 121)";
    }
    
})
rep4.addEventListener('click', function(){
    if (repList[d] === valeurRep){
        rep4.innerHTML = "Bonne réponse";
        scoreQ += 1;
        totalQ += 1;
        notesQ.innerHTML = "<p>" + scoreQ + "/" + totalQ + "</p>";
        bQuiz.style.background = "rgb(121, 248, 178)";
        setTimeout(quizAsk, 1000);
    }else{
        rep4.innerHTML = "Mauvaise réponse";
        totalQ += 1;
        notesQ.innerHTML = "<p>" + scoreQ + "/" + totalQ + "</p>";
        setTimeout(quizAsk, 1000);
        bQuiz.style.background = "rgb(248, 121, 121)";
    }
    
})


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


