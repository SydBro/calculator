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

const btns = document.querySelectorAll("button");
const out = document.querySelector("output");
btns.forEach((button) => {
    button.addEventListener("click", (e) => {
        out.textContent = button.textContent;
    })
})