const add = function(number1, number2) {
  return number1 + number2;
	
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(numberArray) {
return numberArray.reduce((result, currentValue) => {
  return result + currentValue;
}, 0);
};

const multiply = function(numberArray) {
  return numberArray.reduce((result, currentValue) => {
    return result * currentValue;
  }, 1);
};

const power = function(number1, number2) {
	let requiredValue = 1;
  for(let i = 0; i < number2; i++){
    requiredValue *= number1;
  }
  return requiredValue;
};

const factorial = function(number) {
	if(number == 0){
    return 1;
  }
  else{
    let requiredValue = 1;
    for(let i = 1; i <= number; i++){
      requiredValue *= i;
    }
    return requiredValue;
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
