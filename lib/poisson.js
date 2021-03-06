var core = require("./core");

/**
 * The constructor for a Poisson distribution object
 * @constructor
 * @augments DiscreteDistribution
 * @param {float=} lambda - Rate parameter
 */
var Poisson = exports.Poisson = function(lambda) {
  this.lambda = lambda;
  this.mean = lambda;
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


/**
 * @inheritdoc
 */
Poisson.prototype.isUniquelyDetermined = function() {
  return this.lambda !== undefined;
};

/**
 * @inheritdoc
 */
Poisson.prototype.fitData = function(data) {
  core.DiscreteDistribution.call(this);
  var lambda = Poisson.computeLambda(data);
  this.lambda = this.mean = this.variance = lambda;
};

/**
 * @inheritdoc
 */
Poisson.prototype.pmf = function(x) {
  return Math.pow(this.lambda, x) * Math.exp(-this.lambda) / core.factorial(x);
};

/**
 * @inheritdoc
 */
Poisson.prototype.cdf = function(x) {
  var total = 0;
  var k;
  for (k = 0; k <= x; k++) {
      var probMass_k = this.pmf(k);
      total += probMass_k;
  }
  return total;
};
