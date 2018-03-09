var Binary = function () {
  module.exports = function (string) {
    var value = 0;

    this.string = string;

    this.toDecimal = function () {
      for (var i = 0; i < this.string.length; i++) {
        /* foreach index in string that is a 1, add to value the decimal value */
        if (string[string.length - (i + 1)] == '1')
          value += Math.pow(2, i);
        /* if some index in string is not 0 or 1, return 0 */
        if (string[string.length - (i + 1)].match(/[^01]/))
          return 0;
      }
      return value;
    }
  };
}();