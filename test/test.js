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

describe("Poisson Distribution Parameter Estimator", function() {
  var tests = [
    {
      data: [1, 2, 1, 1, 0, 1],
      lambda: 1,
    },
    {
      data: [1, 4, 5, 5, 6, 5, 4, 4],
      lambda: 4.25,
    }
  ];
  tests.forEach(function(test) {
    it("must correctly compute the parameter lambda of the sample " + test.data, function() {
      var lambda = distfit.Poisson.computeLambda(test.data);
      expect(lambda).to.equal(test.lambda);
    });
    it("must correctly parametrise a new Poisson distribution for sample " + test.data, function() {
        var pd = new distfit.Poisson(test.lambda);
        var fittedPoisson = new distfit.Poisson();
        fittedPoisson.fitData(test.data);
        expect(pd).to.deep.equal(fittedPoisson);
    });
  });
});
