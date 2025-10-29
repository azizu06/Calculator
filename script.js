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
let resultFlag = 0;
let operatorFlag = 0;

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
                min_idx = operator_idx;
            }
        }
    }
    if(min_idx !== currentValue.length){
        return currentValue[min_idx];
    }
    else return 0;
}

function getResult(operators){        
    if(getOperator(operators) === 0){
        return display.innerText;
    }
    let currentOperator = getOperator(operators);
    let num1 = display.innerText.split(currentOperator)[0].trim();
    let num2 = display.innerText.split(currentOperator)[1].trim();
    if(num1 === "" || num2 === ""){
        return display.innerText;
    }
    num1 = Number(num1);
    num2 = Number(num2);
    console.log(`${currentOperator}, ${num1}, ${num2}`);
    let result = operate(num1, num2, currentOperator);
    operatorFlag = 0;
    let resultStr = String(result);
    if(resultStr.includes(".")){
        let afterDecimal = resultStr.split(".")[1];
        if(afterDecimal.length >= 3){
            let roundedResult = Math.round(result * 100) / 100;
            return roundedResult;
        }
    }   
    return result;
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
        if(resultFlag === 1){
            display.innerText = "";
            let currentDisplay = display.innerText + button.innerText;
            display.innerText = currentDisplay;
            resultFlag = 0;
        }
        else{
            let currentDisplay = display.innerText + button.innerText;
            display.innerText = currentDisplay;
        }
    })
})

operatorsButton.forEach(button => {
    button.addEventListener("click", () => {
        const lastChar = display.innerText.charAt(display.innerText.length - 1);
        if(operators.includes(lastChar)){
            display.innerText = display.innerText.slice(0, -1) + button.innerText;
            operatorFlag = 1;
            resultFlag = 0;
            return;
        }
        const operatorPresent = getOperator(operators);
        if(operatorPresent !== 0){
            let leftNum = display.innerText.split(operatorPresent)[0]
            let rightNum = display.innerText.split(operatorPresent)[1];
            if(rightNum !== undefined && rightNum.trim() !== "" && leftNum.trim() !== ""){
                let currentResult = getResult(operators);
                display.innerText = String(currentResult) + button.innerText;
                operatorFlag = 1;
                resultFlag = 0;
                return;
            } 
        }
        else{
            display.innerText += button.innerText;
        }
    })
})

equal.addEventListener("click", () => {
    let result = getResult(operators);
    display.innerText = result;
    resultFlag = 1;
    operatorFlag = 0;
})


clear.addEventListener("click", () => {
    display.innerText = "";
    resultFlag = 0;
    operatorFlag = 0;
})

decimal.addEventListener("click", () => {
    const operatorPresent = getOperator(operators);
    if(operatorPresent === 0){
        if(display.innerText.includes(".")){
            return;
        }
        else display.innerText += decimal.innerText;
    }
    else if(operatorPresent !== 0){
        if(display.innerText.split(operatorPresent)[1].includes(".")){
            return;
        }
        else display.innerText += decimal.innerText;
    }
})

deleteButton.addEventListener("click", () => {
    let currentDisplay = display.innerText;
    display.innerText = currentDisplay.slice(0, -1);
})


