"use strict"

//logic to perform math operation
const calculateBtn = document.getElementById("calculateBtn");
 
calculateBtn.addEventListener("click", () => {
     const num1 = Number(document.getElementById("num1").value.trim())
    const num2 = Number(document.getElementById("num2").value.trim());
    const operator = document.getElementById("operator").value;

    if (isNaN(num1) || isNaN(num2)) {
        return displayAnswer("Enter a valid number please.");
}
    let answer;

    switch (operator) {
        case "add":
            answer = add(num1, num2);
            break;
        case "subtract":
            answer = subtract(num1, num2);
            break;
        case "multiply":
            answer = multiply(num1, num2);
            break;
        case "divide":
            if (num2 === 0) {
                let text = document.getElementById("display");
                return displayAnswer("Division by zero is not allowed. Try again.", "16px");
    }
            answer = divide(num1, num2);
            break;
    }
    displayAnswer(formatNumber(answer), "3rem")
})
// handle decimal number
function formatNumber(value) {
    return Number.isInteger(value) ? value : value.toFixed(2);
}
// function to display calculation
function displayAnswer(message, fontSize) {
    let element = document.getElementById("display");
    element.textContent = message;

    if (fontSize) {
        element.style.fontSize = fontSize;
    }
}

// function to reset UI

const ClearCalculator = document.getElementById("clearBtn");
    
    ClearCalculator.addEventListener("click", () => {
     document.getElementById("display").textContent = ""; 
    document.getElementById("num1").value = ""; 
    document.getElementById("num2").value = ""; 
    document.getElementById("operator").value = "add";
 })

// maths functions
//addition
function add(num1, num2) {
    return num1 + num2;
}
//subtract
function subtract(num1, num2) {
    return num1 - num2;
}
//divide
function divide(num1, num2) {
    
    return num1 / num2;
}
//multiply
function multiply(num1, num2) {
    return num1 * num2;
}