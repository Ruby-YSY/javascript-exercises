const sumAll = function (num1, num2) {
  function isValidNumber(num) {
    return Number.isInteger(num) && num >= 0;
  }

  if (!isValidNumber(num1) || !isValidNumber(num2)) {
    return "ERROR";
  }

  if (num1 > num2) {
    [num1, num2] = [num2, num1];
  }

  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
