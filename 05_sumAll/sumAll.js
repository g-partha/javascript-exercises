const sumAll = function(initialInteger, finalInteger) {
    let sum = 0;
    if(initialInteger < 0 || finalInteger < 0){
        return "ERROR";
    }

    else if(!(Number.isInteger(initialInteger)) || !(Number.isInteger(finalInteger)) ){
        return "ERROR";
    }

    else if(!(typeof(initialInteger) === "number") || !(typeof(finalInteger) === "number")){
        return "ERROR";
    }

    else if(initialInteger > finalInteger){
        for(let i = initialInteger; i >= finalInteger; i--){
            sum += i;
        }
    }

    else{
        for(i = initialInteger; i <= finalInteger; i++){
            sum += i;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
