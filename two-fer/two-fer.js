var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  if (who == 'Alice') {
    return 'One for Alice, one for me.';
  }
  else if (who == 'Bob') {
    return 'One for Bob, one for me.';
  }
  else {
    return 'One for you, one for me.'
  }
};

module.exports = TwoFer;
