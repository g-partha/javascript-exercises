const reverseString = function(string) {
const myArray = string.split("");
myArray.reverse();
reversedString = myArray.join("");
return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
