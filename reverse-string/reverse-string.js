var reverseString = function (string) {
  /* return empty string if empty or undefined, otherwise reverse using split, reverse, join */
  return ((string == '' || string == undefined) ? '' : string.split('').reverse().join(''));
};

module.exports = reverseString;