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
 * It computes the appropriate parameters from the supplied data and then
 * assigns the obtained values to the correct variables.
 */
Distribution.prototype.fitData = function() {
};

/**
 * The abstract base class for continuous distributions
 * @constructor
 */
var ContinuousDistribution = exports.ContinuousDistribution = function() {
  Distribution.call(this);
};

/**
 * The abstract base class for discrete distributions
 * @constructor
 */
var DiscreteDistribution = exports.DiscreteDistribution = function() {
    Distribution.call(this);
};
