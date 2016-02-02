var core = require("./core");
/**
 * The constructor for a Normal Distribution object
 * @constructor
 * @param {float=} mu - Mean
 * @param {float=} sigma2 - Variance
 */
var Normal = exports.Normal = function(mu, sigma2) {
  this.mu = mu;
  this.sigma2 = sigma2;
  this.mean = this.mu;
  this.variance = this.sigma2;
};
Normal.prototype = Object.create(core.ContinuousDistribution.prototype);
Normal.prototype.constructor = Normal;

/**
 * Helper function to compute parameter mu for the Normal
 * @function
 * @param {array} data - the data from which to compute mu
 */
Normal.computeMu = exports.Normal.computeMu = function(data) {
  return core.arithMean(data);
};

/**
 * Helper function to compute parameter sigma2 for the Normal
 * @function
 * @param {array} data - the data from which to compute sigma2
 * @param {float=} mu - The mean
 */
Normal.computeSigma2 = exports.Normal.computeSigma2 = function(data, mu) {
  mu = mu || Normal.computeMu(data);
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
 * Fits distribution to supplied data
 * @function
 * @param {array} data - The data to which this distribution will be fitted
 */
Normal.prototype.fitData = function(data) {
  core.ContinuousDistribution.call(this);
  this.mu = Normal.computeMu(data);
  this.sigma2 = Normal.computeSigma2(data, this.mu);
  this.mean = this.mu;
  this.variance = this.sigma2;
};
