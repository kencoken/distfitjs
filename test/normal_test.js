var distfit = require("../lib/distfit");
var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;

describe("Normal Distribution Parameter Estimator", function() {
  var tests = [
    {
      data: [1, 2, 3, 4, 5],
      mu: 3,
      sigma2: 2
    },
    {
      data: [-12, 44, 9.7, 93],
      mu: 33.675,
      sigma2: 1571.766875
    }
  ];
  tests.forEach(function(test) {
    it("must correctly compute the parameter mu of the sample " + test.data, function() {
      var mu = distfit.Normal.computeMu(test.data);
      expect(mu).to.equal(test.mu);
    });
    it("must correctly compute the parameter sigma2 of the sample " + test.data, function() {
      var sigma2 = distfit.Normal.computeSigma2(test.data);
      expect(sigma2).to.equal(test.sigma2);
    });
  });
});
