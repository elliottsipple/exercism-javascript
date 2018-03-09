var Pangram = function () {
  module.exports = function (string) {
    var alpha = 'abcdefghijklmnopqrstuvwxyz';
    
    this.isPangram = function () {
      string = string.toLowerCase();
      for (var i = 0; i < alpha.length; i++) {
        if (!string.includes(alpha[i])) {
          return false;
        }
      }
      return true;
    }
  };
}();