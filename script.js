// Calculator buttons
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const addition = document.getElementById("add");
const substraction = document.getElementById("substract");
const multiplication = document.getElementById("multiply");
const division = document.getElementById("divide");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

// Calculator Dispalay
const display = document.querySelector(".display");

// Calculator Dispalay Logic
let displayValue = "";

one.addEventListener("click", function () {
  displayValue += one.textContent;
  display.textContent = displayValue;
});
two.addEventListener("click", function () {
  displayValue += two.textContent;
  display.textContent = displayValue;
});
three.addEventListener("click", function () {
  displayValue += three.textContent;
  display.textContent = displayValue;
});
four.addEventListener("click", function () {
  displayValue += four.textContent;
  display.textContent = displayValue;
});
five.addEventListener("click", function () {
  displayValue += five.textContent;
  display.textContent = displayValue;
});
six.addEventListener("click", function () {
  displayValue += six.textContent;
  display.textContent = displayValue;
});
seven.addEventListener("click", function () {
  displayValue += seven.textContent;
  display.textContent = displayValue;
});
eight.addEventListener("click", function () {
  displayValue += eight.textContent;
  display.textContent = displayValue;
});
nine.addEventListener("click", function () {
  displayValue += nine.textContent;
  display.textContent = displayValue;
});
zero.addEventListener("click", function () {
  displayValue += zero.textContent;
  display.textContent = displayValue;
});
clear.addEventListener("click", function () {
  display.textContent = 0;
  displayValue = "";
});

// CALCULATOR LOGIC
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let result = "";
addition.addEventListener("click", function () {
  firstNumber = Number(displayValue);
  display.textContent = 0;
  displayValue = "";
  operator = "add";
});
substraction.addEventListener("click", function () {
  firstNumber = Number(displayValue);
  display.textContent = 0;
  displayValue = "";
  operator = "substract";
});
multiplication.addEventListener("click", function () {
  firstNumber = Number(displayValue);
  display.textContent = 0;
  displayValue = "";
  operator = "multiply";
});
division.addEventListener("click", function () {
  firstNumber = Number(displayValue);
  display.textContent = 0;
  displayValue = "";
  operator = "divide";
});
equals.addEventListener("click", function () {
  secondNumber = Number(displayValue);
  displayValue = operate(operator, firstNumber, secondNumber);
  display.textContent = displayValue;
  firstNumber = displayValue;
  secondNumber = 0;
});

// add
const add = function (firstNumber, secondNumber) {
  result = firstNumber + secondNumber;
  return result;
};
// substract
const substract = function (firstNumber, secondNumber) {
  result = firstNumber - secondNumber;
  return result;
};
// multiply
const multiply = function (firstNumber, secondNumber) {
  result = firstNumber * secondNumber;
  return result;
};
// divide
const divide = function (firstNumber, secondNumber) {
  result = firstNumber / secondNumber;
  return result;
};

const operate = function (operator, firstNumber, secondNumber) {
  let result = 0;
  if (operator === "substract") {
    result = substract(firstNumber, secondNumber);
  } else if (operator === "add") {
    result = add(firstNumber, secondNumber);
  } else if (operator === "multiply") {
    result = multiply(firstNumber, secondNumber);
  } else if (operator === "divide") {
    result = divide(firstNumber, secondNumber);
  }
  return result;
};
