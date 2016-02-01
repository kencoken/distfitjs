var core = require("./core");

/**
 * The constructor for a Poisson distribution object
 * @constructor
 * @param {float=} lambda - Rate parameter
 */
var Poisson = exports.Poisson = function(lambda) {
  this.lambda = lambda;
  this.mu = lambda;
  this.variance = lambda;
};
Poisson.prototype = Object.create(core.DiscreteDistribution.prototype);
Poisson.prototype.constructor = Poisson;

/**
 * Helper function to compute parameter lambda for Poisson distribution
 * @function
 * @param {array} data - The data from which to compute lambda
 */
Poisson.computeLambda = exports.Poisson.computeLambda = function(data) {
  // The MLE estimator used here is of minimum variance and unbiased.
  var lambda = core.arithMean(data);
  return lambda;
};
