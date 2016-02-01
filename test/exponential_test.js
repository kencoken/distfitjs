var distfit = require("../lib/distfit");
var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;

describe("Exponential Distribution Parameter Estimation", function() {
  var tests = [
    {
      data: [15, 44, 14, 7, 6, 1, 20, 14, 5, 61, 23, 73, 12, 49, 7],
      lambdaUMVUE: 0.039886039886039885,
      lambdaMSE: 0.03703703703703704
    }
  ];
  tests.forEach(function(testCase) {
    var lambdaUMVUE = distfit.Exponential.computeLambdaUMVUE(testCase.data);
    var lambdaMSE = distfit.Exponential.computeLambdaMinMSE(testCase.data);
    var n = testCase.data.length;

    it("should compute the correct UMVUE estimator of lambda for sample " + testCase.data, function() {
      expect(lambdaUMVUE).to.equal(testCase.lambdaUMVUE);
    });

    it("should compute the correct MSE-minimising estimator of lambda for sample " + testCase.data, function() {
      expect(lambdaMSE).to.equal(testCase.lambdaMSE);
    });

    it("should have estimates related to each other correctly", function() {
      // The two estimators are related to one another by this equation.
      // It must hold true. Or at least as close as floating point multiplication
      // can get.
      var lambdaMSE_indirect = ((n-2)*lambdaUMVUE / (n-1));
      var tol = Math.pow(10, -8);
      expect(lambdaMSE).to.be.within(lambdaMSE_indirect - tol, lambdaMSE_indirect + tol);
    });
  });
});
