const findTheOldest = function(array) {
    const d = new Date();
    let year = d.getFullYear();
    let arrayCopy = array.map(item => {
        if(!item.yearOfDeath){
            item.yearOfDeath = year;
        }
        return item;
    });


    arrayCopy.sort((a, b) => {
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    });
    return arrayCopy[0];
};

// Do not edit below this line
module.exports = findTheOldest;
