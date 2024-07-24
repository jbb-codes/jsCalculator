let leftOperand = "";
let rightOperand = "";
let operationType = "";
let displayValue = "";
let result = "";

const maxNumDigits = 12;

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
  if (rightOperand === "0" && operationType === "÷") {
    rightOperand = "";
    return update("No!");
  }
  operate(operationType, Number(leftOperand), Number(rightOperand));
  if (result.toString().includes(".")) result = result.toFixed(maxNumDigits);
  if (result.length > maxNumDigits) result = Number(result).toExponential(8);
  leftOperand = result;
  rightOperand = "";
  update(result);
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
  if (operationType !== "" && rightOperand.length < maxNumDigits) {
    rightOperand += number.innerText;
    displayValue = rightOperand;
  } else if (leftOperand.length < maxNumDigits) {
    leftOperand += number.innerText;
    displayValue = leftOperand;
  }
}

function chooseOperation(operation) {
  operationType = operation.innerText;
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
      expression();
      update(result);
    }
    chooseOperation(button);
  });
});

equalsButton.addEventListener("click", () => {
  expression();
});
