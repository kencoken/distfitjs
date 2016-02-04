var core = require("./core");

var Kernel = exports.Kernel = function() {
};

Kernel.Gaussian = exports.Kernel.Gaussian = function(u) {
  return (1/Math.sqrt(2*Math.PI)) * Math.exp((-1/2) * Math.pow(u,2));
};

var KDEDist = exports.KDEDist = function(kernel, data) {
  this.kernel = kernel;
  this.data = data;
  this.fitData(data);
};
KDEDist.prototype = Object.create(core.Distribution.prototype);
KDEDist.prototype.constructor = KDEDist;

/**
 * Bandwidth estimation using Silverman's rule of thumb
 * @function
 */
KDEDist.silverman = function(sigmahat, n) {
  return Math.pow(4 * Math.pow(sigmahat, 5) / (3 * n), (1/5));
};

KDEDist.prototype.fitData = function(data) {
  this.n = data.length;
  this.data = data;
  this.sigmahat = core.sampleStdDev(data);
  this.bw = KDEDist.silverman(this.sigmahat, this.n);
  console.log(this.bw);
};

KDEDist.prototype.pdf = function(x) {
  var sum = 0;
  var kernel = this.kernel;
  var bw = this.bw;
  this.data.forEach(function(xi) {
    var pt = (x-xi)/bw;
    sum += kernel(pt);
  });
  return Math.pow(this.n * this.bw, -1) * sum;
};
