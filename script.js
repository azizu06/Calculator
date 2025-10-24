const mainContainer = document.querySelector(".calculator");
const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");
const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const row4 = document.querySelector(".row4");

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

const numbersButton = document.querySelectorAll(".numbers");
const deleteButton = document.querySelector(".delete");
const decimal = document.querySelector(".decimal");
const operatorsButton = document.querySelectorAll(".operators");
const zero = document.querySelector(".zero");
const clear = document.querySelector(".clear");

numbersButton.forEach(button => {
    button.addEventListener("click", () => {
        let currentDisplay = button.innerText;
        display.innerText += currentDisplay;
    })
})

operatorsButton.forEach(button => {
    button.addEventListener("click", () => {
        let currentDisplay = button.innerText;
        display.innerText += currentDisplay;
    })
})

clear.addEventListener("click", () => {
    display.innerText = "";
})

decimal.addEventListener("click", () => {
    display.innerText = decimal.innerText;
})

deleteButton.addEventListener("click", () => {
    display.innerText = deleteButton.innerText;
})

zero.addEventListener("click", () => {
    let currentDisplay = button.innerText;
    display.innerText += currentDisplay;
})


