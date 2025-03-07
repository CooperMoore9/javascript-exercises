const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue
  );
  return sumWithInitial
};

const multiply = function(array) {
  const initialValue = 1;
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue * currentValue, initialValue
  );
  return sumWithInitial
};

const power = function(num1, num2) {
	return num1 ** num2;
  // return Math.pow(num1, num2);
  }
  

const factorial = function(num) {
	if(num === 0 || num === 1){
    return 1;
  }else{
    return num * factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
