// afficher et cacher les block

let quiz = document.getElementById("quiz");
let quizH = document.getElementById("quizH");
let anki = document.getElementById("anki");
let bQuiz = document.getElementById("blockQuiz");
let bQuizH = document.getElementById("blockQuizH");
let bAnki = document.getElementById("blockAnki");
let notesQ = document.getElementById("notesQ");
let notesQH = document.getElementById("notesQH");
let note = document.getElementById("notes");



quiz.addEventListener('click', function(){
    bQuiz.style.display = "block";
    quiz.style.border = "5px solid white";
    quizH.style.border = "2px solid white";
    anki.style.border = "2px solid white";
    bAnki.style.display = "none";
    note.style.display = "none";
    bQuizH.style.display = "none";
    notesQH.style.display = "none";
    notesQ.style.display = "block";

})

quizH.addEventListener('click', function(){
    bQuizH.style.display = "block";
    quiz.style.border = "2px solid white";
    quizH.style.border = "5px solid white";
    anki.style.border = "2px solid white";
    bAnki.style.display = "none";
    note.style.display = "none";
    bQuiz.style.display = "none";
    notesQ.style.display = "none";
    notesQH.style.display = "block";
})

anki.addEventListener('click', function(){
    bAnki.style.display = "block";
    quiz.style.border = "2px solid white";
    quizH.style.border = "2px solid white";
    anki.style.border = "5px solid white";
    bQuiz.style.display = "none";
    notesQ.style.display = "none";
    bQuizH.style.display = "none";
    notesQH.style.display = "none";
    note.style.display = "block";
})

// Quiz

let start = document.getElementById("start");
let askQuiz = document.getElementById("askQuiz");
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
        notesQ.innerHTML = "<i>" + scoreQ + "/" + totalQ + "</i>";
        bQuiz.style.background = "rgb(121, 248, 178)";
        setTimeout(quizAsk, 1000);
    }else{
        rep1.innerHTML = "Mauvaise réponse";
        totalQ += 1;
        notesQ.innerHTML = "<i>" + scoreQ + "/" + totalQ + "</i>";
        setTimeout(quizAsk, 1000);
        bQuiz.style.background = "rgb(248, 121, 121)";
    }
    
})
rep2.addEventListener('click', function(){
    if (repList[b] === valeurRep){
        rep2.innerHTML = "Bonne réponse";
        scoreQ += 1;
        totalQ += 1;
        notesQ.innerHTML = "<i>" + scoreQ + "/" + totalQ + "</i>";
        bQuiz.style.background = "rgb(121, 248, 178)";
        setTimeout(quizAsk, 1000);
    }else{
        rep2.innerHTML = "Mauvaise réponse";
        totalQ += 1;
        notesQ.innerHTML = "<i>" + scoreQ + "/" + totalQ + "</i>";
        setTimeout(quizAsk, 1000);
        bQuiz.style.background = "rgb(248, 121, 121)";
    }
    
})
rep3.addEventListener('click', function(){
    if (repList[c] === valeurRep){
        rep3.innerHTML = "Bonne réponse";
        scoreQ += 1;
        totalQ += 1;
        notesQ.innerHTML = "<i>" + scoreQ + "/" + totalQ + "</i>";
        bQuiz.style.background = "rgb(121, 248, 178)";
        setTimeout(quizAsk, 1000);
    }else{
        rep3.innerHTML = "Mauvaise réponse";
        totalQ += 1;
        notesQ.innerHTML = "<i>" + scoreQ + "/" + totalQ + "</i>";
        setTimeout(quizAsk, 1000);
        bQuiz.style.background = "rgb(248, 121, 121)";
    }
    
})
rep4.addEventListener('click', function(){
    if (repList[d] === valeurRep){
        rep4.innerHTML = "Bonne réponse";
        scoreQ += 1;
        totalQ += 1;
        notesQ.innerHTML = "<i>" + scoreQ + "/" + totalQ + "</i>";
        bQuiz.style.background = "rgb(121, 248, 178)";
        setTimeout(quizAsk, 1000);
    }else{
        rep4.innerHTML = "Mauvaise réponse";
        totalQ += 1;
        notesQ.innerHTML = "<i>" + scoreQ + "/" + totalQ + "</i>";
        setTimeout(quizAsk, 1000);
        bQuiz.style.background = "rgb(248, 121, 121)";
    }
    
})

// Quiz Hard

let startH = document.getElementById("startH");
let askQuizH = document.getElementById("askQuizH");
let quizStartH = document.getElementById("quizStartH");
let rep1H = document.getElementById("rep1H");
let rep2H = document.getElementById("rep2H");
let rep3H = document.getElementById("rep3H");
let rep4H = document.getElementById("rep4H");
let revision = document.getElementById("revisions");

let scoreQH = 0;
let totalQH = 0;

// bouton start H

let dataE = etudeHard;

quizStartH.style.display = "none";
let repQuizH = Object.entries(dataE);

startH.addEventListener('click', function(){
    if (quizStartH.style.display == "none"){
        quizStartH.style.display = "block";
    }else{
        quizStartH.style.display = "none";
        scoreQH = 0;
        totalQH = 0;
        repQuizH = Object.entries(dataE);

    }
})

// Quiz question H


let questionH = Object.entries(etudeCarte);
let piegeQuiz1H = Object.entries(dataE);
let piegeQuiz2H = Object.entries(dataE);
let piegeQuiz3H = Object.entries(dataE);
let indexQH = 0;
let indexQP1H = 0;
let indexQP2H = 0;
let indexQP3H = 0;

let [cleRepH, valeurRepH] = repQuizH[indexQH];
let [clePi1H, valeurPi1H] = repQuizH[indexQP1H];
let [clePi2H, valeurPi2H] = repQuizH[indexQP2H];
let [clePi3H, valeurPi3H] = repQuizH[indexQP3H];

let [cleH, valeurH] = questionH[indexQH];

let repListH= [];

let aH = 0;
let bH = 0;
let cH = 0;
let dH = 0;

let saveQuest = "";
let saveVal = "";
let saveRep ="";



function quizAskH(){
    if (repQuizH.length > 4){
        
        // console.log("a"+repQuizH.length)
        // console.log("b"+questionH.length)
        bQuizH.style.background = "rgb(255, 255, 255)";


        indexQH = 0;
        indexQP1H = 0;
        indexQP2H = 0;
        indexQP3H = 0;

        aH = 0;
        bH = 0;
        cH = 0;
        dH = 0;



        while (indexQH === indexQP1H || indexQH === indexQP2H || indexQH === indexQP3H || indexQP1H === indexQP2H || indexQP1H === indexQP3H || indexQP2H === indexQP3H ){
            indexQH = Math.floor(Math.random() * repQuizH.length);
            indexQP1H = Math.floor(Math.random() * repQuizH.length);
            indexQP2H = Math.floor(Math.random() * repQuizH.length);
            indexQP3H = Math.floor(Math.random() * repQuizH.length);
        }

        [cleRepH, valeurRepH] = repQuizH[indexQH];
        [clePi1H, valeurPi1H] = repQuizH[indexQP1H];
        [clePi2H, valeurPi2H] = repQuizH[indexQP2H];
        [clePi3H, valeurPi3H] = repQuizH[indexQP3H];

        [cleH, valeurH] = questionH[indexQH];

        askQuizH.innerHTML = '<p>' + cleRepH + '</p>';

        repListH = [valeurRepH, valeurPi1H, valeurPi2H, valeurPi3H];

        while (aH === bH || aH === cH || aH === dH || bH === cH || bH === dH || cH === dH ){
            aH = Math.floor(Math.random() * repListH.length);
            bH = Math.floor(Math.random() * repListH.length);
            cH = Math.floor(Math.random() * repListH.length);
            dH = Math.floor(Math.random() * repListH.length);
        }

        // console.log( aH, bH, cH, dH)

        rep1H.innerHTML = repListH[aH];
        rep2H.innerHTML = repListH[bH];
        rep3H.innerHTML = repListH[cH];
        rep4H.innerHTML = repListH[dH];

        saveQuest = cleRepH;
        saveVal = valeurH;
        saveRep = valeurRepH;

        
    }else{
        rep1H.innerHTML = "Game Over";
        rep2H.innerHTML = "Game Over";
        rep3H.innerHTML = "Game Over";
        rep4H.innerHTML = "Game Over";
    }
    
    

}
quizAskH();


rep1H.addEventListener('click', function(){
    if (repListH[aH]=== valeurRepH){
        rep1H.innerHTML = "Bonne réponse";
        
        if (repQuizH.length > 4){
            scoreQH += 1;
            totalQH += 1;
            notesQH.innerHTML = "<i>" + scoreQH + "/" + totalQH + "</i>";
            revision.innerHTML += '<p style="background: rgb(248, 121, 121);"><b>' + saveQuest + "</b> = " + ' "<u>' + saveVal + '</u>" ' + saveRep + "<br/></p>";
            repQuizH.splice(indexQH,1);
            questionH.splice(indexQH,1);
            bQuizH.style.background = "rgb(121, 248, 178)";
            setTimeout(quizAskH, 1000);
        }
        
    }else{
        rep1H.innerHTML = "Mauvaise réponse";
        if (repQuizH.length > 4){
            totalQH += 1;
            notesQH.innerHTML = "<i>" + scoreQH + "/" + totalQH + "</i>";
            setTimeout(quizAskH, 1000);
            bQuizH.style.background = "rgb(248, 121, 121)";
        }
    }
    
})
rep2H.addEventListener('click', function(){
    if (repListH[bH] === valeurRepH){
        rep2H.innerHTML = "Bonne réponse";
        scoreQH += 1;
        totalQH += 1;
        if (repQuizH.length > 4){
            scoreQH += 1;
            totalQH += 1;
            notesQH.innerHTML = "<i>" + scoreQH + "/" + totalQH + "</i>";
            revision.innerHTML += '<p style="background: rgb(121, 187, 248);"><b>' + saveQuest + "</b> = " + ' "<u>' + saveVal + '</u>" ' + saveRep + "<br/></p>";
            repQuizH.splice(indexQH,1);
            questionH.splice(indexQH,1);
            bQuizH.style.background = "rgb(121, 248, 178)";
            setTimeout(quizAskH, 1000);
        }

    }else{
        rep2H.innerHTML = "Mauvaise réponse";
        if (repQuizH.length > 4){
            totalQH += 1;
            notesQH.innerHTML = "<i>" + scoreQH + "/" + totalQH + "</i>";
            setTimeout(quizAskH, 1000);
            bQuizH.style.background = "rgb(248, 121, 121)";
        }
    }
    
})
rep3H.addEventListener('click', function(){
    if (repListH[cH] === valeurRepH){
        rep3H.innerHTML = "Bonne réponse";
        scoreQH += 1;
        totalQH += 1;
        if (repQuizH.length > 4){
            scoreQH += 1;
            totalQH += 1;
            notesQH.innerHTML = "<i>" + scoreQH + "/" + totalQH + "</i>";
            revision.innerHTML += '<p style="background: rgb(121, 248, 178);"><b>' + saveQuest + "</b> = " + ' "<u>' + saveVal + '</u>" ' + saveRep + "<br/></p>";
            repQuizH.splice(indexQH,1);
            questionH.splice(indexQH,1);
            bQuizH.style.background = "rgb(121, 248, 178)";
            setTimeout(quizAskH, 1000);
        }


    }else{
        rep3H.innerHTML = "Mauvaise réponse";
        if (repQuizH.length > 4){
            totalQH += 1;
            notesQH.innerHTML = "<i>" + scoreQH + "/" + totalQH + "</i>";
            setTimeout(quizAskH, 1000);
            bQuizH.style.background = "rgb(248, 121, 121)";
        }
    }
    
})
rep4H.addEventListener('click', function(){
    if (repListH[dH] === valeurRepH){
        rep4H.innerHTML = "Bonne réponse";
        scoreQH += 1;
        totalQH += 1;
        if (repQuizH.length > 4){
            scoreQH += 1;
            totalQH += 1;
            notesQH.innerHTML = "<i>" + scoreQH + "/" + totalQH + "</i>";
            revision.innerHTML += '<p style="background: rgb(246, 248, 121);"><b>' + saveQuest + "</b> = " + ' "<u>' + saveVal + '</u>" ' + saveRep + "<br/></p>";
            repQuizH.splice(indexQH,1);
            questionH.splice(indexQH,1);
            bQuizH.style.background = "rgb(121, 248, 178)";
            setTimeout(quizAskH, 1000);
        }


    }else{
        rep4H.innerHTML = "Mauvaise réponse";
        if (repQuizH.length > 4){
            totalQH += 1;
            notesQH.innerHTML = "<i>" + scoreQH + "/" + totalQH + "</i>";
            setTimeout(quizAskH, 1000);
            bQuizH.style.background = "rgb(248, 121, 121)";
        }
    }
    
})


// CARTE

let rendu = document.getElementById("rendu");
let reponse = document.getElementById("reponse");
let action = document.getElementById("action");
let oui = document.getElementById("oui");
let non = document.getElementById("non");
oui.style.display = "none";
non.style.display = "none";

let score = 0;
let total = 0;

let question = Object.entries(etudeCarte);
let index = 0;

function ankiAsk(){
    oui.style.display = "none";
    non.style.display = "none";

    index = Math.floor(Math.random() * question.length);

    const [cle, valeur] = question[index];
    
    rendu.innerHTML = '<p>' + cle + '</p>';
    action.addEventListener('click', function(){
        reponse.style.display = "block";
        reponse.innerHTML = '<p style= "text-align: center;"><b>' + cle + " </b><br/> " + valeur + '</p>'
        oui.style.display="block";
        non.style.display= "block";
        
    })
}

non.addEventListener('click', function(){
    total += 1;
    note.innerHTML= '<i>' + score + '/' + total + '</i>';
    reponse.style.display = "none";
    ankiAsk();
})


oui.addEventListener('click', function(){
    score += 1;
    total += 1;
    note.innerHTML= '<i>' + score + '/' + total + '</i>';
    reponse.style.display = "none";
    ankiAsk();
})

ankiAsk();


