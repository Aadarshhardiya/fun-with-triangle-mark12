const quizForm = document.querySelector(".quiz-form")
const submitAnsBtn = document.querySelector("#submit-ans-btn")
const outputEl = document.querySelector("#output");

const correctAnswers = ["90°","Right angle","Isosceles Triangle","Equilateral Triangle","Equilateral Triangle","75cm²","Obtuse Angle Triangle","Acute Angle Triangle","35 cm2","75°"];

function calculateScore() {
    let score = 0;
    let index = 0; 
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    outputEl.innerText = "your score is " + score;
}

submitAnsBtn.addEventListener("click", calculateScore);