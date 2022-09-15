const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1,angle2,angle3) {
    const sumOfAngles = (angle1 + angle2 + angle3);
    return sumOfAngles;
}

function isTriangle() {
    
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));

    if(inputs > 0) {
        outputEl.innerText = "please put positive value"
    }

    else if(sumOfAngles === 180){
        outputEl.innerText = "These angles form a Triangle-🔺";
    }
    else {
        outputEl.innerText = "These angles do not form a Triangle-🙃";

    }
}

isTriangleBtn.addEventListener("click", isTriangle)