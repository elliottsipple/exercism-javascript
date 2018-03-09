var Gigasecond = function () {
  module.exports = function (date) {
    this.startDate = date;

    this.date = function() {
      /* set startTime to time of startDate */
      var startTime = this.startDate.getTime();
      /* add 10^12 milliseconds (10^9 seconds) to startTime */
      var endDate = new Date(startTime + 1000000000000);
      return endDate;
    }
  }
}();