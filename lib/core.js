/**
 * Helper method to compute the arithmetic mean of a vector of values
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
 * Method to fit distribution to data.
 * @abstract
 */
Distribution.prototype.fitData = function() {
};

/**
 * The abstract base class for continuous distributions
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
 * @function
 */
Distribution.prototype.cdf = function() {
};

/**
 * The probability density function of the parametrised distribution.
 * @function
 */
ContinuousDistribution.prototype.pdf = function() {
};

/**
 * The abstract base class for discrete distributions
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
 * @function
 */
DiscreteDistribution.prototype.pmf = function() {
};
