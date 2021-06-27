const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce( (sum, e) => sum + e, 0);
};

const multiply = function(array) {
  return array.reduce( (sum, e) => sum * e, 1);
};

const power = function(a,b) {
  return a**b;
	
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  }else {
   return n * factorial(n-1);
  }
};