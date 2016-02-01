var core = require("./core");

/**
 * The constructor for a Exponential distribution object
 * @constructor
 * @param {float=} lambda - Rate (inverse scale) parameter
 */
var Exponential = exports.Exponential = function(lambda) {
  this.lambda = lambda;
  this.mean = this.variance = undefined;
  if (lambda !== undefined) {
    this.mean = Math.pow(lambda, -1);
    this.variance = Math.pow(lambda, -2);
  }
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

Exponential.prototype.fitData = function(data) {
  core.ContinuousDistribution.call(this);
  var lambda = Exponential.computeLambdaUMVUE(data);
  this.lambda = lambda;
  this.mean = Math.pow(lambda, -1);
  this.variance = Math.pow(lambda, -2);
};
