const sides = document.querySelectorAll(".side-input")
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {    
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);

    if(sides[0].value <= 0 || sides[1].value <= 0) {
        outputEl.innerText = "please enter the value which is greater than zero to calculate"
    }
    else {
        outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse
    }
        
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);