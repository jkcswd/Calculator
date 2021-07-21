//populate function
const populateDisplay = function(){
  const display = document.querySelector('.display');
  const numbers = document.querySelectorAll('.num');

  numbers.forEach(number => number.addEventListener('click', () => {
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