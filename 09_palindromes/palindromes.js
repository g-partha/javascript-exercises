const palindromes = function (string) {
    const alphaNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let lowerString = string.toLowerCase();
    const stringArray = lowerString.split("");
    const alphaNumericStringArray = stringArray.filter((character) => alphaNumericCharacters.includes(character));
    let alphaNumericString = alphaNumericStringArray.join("");
    let reversedAlphaNumericString = alphaNumericString.split("").reverse().join("");
    return alphaNumericString == reversedAlphaNumericString;

};

// Do not edit below this line
module.exports = palindromes;
