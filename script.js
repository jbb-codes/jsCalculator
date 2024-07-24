let leftOperand = "";
let rightOperand = "";
let operationType = "";
let displayValue = "";
let currentExpression = "";
let result = "";

const maxNumDigits = 7;

const addCalc = (a, b) => a + b;

const subCalc = (a, b) => a - b;

const multiCalc = (a, b) => a * b;

const diviCalc = (a, b) => a / b;

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      result = addCalc(num1, num2);
      break;
    case "-":
      result = subCalc(num1, num2);
      break;
    case "•":
      result = multiCalc(num1, num2);
      break;
    case "÷":
      result = diviCalc(num1, num2);
      break;
  }
}

function expression() {
  // expArr = expression.split("");
  // const operatorStr = expArr.find(
  //   (string) =>
  //     string === "+" || string === "-" || string === "•" || string === "÷"
  // );
  // const operatorIndex = expArr.findIndex(
  //   (index) => index === "+" || index === "-" || index === "•" || index === "÷"
  // );
  // leftOpStr = expression.slice(0, operatorIndex);
  // rightOpStr = expression.slice(operatorIndex + 1, expression.length);
  // console.log(leftOpStr, rightOpStr);
  // operate(operatorStr, Number(leftOpStr), Number(rightOpStr));
  operate(operationType, Number(leftOperand), Number(rightOperand));
  leftOperand = result;
  rightOperand = "";
}

function clear() {
  display.innerText = "";
  leftOperand = "";
  rightOperand = "";
  operationType = "";
  displayValue = "";
  result = "";
}

function appendNumber(number) {
  if (operationType !== "") {
    rightOperand += number.innerText;
    displayValue = rightOperand;
    currentExpression += number.innerText;
  } else {
    leftOperand += number.innerText;
    displayValue = leftOperand;
    currentExpression += number.innerText;
  }
}

function chooseOperation(operation) {
  operationType = operation.innerText;
  currentExpression += operation.innerText;
}

function update(value) {
  display.innerText = value;
  console.log(leftOperand, rightOperand);
}

const numbers = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operationButton");
const display = document.querySelector("#display");
const clearScreen = document.querySelector("#acButton");
const equalsButton = document.querySelector("#equalsButton");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (number.innerText === "." && displayValue.includes(".")) return;
    appendNumber(number);
    update(displayValue);
  });
});

clearScreen.addEventListener("click", (e) => {
  clear();
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (operationType !== "") {
      expression(currentExpression);
      update(result);
      console.log(result);
    }
    chooseOperation(button);
  });
});

equalsButton.addEventListener("click", () => {
  controlOperator = false;
  if (result !== "") {
    operate(operationType, Number(result), Number(rightOperand));
    update(result);
  } else {
    operate(operationType, Number(leftOperand), Number(rightOperand));
    update(result);
  }
});
