let leftOperand;
let operationType;
let rightOperand;
let displayValue = "";
const maxNumDigits = 7;

const addCalc = (a, b) => a + b;

const subCalc = (a, b) => a - b;

const multiCalc = (a, b) => a * b;

const diviCalc = (a, b) => a / b;

function operate(operator, num1, num2) {}

const equals = document.querySelector("#equalsButton");

equals.addEventListener("click", () => {
  if (display.textContent !== "0") {
    displayValue = operate(operationType, leftOperand, rightOperand);
    display.textContent = displayValue;
  }
});

const display = document.querySelector("#display");

const numbers = document.querySelectorAll(".numberButton");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (display.textContent !== "0" && displayValue.length <= maxNumDigits) {
      displayValue += e.target.textContent;
      display.textContent = displayValue;
    } else if (
      display.textContent === "0" &&
      displayValue.length <= maxNumDigits
    ) {
      displayValue = e.target.textContent;
      display.textContent = displayValue;
    }
  });
});

const clearScreen = document.querySelector("#acButton");

clearScreen.addEventListener("click", (e) => {
  display.textContent = "0";
  displayValue = "";
  decimalButton.disabled = false;
  e.stopPropagation();
});

const operatorButtons = document.querySelectorAll(".operationButton");

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    operationType = e.target.textContent;
  });
});

const decimalButton = document.querySelector("#decimalButton");

decimalButton.addEventListener("click", (e) => {
  displayValue += e.target.textContent;
  display.textContent = displayValue;
  decimalButton.disabled = true;
  e.stopPropagation();
});
