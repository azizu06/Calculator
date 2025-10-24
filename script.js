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
let operators = ["/", "*", "-", "+"];

function operate(num1, num2, operatorSign){
    if(operatorSign === "+"){
        return add(num1, num2);
    }
    else if(operatorSign === "-"){
        return subtract(num1, num2);
    }
    else if(operatorSign === "*"){
        return multiply(num1, num2);
    }
    else if(operatorSign === "/"){
        if(num2 === 0){
            let errorMsg = display.innerText;
            errorMsg = "Error";
            return errorMsg; 
        }
        return divide(num1, num2);
    }
}

function getOperator(operators){
    let currentValue = display.innerText;
    let min_idx = currentValue.length;
    for(let i=0; i < 4; i++){
        if(currentValue.includes(operators[i])){
            let operator_idx = currentValue.indexOf(operators[i]);
            if(operator_idx < min_idx){
                min_idx = operator_idx
            }
        }
    }
    return currentValue[min_idx];
}

const numbersButton = document.querySelectorAll(".numbers");
const deleteButton = document.querySelector(".delete");
const decimal = document.querySelector(".decimal");
const operatorsButton = document.querySelectorAll(".operators");
const zero = document.querySelector(".zero");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal")

numbersButton.forEach(button => {
    button.addEventListener("click", () => {
        let currentDisplay = display.innerText + button.innerText;
        display.innerText = currentDisplay; 
    })
})

operatorsButton.forEach(button => {
    button.addEventListener("click", () => {
        let currentDisplay = button.innerText;
        display.innerText += currentDisplay;
    })
})

equal.addEventListener("click", () => {
    let currentOperator = getOperator(operators);
    let num1 = display.innerText.split(currentOperator)[0];
    let num2 = display.innerText.split(currentOperator)[1];
    num1 = Number(num1);
    num2 = Number(num2);
    console.log(`${currentOperator}, ${num1}, ${num2}`);
    let result = operate(num1, num2, currentOperator);
    let resultStr = String(result);
    if(resultStr.includes(".")){
        let afterDecimal = resultStr.split(".")[1];
        if(afterDecimal.length >= 4){
            roundedResult = Math.round(result * 100) / 100;
            display.innerText = roundedResult;
        }
    }
    else display.innerText = result;
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
    let currentDisplay = zero.innerText;
    display.innerText += currentDisplay;
})


