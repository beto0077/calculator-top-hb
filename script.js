const calcButtons = document.querySelectorAll(".calc-button");
const currentUserInputs = document.querySelector(".current-user-inputs");
const calculationResult = document.querySelector(".calculation-result");

const decimalPoint = ".";
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
    return number1 / number2;
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
    return typeof result === "string" ? result : Number(result.toFixed(2));
}

function operandsAreUsable() {
    return !(typeof firstOperand === 'string' || typeof secondOperand === 'string')
}

function joinNumericalDigits(currentValue, digitToAdd) {
    let temporaryText = String(currentValue) + digitToAdd;
    //temporaryText += digitToAdd;
    return (/\.$|\.0+$/).test(temporaryText) ? temporaryText : Number(temporaryText);
}

function deleteNumericalDigits(currentValue) {
    let temporaryText = String(currentValue).slice(0, -1);
    return (/\.$|\.0+$/).test(temporaryText) ? temporaryText : Number(temporaryText);
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
    } else {
        currentUserInputs.textContent = 0;
    }
}

function provideFinalCalculation() {
    if (operandsAreUsable()) {
        if (firstOperand !== null && secondOperand !== null) {
            let result = operate(operator, firstOperand, secondOperand);
            showEnteredData();
            calculationResult.textContent = result;
            isOperationCompleted = true;
        }
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
    if (operandsAreUsable()) {
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
}

function addDecimalPoint() {
    if (isOperationCompleted) {
        cleanCalculationData();
    }
    if ((firstOperand === 0 || firstOperand) && !operator) {
        if (!(/\./).test(firstOperand)) {
            firstOperand = joinNumericalDigits(firstOperand, decimalPoint);
        }
    } else if (secondOperand === 0 || secondOperand) {
        if (!(/\./).test(secondOperand)) {
            secondOperand = joinNumericalDigits(secondOperand, decimalPoint);
        }
    }
    showEnteredData();
}

function processDeletionRequest() {
    if (isOperationCompleted) {
        cleanCalculationData();
    }
    if (!operator) {
        if (String(firstOperand).length === 1) {
            firstOperand = null;
        } else if (firstOperand !== null) {
            firstOperand = deleteNumericalDigits(firstOperand);
        }
    } else if (secondOperand === null) {
        operator = "";
    } else {
        if (String(secondOperand).length === 1) {
            secondOperand = null;
        } else {
            secondOperand = deleteNumericalDigits(secondOperand);
        }
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
        case "decimal-point":
            addDecimalPoint();
            break;
        case "delete":
            processDeletionRequest();
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