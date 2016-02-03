var core = require("./core");

/**
 * The constructor for a Exponential distribution object
 * @constructor
 * @augments ContinuousDistribution
 * @param {float=} lambda - Rate (inverse scale) parameter
 */
var Exponential = exports.Exponential = function(lambda) {
  this.lambda = lambda;
  this.mean = this.variance = undefined;
  if (lambda !== undefined)
    this.setLambda(lambda);
};
Exponential.prototype = Object.create(core.ContinuousDistribution.prototype);
Exponential.prototype.constructor = Exponential;

/**
 * Compute the Uniformly Minimum Variance Unbiased Estimator of lambda
 * @function
 * @param {array} data - The data from which to compute the UMVUE lambda estimator
 */
Exponential.computeLambdaUMVUE = exports.Exponential.computeLambdaUMVUE = function(data) {
  var xbar = core.arithMean(data);
  var n = data.length;
  var umvue = ((n-1)/n)*Math.pow(xbar, -1);
  return umvue;
};

/**
 * Compute the Mean Square Error-minimising estimator of lambda
 * @function
 * @param {array} data - The data from which to compute lambda
 */
Exponential.computeLambdaMinMSE = exports.computeLambdaMinMSE = function(data) {
  var xbar = core.arithMean(data);
  var n = data.length;
  var minMSEEstimator = ((n-2)/n)*Math.pow(xbar, -1);
  return minMSEEstimator;
};

/**
 * Fits distribution to supplied data. Note: defaults to Uniform Min-Variance Unbiased Estimator!
 * @function
 * @param {array} data - The data to which this distribution will be fitted
 */
Exponential.prototype.fitData = function(data) {
  core.ContinuousDistribution.call(this);
  var lambda = Exponential.computeLambdaUMVUE(data);
  this.setLambda(lambda);
};

/**
 * @function
 * @param {float} lambda - The lambda with which to parametrise this distribution
 */
Exponential.prototype.setLambda = function(lambda) {
  this.lambda = lambda;
  this.mean = Math.pow(lambda, -1);
  this.variance = Math.pow(lambda, -2);
};

/**
 * @inheritdoc
 */
Exponential.prototype.isUniquelyDetermined = function() {
  return this.lambda !== undefined && this.lambda !== 0;
};

/**
 * @inheritdoc
 */
Exponential.prototype.pdf = function(x) {
  return this.lambda * Math.exp(-this.lambda * x);
};

/**
 * @inheritdoc
 */
Exponential.prototype.cdf = function(x) {
  return 1 - Math.exp(-this.lambda * x);
};
