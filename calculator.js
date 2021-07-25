// fix ! button so that it operates the current operands before caluating?

//Module design pattern wrapping
calculatorNamespace = function(){
  let firstOperand;
  let secondOperand;
  let operatorSelected;
  let displayClear = 0;
  const display = document.querySelector('.display');
  let count = 0;

  //answer function
  const answer = function() {
    const answerBtn = document.querySelector('.answer');

    answerBtn.addEventListener('click', () => {
      secondOperand = display.innerHTML;
      display.innerHTML = operate(parseInt(firstOperand),parseInt(secondOperand),operatorSelected).toString();
      secondOperand = '';
      count = 0;
      
    });
  }


  //clear function
  const clear = function() {
    const clearBtn = document.querySelector('.clear');

    clearBtn.addEventListener('click', () => {
      display.innerHTML = '';
      firstOperand = '';
      secondOperand = '';
      operatorSelected = '';
      count = 0;
    });
  }

  //delete function
  const del = function() {
    const delBtn = document.querySelector('.delete');

    delBtn.addEventListener('click', () => {
      display.innerHTML = display.innerHTML.slice(0, -1);
    });

  }

  //factorial function
  const factorialBtn = function() {
    const facBtn = document.querySelector('.factorial');
  
    facBtn.addEventListener('click', () => {
      display.innerHTML = factorial(parseInt(display.innerHTML))
    });
  }

  //operator capture function
  const operatorCapture = function() {
    const operators = document.querySelectorAll('.operator');

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
    const numbers = document.querySelectorAll('.num');

    numbers.forEach(number => number.addEventListener('click', () => {
      if (displayClear) {
        display.innerHTML = '';
        displayClear -= 1;
      };
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
      
      case '^': 
        return power(a, b);
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
  clear();
  del();
  factorialBtn();
  answer();
}

calculatorNamespace();