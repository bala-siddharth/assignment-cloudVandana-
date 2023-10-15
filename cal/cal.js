"use strict";

const input = document.getElementById('input'); 
const numbers = document.querySelectorAll('.numbers div'); 
const operators = document.querySelectorAll('.operators div'); 
const result = document.getElementById('result'); 
const clear = document.getElementById('clear'); 
let resultDisplayed = false; 

// adding click handlers to number buttons
numbers.forEach(numberButton => {
  numberButton.addEventListener("click", (e) => {
    const currentString = input.innerHTML;
    const lastChar = currentString[currentString.length - 1];

    if (!resultDisplayed) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed && "+-×÷".includes(lastChar)) {
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = e.target.innerHTML;
    }
  });
});

// adding click handlers to operator buttons
operators.forEach(operatorButton => {
  operatorButton.addEventListener("click", (e) => {
    const currentString = input.innerHTML;
    const lastChar = currentString[currentString.length - 1];

    if ("+-×÷".includes(lastChar)) {
      const newString = currentString.slice(0, -1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length === 0) {
      console.log("Enter a number first");
    } else {
      input.innerHTML += e.target.innerHTML;
    }
  });
});

// on click of 'equal' button
result.addEventListener("click", () => {
  const inputString = input.innerHTML;
  const numbers = inputString.split(/[\+\-\×÷]/g);
  const operators = inputString.replace(/[0-9]|\./g, "").split("");

  const performOperation = (operator) => {
    let index = operators.indexOf(operator);
    while (index !== -1) {
      switch (operator) {
        case "÷":
          numbers[index] = numbers[index] / numbers[index + 1];
          break;
        case "×":
          numbers[index] = numbers[index] * numbers[index + 1];
          break;
        case "-":
          numbers[index] = numbers[index] - numbers[index + 1];
          break;
        case "+":
          numbers[index] = parseFloat(numbers[index]) + parseFloat(numbers[index + 1]);
          break;
      }
      operators.splice(index, 1);
      numbers.splice(index + 1, 1);
      index = operators.indexOf(operator);
    }
  };

  ["÷", "×", "-", "+"].forEach(performOperation);

  input.innerHTML = numbers[0];
  resultDisplayed = true;
});

// clearing the input on press of clear
clear.addEventListener("click", () => {
  input.innerHTML = "";
});