const convertToCelsius = function(fTemp) {
  ctemp = (fTemp - 32) * 5/9;
  return Math.round(ctemp*10)/10;
};

const convertToFahrenheit = function(cTemp) {
  ftemp = (cTemp * (9/5)) + 32;
  return Math.round(ftemp * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
