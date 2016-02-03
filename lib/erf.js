/*
 * erf.js authored by John D. Cook, as part of the picomath library.
 * Translated into JS by Greg Hewgill
 * See: http://picomath.org/index.html
 * Specifically: http://picomath.org/javascript/erf.js.html
 * It is in the public domain and its inclusion here is justified
 */

function erf(x) {
  // constants
  var a1 =  0.254829592;
  var a2 = -0.284496736;
  var a3 =  1.421413741;
  var a4 = -1.453152027;
  var a5 =  1.061405429;
  var p  =  0.3275911;

  // Save the sign of x
  var sign = 1;
  if (x < 0) {
    sign = -1;
  }
  x = Math.abs(x);

  // A&S formula 7.1.26
  var t = 1.0/(1.0 + p*x);
  var y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-x*x);

  return sign*y;
}
