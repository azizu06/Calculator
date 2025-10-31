const mainContainer = document.querySelector(".calculator");
const display = document.querySelector(".display");
const text = document.querySelector(".text");
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
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
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
            let errorMsg = text.innerText;
            errorMsg = "Error";
            return errorMsg; 
        }
        return divide(num1, num2);
    }
}

function getOperator(operators){

    let currentValue = text.innerText;
    let min_idx = currentValue.length;

    for(let i=0; i < 4; i++){
        if(currentValue.includes(operators[i])){
            let operator_idx = currentValue.lastIndexOf(operators[i]);
            if(operator_idx === 0){
               continue;
            }
            else if(operator_idx !== 0){
                if(operator_idx < min_idx){
                    min_idx = operator_idx;
                }  
            }
        }
    }
    if(min_idx !== currentValue.length){
        return min_idx;
    }
    else return 0;
}

function getResult(operators){        
    if(getOperator(operators) === 0){
        return text.innerText;
    }
    let index = getOperator(operators);
    let part1 = text.innerText.substring(0, index).trim();
    let part2 = text.innerText.substring(index+1).trim();
    if(part1 === "" || part2 === ""){
        return text.innerText;
    }
    part1 = Number(part1);
    part2 = Number(part2);
    let result = operate(part1, part2, text.innerText[index]);
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
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

function handleNumber(button){
    if(resultFlag === 1){
            text.innerText = "";
            let currentDisplay = text.innerText + button.innerText;
            text.innerText = currentDisplay;
            resultFlag = 0;
        }
    else{
        let currentDisplay = text.innerText + button.innerText;
        text.innerText = currentDisplay;
    }
}


function handleOperator(button){
    const lastChar = text.innerText.charAt(text.innerText.length - 1);
    const firstChar = text.innerText.charAt(0);
    if(operators.includes(firstChar)){
        operatorFlag = 0;
    }
    if(operators.includes(lastChar)){
        text.innerText = text.innerText.slice(0, -1) + button.innerText;
        operatorFlag = 1;
        resultFlag = 0;
        return;
    }
    const index = getOperator(operators);
    if(index !== 0){
        let part1 = text.innerText.substring(0, index).trim();
        let part2 = text.innerText.substring(index+1).trim();
        if(part2 !== undefined && part2.trim() !== "" && part1.trim() !== ""){
            let currentResult = getResult(operators);
            text.innerText = String(currentResult) + button.innerText;
            operatorFlag = 1;
            resultFlag = 0;
            return;
        } 
    }
    else{
        text.innerText += button.innerText;
        resultFlag = 0;
    }
}

numbersButton.forEach(button => {
    button.addEventListener("click", () => {
        handleNumber(button);
    })
})

operatorsButton.forEach(button => {
    button.addEventListener("click", () => {
        handleOperator(button);
    })
})

equal.addEventListener("click", () => {
    let result = getResult(operators);
    text.innerText = result;
    resultFlag = 1;
    operatorFlag = 0;
})


clear.addEventListener("click", () => {
    text.innerText = "";
    resultFlag = 0;
    operatorFlag = 0;
})

decimal.addEventListener("click", () => {
    const index = getOperator(operators);
    if(index === 0){
        if(text.innerText.includes(".")){
            return;
        }
        else text.innerText += decimal.innerText;
    }
    else if(index !== 0){
        if(text.innerText.substring(index+1).includes(".")){
            return;
        }
        else text.innerText += decimal.innerText;
    }
})

deleteButton.addEventListener("click", () => {
    let currentDisplay = text.innerText;
    text.innerText = currentDisplay.slice(0, -1);
})

function compareKeys(button, key){
    if (button.innerText === key){
        return true;
    }
    else return false;
}

document.addEventListener("keydown", (e) => {
    const key = e.key;
    if(key === "Backspace"){
        deleteButton.click();
        e.preventDefault();
    } 
    else if(key === "Escape"){
        clear.click();
        e.preventDefault();
    } 
    else if(key === "."){
        decimal.click();
        e.preventDefault();
    } 
    else if(key === "Enter"){
        equal.click();
        e.preventDefault();
    } 
    else if(operators.includes(key)){
        const opBtn = Array.from(operatorsButton).find(button => compareKeys(button, key));
        if(opBtn){
            handleOperator(opBtn);
            e.preventDefault();
        }
    } 
    else if(numbers.includes(key)){
        const numBtn = Array.from(numbersButton).find(button => compareKeys(button, key));
        if(numBtn){
            handleNumber(numBtn);
            e.preventDefault();
        }
    }
})


