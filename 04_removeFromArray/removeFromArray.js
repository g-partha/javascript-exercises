const removeFromArray = function(myArray, ...items) {
    const newArray = [];
    myArray.forEach(
        (item) => {
            if(!(items.includes(item))){
                newArray.push(item);
            }
        }
    )
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
