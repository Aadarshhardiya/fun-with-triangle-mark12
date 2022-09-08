const sides = document.querySelectorAll('.sides-input')
const calculateBtn = document.querySelector('#calculate-btn')
const outputEl = document.querySelector("#output");

function calculateSumOfSides(side1,side2,side3) {
    const sumOfSides = side1 + side2 +side3;
    return sumOfSides; 
    
}

function calculateAreaOfTriangle() {
    const sumOfSides = calculateSumOfSides(Number(sides[0].value),Number(sides[1].value),Number(sides[2].value))
    const areaOfTriangle = sumOfSides / 2;
    outputEl.innerText = "The area of triangle is " + areaOfTriangle
}

calculateBtn.addEventListener("click", calculateAreaOfTriangle)