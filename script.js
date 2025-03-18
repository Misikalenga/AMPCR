//encodeage et affichage des notes 
let note = document.getElementById("notes");
let rendu = document.getElementById("rendu");
let reponse = document.getElementById("reponse");
let action = document.getElementById("action");
let oui = document.getElementById("oui");
let non = document.getElementById("non");
oui.style.display = "none";
non.style.display = "none";




// ANKI

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
