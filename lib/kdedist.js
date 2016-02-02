var core = require("./core");

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
