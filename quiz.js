const quizForm = document.querySelector(".quiz-form")
const submitAnsBtn = document.querySelector("#submit-ans-btn")
const outputEl = document.querySelector("#output");

const correctAnswers = ["90°","Right angle","Isosceles Triangle","Equilateral Triangle","Equilateral Triangle","75cm²","Obtuse Angle Triangle","Acute Angle Triangle","35 cm2","75°"];

function calculateScore() {
    let score = 0;
    const formResults = new FormData(quizForm);
    for (var p of formResults) {
        if(p[0] == "same" && p[1] =="90°"){
            score++
        }else if(p[0] == "same1" && p[1] =="Right angle"){
            score++
        }else if(p[0] == "same2" && p[1] =="Isosceles Triangle"){
            score++
        }else if(p[0] == "same3" && p[1] =="Equilateral Triangle"){
            score++
        }else if(p[0] == "same4" && p[1] =="Equilateral Triangle"){
            score++
        }else if(p[0] == "same5" && p[1] =="75cm²"){
            score++
        }else if(p[0] == "same6" && p[1] =="Obtuse Angle Triangle"){
            score++
        }else if(p[0] == "same7" && p[1] =="Acute Angle Triangle"){
            score++
        }else if(p[0] == "same8" && p[1] =="35 cm2"){
            score++
        }else if(p[0] == "same9" && p[1] =="75°"){
            score++
        }
    }
    outputEl.innerText = "your score is " + score;
}

submitAnsBtn.addEventListener("click", calculateScore);