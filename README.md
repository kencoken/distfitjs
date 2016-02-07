# distfitjs

This is a JavaScript library that fits theoretical distributions to data.
It can be used in node.js or the browser (via distfit.min.js).
Fitting is done using **both parametric and non-parametric methods.**
Distfitjs is lightweight and has no dependencies.

## Examples
See the `examples/` directory.

Given some data:

![histogram](hist.png)

Compute a (Gaussian) kernel density estimate:

![pdf](kde.png)

## Installation
`
npm install distfitjs
`

## Basic Usage
Distfit provides several distribution classes.
They provide basic statistical functionality like PDFs/PMFs/CDFs.

## Parametric Distribution Fitting
```javascript
var df = require("distfitjs");

var data = [1, 2, 1, 2, 3, 1, 2, 2, 1, 0, 1, 2, 2, 3];

// Fit a Poisson distribution to some arrivals data
var poisson = new df.Poisson();
poisson.fitData(data);

poisson.lambda
> 1.6428571428571428

poisson.cdf(3);
> 0.9151695953933902

poisson.pmf(0)
> 0.19342660460039254

```

## Non-Parametric Distribution Fitting
```javascript
var df = require("distfitjs");

var data = [
107.850594727032,
...,
62.6904107858255
];

var KDE = df.KDE;

var kdfit = new KDE.KDEDist(KDE.Kernel.Gaussian, data);

kdfit.pdf(0);
> 0.012170816031657258
```

## Documentation
Grunt is used as a task runner for distfit. 
There are two available grunt tasks:

+ Generating documentation from the source: `grunt jsdoc`
+ Running tests: `grunt mochaTest`

See `Gruntfile.js` for details.

For web applications, `distfit.min.js` can be generated by running `npm run build-browser`.
This uses Browserify to concatenate the source and expose `require`.

## License
The MIT License

Copyright (c) 2016 Daniel Levin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

## Contributing
Development is done on Github.
Issues and pull requests are the simplest way to contribute :)
