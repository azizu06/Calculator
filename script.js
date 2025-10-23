const mainContainer = document.querySelector(".calculator");
const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let num1;
let num2;
let operatorSign;
let currentValue;

function operate(num1, num2, operatorSign){
    if(operatorSign === "+"){
        add(num1, num2);
    }
    else if(operatorSign === "-"){
        subtract(num1, num2);
    }
    else if(operatorSign === "*"){
        multiply(num1, num2);
    }
    else if(operatorSign === "/"){
        divide(num1, num2);
    }
}



for(let i = 0; i < 10; i++){
    const number = document.createElement("button");
    numbers.appendChild(number);
}

for(let i = 0; i < 6; i++){
    const operator = document.createElement("button");
    operators.appendChild(operator);
}

