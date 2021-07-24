//Module design pattern wrapping
calculatorNamespace = function(){
  let firstOperand;
  let secondOperand;
  let operatorSelected;
  let displayClear = 0;

  //operator capture function
  const operatorCapture = function() {
    const operators = document.querySelectorAll('.operator');
    const display = document.querySelector('.display');
    let count = 0;

    operators.forEach(operator => operator.addEventListener('click', () => {
      if (count === 0) {
        firstOperand = display.innerHTML;
        operatorSelected = operator.innerHTML; 
        count += 1;
        displayClear += 1;
      }else{
        secondOperand = display.innerHTML;
        display.innerHTML = operate(parseInt(firstOperand),parseInt(secondOperand),operatorSelected).toString();
        operatorSelected = operator.innerHTML; 
        firstOperand = display.innerHTML;
        count += 1;
        displayClear += 1;
      };
    }));

  }

  //populate function
  const populateDisplay = function(){
    const display = document.querySelector('.display');
    const numbers = document.querySelectorAll('.num');

    numbers.forEach(number => number.addEventListener('click', () => {
      if (displayClear) {
        display.innerHTML = '';
        displayClear -= 1;
      }
      display.innerHTML += number.innerHTML;

    }));

  }

  //operate function

  const operate = function(a, b, operator){
    switch(operator) {

      case '/':
        return divide(a, b);

      case '+':
        return add(a, b);
      
      case '-':
        return subtract(a, b);
      
      case '*':
        return multiply(a, b);
    }

  }


  //CALCULATE FUNCTIONS

  const divide = function(a, b) {
      return a / b;
  }

  const add = function(a, b) {
    return a + b;
  }

  const subtract = function(a, b) {
    return a - b;
  }


  const multiply = function(a, b) {
    return a * b;
  }

  const power = function(a, b) {
    return a ** b;

  }

  const factorial = function(n) {
    if (n === 0) {
      return 1;
    }else {
    return n * factorial(n-1);
    }
  }
  populateDisplay();
  operatorCapture();
}

calculatorNamespace();