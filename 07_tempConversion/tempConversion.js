const ftoc = function(fahrenheit) {

  let convertedF = (fahrenheit - 32) * (5/9);
  let roundedF = Math.round(convertedF * 10) / 10;
  return roundedF;
 
};

const ctof = function(celsius) {

  let convertedC = celsius * 9/5 + 32;
  let roundedC = Math.round(convertedC * 10) / 10
  return roundedC;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
