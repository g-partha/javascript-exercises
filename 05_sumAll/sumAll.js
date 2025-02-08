const sumAll = function(number1, number2) {
    let result = 0;
    if(!(typeof number1 == "number" && typeof number2 == "number")){
        return "ERROR";
    } else if(number1 < 0 || number2 < 0){
        return "ERROR";
    } else if(!(Number.isInteger(number1) && Number.isInteger(number2))){
        return "ERROR";
    } else if(number1 < number2){
        for(let i = number1; i <= number2; i++) result += i;
    } else {
        for(let i = number1; i >= number2; i--) result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
