var Year = function (year) {
    this.year = year;
};

Year.prototype.isLeap = function () {
    /* is leap year if divisible by 4, but not 100, unless also divisible by 400 */
    return ((this.year % 4 == 0) && ((this.year % 100 != 0) || (this.year % 400 == 0)));
};

module.exports = Year;
