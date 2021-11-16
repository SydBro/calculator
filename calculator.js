const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const btns = document.querySelectorAll("button");
const display = document.querySelector("output");
let firstNum;
let nextNum;
let operator;
let equation = [firstNum, nextNum];

// const add = function(num){
//     let result = num.reduce((total, current) => {return total + current});
//     return result;
// };
// const subtract = function(num){
//     let result = num.reduce((total, current) => {return total - current});
//     return result;
// };
// const multiply = function(num){
//     let result = num.reduce((total, current) => {return total * current});
//     return result;
// };
// const divide = function(num){
//     let result = num.reduce((total, current) => {return total / current});
//     return result;
// };

const add = function(num1, num2){
    additive = num1 + num2;
    console.log(additive);
    return num1 + num2;
};
const subtract = function(num1, num2){
    return result;
};
const multiply = function(num1, num2){
    return result;
};
const divide = function(num1, num2){
    return result;
};

function operate(operator, num1, num2) {
    switch(operator){
        case "+":
            add(num1, num2);
            break;
    }

};

//Makes the button value appear on the display area.
btns.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (button.className == "number") {
            display.textContent += button.textContent;
        }
        if (button.className == "operator") {
            if (button.id != "equals") {
                operator = button.textContent;
            }
            else {
                operate(operator, firstNum, nextNum);
            }
            
            if (firstNum == null || undefined) {
                firstNum = Number(display.textContent);
                display.textContent = ""
            }
            else {
                nextNum = Number(display.textContent);
                display.textContent = ""
            }
        }
        console.log(firstNum, operator, nextNum)
    })
})













































// numbers.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         display.textContent += button.textContent;
//         if (button.className=="number")
//         {
//             if (firstNum == (null || undefined))
//             {
//                 firstNum = Number(button.textContent);
//             }
//             else 
//             {
//                 if (nextNum != (null || undefined))
//                 {
//                     firstNum = firstNum + nextNum;
//                     nextNum = Number(button.textContent);
//                 }
//                 else {
//                     nextNum = Number(button.textContent);
//                 }
//             }
//             console.log(firstNum, nextNum);
//         }
//     })
// })

// operators.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         if (firstNum == (null || undefined))
//         {
//             display.textContent = "Please enter a number."
//         }
//         else {
//             firstNum = Number(display.textContent);
//         }
//     })
// })