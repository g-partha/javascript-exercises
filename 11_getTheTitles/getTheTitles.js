const getTheTitles = function(books) {
    const titleArray = [];
    for(i = 0; i < books.length; i++){
        titleArray.push(books[i].title);
    }
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
