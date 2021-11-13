const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const btns = document.querySelectorAll("button");
const display = document.querySelector("output");
let firstNum;
let nextNum;
let operator;
let equation = [firstNum, nextNum];

const add = function(num){
    let result = num.reduce((total, current) => {return total + current});
    return result;
};
const subtract = function(num){
    let result = num.reduce((total, current) => {return total - current});
    return result;
};
const multiply = function(num){
    let result = num.reduce((total, current) => {return total * current});
    return result;
};
const divide = function(num){
    let result = num.reduce((total, current) => {return total / current});
    return result;
};

function operate(operator, num1, num2) {

};

//Makes the button value appear on the display area.
btns.forEach((button) => {
    button.addEventListener("click", (e) => {
        display.textContent = button.textContent;
        if (button.className=="number")
        {
            if (firstNum == (null || undefined))
            {
                firstNum = Number(button.textContent);
            }
            else 
            {
                if (nextNum != (null || undefined))
                {
                    firstNum = firstNum + nextNum;
                    nextNum = Number(button.textContent);
                }
                else {
                    nextNum = Number(button.textContent);
                }
            }
            console.log(firstNum, nextNum);
        }
        if (button.className=="operator")
        {
            if (firstNum == (null || undefined))
            {
                display.textContent = "Please enter a number."
            }
            else {
                
            }
        }
    })
})