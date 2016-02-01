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
