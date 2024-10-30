const fibonacci = function(placeOfNumberParameter) {
    let placeOfNumber = +placeOfNumberParameter;
    let fib = 1;
    let fib_1 = 0;
    if(placeOfNumber == 0){
        return 0;
    }
    else if(placeOfNumber < 0){
        return "OOPS";
    }

    else{
        for(let i = 0; i < placeOfNumber; i++){
        if (i == 0){continue;}
        let fib_2 = fib_1;
        fib_1 = fib;
        fib = fib_1 + fib_2;
        }
        return fib;
    }
};

// Do not edit below this line
module.exports = fibonacci;
