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
        case "&divide":
            return divide(num1, num2);
        default:
            return "Nothing happened.";
    }

};

//Makes the button value appear on the display area.
btns.forEach((button) => {
    button.addEventListener("click", (e) => {
        
        //display a number
        //when an operator is hit, store the number in variable firstNum & clear the box
        //when an equal sign is hit, store the number in variable nextNum & show the answer

        if (button.className == "number")
        {
            if (display.textContent == (firstNum || nextNum))
            {
                display.textContent = "";
            }
            display.textContent += button.textContent;
        }

        if (button.className == "operator")
        {
            if ((display.textContent == (null || "") && firstNum == (null || "")))
            {
                firstNum = 0;
            }
            if ((operator && firstNum && nextNum) != ("" || null))
            {
                nextNum = Number(display.textContent);
                operator = button.textContent;
                display.textContent = "";
                console.log(operator, firstNum, nextNum)
            }
            if ((operator && firstNum) != ("" || null))
            {
                nextNum = Number(display.textContent);
                firstNum = operate(operator, firstNum, nextNum);
                operator = button.textContent;
                display.textContent = firstNum;
                console.log(operator, firstNum, nextNum)
            }
            else {
                firstNum = Number(display.textContent);
                operator = button.textContent;
                display.textContent = "";
                console.log(operator, firstNum, nextNum)
            }
        }

    })
})

eqls.addEventListener("click", (e) => {
    if (nextNum == null)
    {
        nextNum = Number(display.textContent);
    }
    display.textContent = operate(operator, firstNum, nextNum);
    console.log(operator, firstNum, nextNum)
    firstNum = null;
    nextNum = null;
    operator = null;
})

clear.addEventListener("click", (e) => {
    firstNum = null;
    nextNum = null;
    operator = null;
    display.textContent = "";
})

back.addEventListener("click", (e) => {
    lastLetterGone = display.textContent.slice(0,-1);
    display.textContent = lastLetterGone;
})