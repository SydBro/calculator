const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const btns = document.querySelectorAll("button");
const display = document.querySelector("output");
const eqls = document.querySelector("#equals");
const clear = document.querySelector(".clear");
const back = document.querySelector(".back");
let firstNum;
let nextNum;
let operator;

const add = function(num1, num2){
    return num1 + num2;
};
const subtract = function(num1, num2){
    return num1 - num2;
};
const multiply = function(num1, num2){
    return num1 * num2;
};
const divide = function(num1, num2){
    return (num1 / num2);
};

function operate(operator, num1, num2) {
    switch(operator){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
        default:
            return "Nothing happened.";
    }
};

//Makes the button value appear on the display area.
numbers.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (button.textContent == "." && display.textContent.includes(".")) return;
        display.textContent += button.textContent;
    })
})

operators.forEach((button) => {
    button.addEventListener("click", (e) => {
        if ((operator && firstNum) != ("" || null))
        {
            nextNum = Number(display.textContent);
            display.textContent = "";
            firstNum = operate(operator, firstNum, nextNum);
            operator = button.textContent;
            nextNum = "";
            console.log(operator, firstNum, nextNum)
        }
        else {
            firstNum = Number(display.textContent);
            operator = button.textContent;
            display.textContent = "";
            console.log(operator, firstNum, nextNum)
        }
    })
})

eqls.addEventListener("click", (e) => {
    if (firstNum != null && nextNum == "")
    {
        nextNum = Number(display.textContent);
    }
    display.textContent = operate(operator, firstNum, nextNum);
    console.log(operator, firstNum, nextNum)
    firstNum = "";
    nextNum = "";
    operator = undefined;
})

//done
//clears every value and display
clear.addEventListener("click", (e) => {
    firstNum = "";
    nextNum = "";
    operator = undefined;
    display.textContent = "";
})

//done
//backspaces a number
back.addEventListener("click", (e) => {
    lastLetterGone = display.textContent.slice(0,-1);
    display.textContent = lastLetterGone;
})