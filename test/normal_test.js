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

describe("Normal Distribution Function Test", function() {
  var tests = [
    {
      mu: 100,
      sigma2: 225
    },
    {
      mu: 0,
      sigma2: 1
    },
    {
      mu: -2078,
      sigma2: 1000
    }
  ];
  tests.forEach(function(test) {
    var nd = new distfit.Normal(test.mu, test.sigma2);
    describe("For mu = " + test.mu + ", sigma2 = " + test.sigma2, function() {
      it("PDF should be symmetric about the origin", function() {
        // To test this, pick two random points symmetric about mu and check
        // that the pdf value at these two points is identical.
        var randomPoint = Math.random() * Math.sqrt(test.sigma2);
        var left = nd.pdf(test.mu - randomPoint);
        var right = nd.pdf(test.mu + randomPoint);
        expect(right-left).to.be.below(Math.pow(10, -10));
      });

      it("CDF should be around 0.5 at the origin", function() {
        var cdfOrigin = nd.cdf(test.mu);
        var diff = Math.abs(0.5 - cdfOrigin);
        expect(diff).to.be.below(Math.pow(10, -9));
      });
    });
  });
});
