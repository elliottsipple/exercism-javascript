var Bob = function () {
  module.exports = function () {
    this.hey = function (string) {
      if (string.match(/^\s*$/))
        return 'Fine. Be that way!';
      else if (string.toUpperCase() === string && string.toLowerCase() !== string)
        return 'Whoa, chill out!';
      else if (string.match(/\?\s*$/))
        return 'Sure.';
      else
        return 'Whatever.';
    }
  }
}();