var core = require("./core");

var Kernel = exports.Kernel = function() {
};

Kernel.Gaussian = function(u) {
  return (1/Math.sqrt(2*Math.PI)) * Math.exp((-1/2) * Math.pow(u,2));
};

var KDEDist = exports.KDEDist = function(data) {
  this.data = data;
  fitData(data);
};
KDEDist.prototype = Object.create(core.Distribution.prototype);
KDEDist.prototype.constructor = KDEDist;

KDEDist.prototype.fitData = function(data) {
  this.data = data;
  if (this.data === undefined)
    return;
};
