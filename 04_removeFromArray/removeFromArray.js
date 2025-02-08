const removeFromArray = function(array, ...args) {
    const result = [];
    for(item of array){
        if(!(args.includes(item))) result.push(item);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
