/**
 * Helper method to compute the arithmetic mean of a vector of values
 * @function
 * @param {array} data - The sample
 * @returns {float} - The mean of the supplied sample
 */
var arithMean = exports.arithMean = function(data) {
  var sum = 0;
  var n = data.length;
  var i;
  for (i = 0; i < n; i++) {
    sum += data[i];
  }
  return sum / n;
};

var sampleStdDev = exports.sampleStdDev = function(data) {
  var n = data.length;
  var mean = arithMean(data);
  var sum = 0;
  var i;
  for (i = 0; i < n; i++) {
    sum += Math.pow((data[i] - mean), 2);
  }
  return Math.sqrt(sum / (n-1));
};

/**
 * @function
 */
var factorial = exports.factorial = function(n) {
  var res = 1;
  var i;
  for (i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}

/**
 * The abstract base class that represents a particular instance of a distribution
 * @constructor
 * @param {float=} mean - The mean of the distribution (if it has one)
 * @param {float=} variance - The variance of the distribution (if it has one)
 */
var Distribution = exports.Distribution = function(mean, variance) {
  this.mean = mean;
  this.variance = variance;
};

/**
 * The distribution is uniquely determined if it has all the parameters it
 * requires to compute all other quantities of interest.
 * @function
 * @abstract
 * @returns {bool} - true if this distribution is uniquely determined, false otherwise
 */
Distribution.prototype.isUniquelyDetermined = function() {
};

/**
 * Method to fit distribution to data.
 * @abstract
 */
Distribution.prototype.fitData = function() {
};

/**
 * The abstract base class for continuous distributions
 * @augments Distribution
 * @constructor
 * @param {float=} mean - The mean of the distribution (if it has one)
 * @param {float=} variance - The variance of the distribution (if it has one)
 */
var ContinuousDistribution = exports.ContinuousDistribution = function(mean, variance) {
  Distribution.call(this);
  this.mean = mean;
  this.variance = variance;
};

/**
 * The cumulative probability distribution function of the parametrised distribution.
 * @abstract
 * @function
 */
Distribution.prototype.cdf = function() {
};

/**
 * The probability density function of the parametrised distribution.
 * @abstract
 * @function
 */
ContinuousDistribution.prototype.pdf = function() {
};

/**
 * The abstract base class for discrete distributions
 * @augments Distribution
 * @constructor
 * @param {float=} mean - The mean of the distribution (if it has one)
 * @param {float=} variance - The variance of the distribution (if it has one)
 */
var DiscreteDistribution = exports.DiscreteDistribution = function(mean, variance) {
  Distribution.call(this);
  this.mean = mean;
  this.variance = variance;
};

/**
 * The probability mass function of the parametrised distribution.
 * @abstract
 * @function
 */
DiscreteDistribution.prototype.pmf = function() {
};

/*
 * erf.js authored by John D. Cook, as part of the picomath library.
 * Translated into JS by Greg Hewgill
 * See: http://picomath.org/index.html
 * Specifically: http://picomath.org/javascript/erf.js.html
 * It is in the public domain and its inclusion here is justified.
 */
var erf = exports.erf = function(x) {
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
