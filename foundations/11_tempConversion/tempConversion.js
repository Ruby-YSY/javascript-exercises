function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function (temperature) {
  return round((temperature - 32) * (5 / 9), 1);
};

const convertToFahrenheit = function (temperature) {
  return round(temperature * (9 / 5) + 32, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
