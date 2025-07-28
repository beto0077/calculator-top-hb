const calcButtons = document.querySelectorAll(".calc-button");
const currentUserInputs = document.querySelector(".current-user-inputs");
const calculationResult = document.querySelector(".calculation-result");

let firstOperand = null;
let secondOperand = null;
let operator = "";
let isOperationCompleted = false;

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        isOperationCompleted = true;
        return "You can't do that and you know it bro...";
    }
    return Number((number1 / number2).toFixed(3));
}

function operate(operator, number1, number2) {
    let result = 0;
    switch (operator) {
        case "+":
            result = add(number1, number2);
            break;
        case "-":
            result = subtract(number1, number2);
            break;
        case "*":
            result = multiply(number1, number2);
            break;
        case "/":
            result = divide(number1, number2);
            break;
        default:
            isOperationCompleted = true;
            return "First you have to give me some data so I can calculate something for you, my friend!";
    }
    return result;
}

function joinNumericalDigits(currentValue, digitToAdd) {
    let temporaryText = String(currentValue);
    temporaryText += digitToAdd;
    return Number(temporaryText);
}

function showEnteredData() {
    let currentValue = "";
    if (firstOperand !== null) {
        if (secondOperand === null) {
            currentValue = `${firstOperand} ${operator}`;
            currentUserInputs.textContent = currentValue;
        } else {
            currentValue = `${firstOperand} ${operator} ${secondOperand}`;
            currentUserInputs.textContent = currentValue;
        }
    }
}

function provideFinalCalculation() {
    if (firstOperand !== null && secondOperand !== null) {
        let result = operate(operator, firstOperand, secondOperand);
        showEnteredData();
        calculationResult.textContent = result;
        isOperationCompleted = true;
    }
}

function cleanCalculationData() {
    firstOperand = null;
    secondOperand = null;
    operator = "";
    currentUserInputs.textContent = 0;
    calculationResult.textContent = 0;
    isOperationCompleted = false;
}

function processSelectedNumber(number) {
    if (isOperationCompleted) {
        cleanCalculationData();
    }
    if (firstOperand === null || (firstOperand === 0 && !operator)) {
        firstOperand = Number(number);
    } else if (!operator) {
        firstOperand = joinNumericalDigits(firstOperand, number);
    } else if (secondOperand === null || secondOperand === 0) {
        secondOperand = Number(number);
    } else {
        secondOperand = joinNumericalDigits(secondOperand, number);
    }
    showEnteredData();
}

function checkOperatorStatus(value) {
    if (isOperationCompleted) {
        cleanCalculationData();
    }
    if (operator && secondOperand) {
        let result = operate(operator, firstOperand, secondOperand);
        calculationResult.textContent = result;
        firstOperand = result;
        operator = value;
        secondOperand = null;
    } else if (firstOperand) {
        operator = value;
    }
    showEnteredData();
}

function handleUserInput(chosenButton) {
    const buttonType = chosenButton.target.dataset.type;
    const buttonValue = chosenButton.target.dataset.value;
    switch (buttonType) {
        case "number":
            processSelectedNumber(buttonValue);
            break;
        case "operator":
            checkOperatorStatus(buttonValue);
            break;
        case "equal":
            provideFinalCalculation();
            break;
        case "clear":
            cleanCalculationData();
            break;
        default:
            console.log("Something's not right bro...");
            break;
    }
}

calcButtons.forEach(button => {
    button.addEventListener("click", handleUserInput);
});