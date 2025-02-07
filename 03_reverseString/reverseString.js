const reverseString = function(string) {
    const array = [];
    for(let i = string.length - 1; i >= 0; i--){
        array.push(string.charAt(i));
    }
    return array.join("");
};

// Do not edit below this line
module.exports = reverseString;
