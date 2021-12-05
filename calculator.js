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
let equation = [];

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
            return alert("Something went wrong. \nPress 'Clear' and try again.");
    }
};

//Makes the button value appear on the display area.
numbers.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (button.textContent == "." && display.textContent.includes(".")) return;
        display.textContent += button.textContent;
    })
})

//takes the previous two number values and solves that equation
//before assigning a new value to the operator & second number
operators.forEach((button) => {
    button.addEventListener("click", (e) => {
        if ((operator && firstNum) != null)
        {
            nextNum = Number(display.textContent);
            display.textContent = "";
            firstNum = operate(operator, firstNum, nextNum);
            operator = button.textContent;
            nextNum = null;
        }
        else {
            firstNum = Number(display.textContent);
            operator = button.textContent;
            display.textContent = "";
        }
    })
})

//solves the equation
eqls.addEventListener("click", (e) => {
    if (firstNum != null && nextNum == null)
    {
        nextNum = Number(display.textContent);
    }
    display.textContent = operate(operator, firstNum, nextNum);
    firstNum = null;
    nextNum = null;
    operator = null;
})

//done
//clears every value and display
clear.addEventListener("click", (e) => {
    firstNum = null;
    nextNum = null;
    operator = null;
    display.textContent = "";
})

//done
//backspaces a number
back.addEventListener("click", (e) => {
    lastLetterGone = display.textContent.slice(0,-1);
    display.textContent = lastLetterGone;
})