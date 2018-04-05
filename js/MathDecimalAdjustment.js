// MathDecimalAdjustment.js
// Closure
(function() {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (value === null || isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();
/*
//  Round
    Math.round10(55.55, -1);   // 55.6
    Math.round10(55.549, -1);  // 55.5
    Math.round10(55, 1);       // 60
    Math.round10(54.9, 1);     // 50
    Math.round10(-55.55, -1);  // -55.5 -- round works towards +8 when in-between two values
    Math.round10(-55.551, -1); // -55.6
    Math.round10(-55, 1);      // -50 -- round works towards +8 when in-between two values
    Math.round10(-55.1, 1);    // -60
    Math.round10(1.005, -2);   // 1.01 -- compare this with Math.round(1.005*100)/100 above
    Math.round10(-1.005, -2);  // -1.0 -- round works towards +8 when exactly in-between two values
    // Floor
    Math.floor10(55.59, -1);   // 55.5
    Math.floor10(59, 1);       // 50
    Math.floor10(-55.51, -1);  // -55.6 -- floor is always lower than or equal to floored number: -55.6 < -55.51
    Math.floor10(-51, 1);      // -60 -- ditto
    // Ceil
    Math.ceil10(55.51, -1);    // 55.6
    Math.ceil10(51, 1);        // 60
    Math.ceil10(-55.59, -1);   // -55.5 -- ceil is always equal or above ceiled number: -55.5 > -55.59
    Math.ceil10(-59, 1);       // -59 -- ditto
*/
