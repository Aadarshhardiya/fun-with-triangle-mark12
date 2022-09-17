const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1,angle2,angle3) {
  
    const sumOfAngles = (angle1 + angle2 + angle3);
    return sumOfAngles;
}

function isTriangle() {
    
    if(inputs[0].value <0 || inputs[1].value <0 || inputs[2].value < 0) {
        outputEl.innerText = "Please put positive value, triangle angle's value never be negative"
    }  
    else{

        const sumOfAngles = calculateSumOfAngles (Number(inputs[0].value), Number(inputs[1].value),Number(inputs[2].value));

        if(sumOfAngles === 180){
            outputEl.innerText = "These angles form a Triangle-🔺";
        }
        else {
            outputEl.innerText = "These angles do not form a Triangle-🙃";
        }
    }
}

isTriangleBtn.addEventListener("click", isTriangle)