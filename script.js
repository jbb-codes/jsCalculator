let leftOperand;
let operationType;
let rightOperand;
let displayValue = "";

const addCalc = (a, b) => a + b;

const subCalc = (a, b) => a - b;

const multiCalc = (a, b) => a * b;

const diviCalc = (a, b) => a / b;

function operate(operator, num1, num2) {}

const keys = document.querySelector(".calcKeys");

const display = document.querySelector("#display");

keys.addEventListener("click", (e) => {
  if (display.textContent !== "0") {
    displayValue += e.target.textContent;
    display.textContent = displayValue;
  } else if (display.textContent === "0") {
    displayValue = e.target.textContent;
    display.textContent = e.target.textContent;
  }
});

const clearScreen = document.querySelector("#acButton");

clearScreen.addEventListener("click", (e) => {
  display.textContent = "0";
  displayValue = "";
  e.stopPropagation();
});

const operatorButtons = document.querySelectorAll(".operationButton");

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    operationType = e.target.textContent;
    console.log(operationType);
  });
});

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
  }
});
