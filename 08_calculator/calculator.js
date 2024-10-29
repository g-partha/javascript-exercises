const add = function(number1, number2) {
  return number1 + number2;
	
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(numberArray) {
	let sumValue = 0;
  for(let i = 0; i < numberArray.length; i++){
    sumValue += numberArray[i];
  }
  return sumValue;
};

const multiply = function(numberArray) {
	let multipliedValue = 1;
  for(let i = 0; i < numberArray.length; i++){
    multipliedValue *= numberArray[i];
  }
  return multipliedValue;
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
