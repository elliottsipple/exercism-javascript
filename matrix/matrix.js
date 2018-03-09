var Matrix = function () {
  module.exports = function (matrix) {
    this.rows = matrix.split('\n').map(function (row) {
      return row.split(' ').map(function (e) {
        return parseInt(e);
      });
    });
  
    this.columns = Object.keys(this.rows[0]).map(function (colNum) {
      return this.map(function (row) {
        return row[colNum];
      });
    }, this.rows);
  };
}();