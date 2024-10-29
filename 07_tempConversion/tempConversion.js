const convertToCelsius = function(temp) {
  let tempC = (temp - 32) * (5 / 9);
  let formattedTempC = (Math.round(tempC * 10)) / 10;
  return formattedTempC;
};

const convertToFahrenheit = function(temp) {
  let tempF = temp * (9 / 5) + 32;
  let formattedTempF = (Math.round(tempF * 10)) / 10;
  return formattedTempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
