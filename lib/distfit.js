/**
 * Helper method to compute the arithmetic mean of a vector of values
 */
var arithMean = function(data) {
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
 * @param {float} mean - The mean of the distribution (if it has one)
 * @param {float} variance - The variance of the distribution (if it has one)
 */
var Distribution = function(mean, variance) {
  this.mean = mean;
  this.variance = variance;
};

/**
 * @constructor
 */
var ContinuousDistribution = function() {
  Distribution.call(this);
};

var Normal = exports.Normal = function(mu, sigma2) {
  this.mu = mu;
  this.sigma2 = sigma2;
  this.mean = this.mu;
  this.variance = this.sigma2;
};
Normal.prototype = Object.create(ContinuousDistribution.prototype);
Normal.prototype.constructor = Normal;

Normal.computeMu = exports.Normal.computeMu = function(data) {
  return arithMean(data);
};
