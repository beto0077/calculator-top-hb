let firstOperand = 0;
let secondOperand = 0;
let operator = "";

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
    return Number((number1 / number2).toFixed(3));
}

function operate(operator, number1, number2) {
    let result = 0;
    switch (operator) {
        case "+":
            result= add(number1, number2);
            break;
        case "-":
            result= subtract(number1, number2);
            break;
        case "*":
            result= multiply(number1, number2);
            break;
        case "/":
            result= divide(number1, number2);
            break;
        default:
            result= 0.1134;
            break;
    }
    return result;
}

const testOperate = ["+","-","*","/"];
for (let index = 0; index < testOperate.length; index++) {
    firstOperand = Math.floor(Math.random()*10) + 1;
    secondOperand = Math.floor(Math.random()*10) + 1;
    console.log(` Testing: ${firstOperand} ${testOperate[index]} ${secondOperand}`);
    console.log(operate(testOperate[index], firstOperand, secondOperand));
}