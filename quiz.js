const quizForm = document.querySelector(".quiz-form")
const submitAnsBtn = document.querySelector("#submit-ans-btn")
const outputEl = document.querySelector("#output");

const correctAnswers = ["90°" ,"Right angle" ,"Isosceles Triangle" ,"Equilateral Triangle" ,"Equilateral Triangle" ,"75cm²" ,"Obtuse Angle Triangle" ,"Acute Angle Triangle" ,"35 cm2" ,"75°"];

function calculateScore() {
    let score = 0;
    let index = 0; 
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()){
        console.log('index value ',index)
        if(value === correctAnswers[index]){
            console.log('is correct ', index+1)
            score = score + 1;
        }
        index = index + 1;
    }
    console.log(score);
    outputEl.innerText = "your score is " + score
}

submitAnsBtn.addEventListener("click", calculateScore);