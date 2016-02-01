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
 * @param {float} mean - (Optional) The mean of the distribution (if it has one)
 * @param {float} variance - (Optional) The variance of the distribution (if it has one)
 */
var Distribution = function(mean, variance) {
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

/**
 * Helper function to compute parameter mu for the Normal
 * @param {data} - the data from which to compute mu
 */
Normal.computeMu = exports.Normal.computeMu = function(data) {
  return arithMean(data);
};

/**
 * Helper function to compute parameter sigma2 for the Normal
 */
Normal.computeSigma2 = exports.Normal.computeSigma2 = function(data, mu) {
  var mu = mu || Normal.computeMu(data);
  var sumOfSquaredDiffs = 0;
  var n = data.length;
  var i;
  for (i = 0; i < n; i++) {
    var squaredDiff = Math.pow(data[i]-mu, 2);
    sumOfSquaredDiffs += squaredDiff;
  }
  var sigma2 = sumOfSquaredDiffs / n;
  return sigma2;
};

/**
 * Method to fit distribution to data
 */
Normal.prototype.fitData = function(data) {
    ContinuousDistribution.call(this);
    this.mu = Normal.computeMu(data);
    this.sigma2 = Normal.computeSigma2(data, this.mu);
    this.mean = this.mu;
    this.variance = this.sigma2;
};
