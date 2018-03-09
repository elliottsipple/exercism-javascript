var SpaceAge = function () {
  module.exports = function (age) {
    var earthSecondsPerYear = 31557600;

    var planetTimeScale = {
      Mercury: 0.2408467,
      Venus: 0.61519726,
      Mars: 1.8808158,
      Jupiter: 11.862615,
      Saturn: 29.447498,
      Uranus: 84.016846,
      Neptune: 164.79132
    }

    this.seconds = age;

    this.onEarth = function () {
      return +(this.seconds / earthSecondsPerYear).toFixed(2);
    }
    this.onMercury = function () {
      return +(this.seconds / earthSecondsPerYear / planetTimeScale.Mercury).toFixed(2);
    }
    this.onVenus = function () {
      return +(this.seconds / earthSecondsPerYear / planetTimeScale.Venus).toFixed(2);
    }
    this.onMars = function () {
      return +(this.seconds / earthSecondsPerYear / planetTimeScale.Mars).toFixed(2);
    }
    this.onJupiter = function () {
      return +(this.seconds / earthSecondsPerYear / planetTimeScale.Jupiter).toFixed(2);
    }
    this.onSaturn = function () {
      return +(this.seconds / earthSecondsPerYear / planetTimeScale.Saturn).toFixed(2);
    }
    this.onUranus = function () {
      return +(this.seconds / earthSecondsPerYear / planetTimeScale.Uranus).toFixed(2);
    }
    this.onNeptune = function () {
      return +(this.seconds / earthSecondsPerYear / planetTimeScale.Neptune).toFixed(2);
    }
  };
}();