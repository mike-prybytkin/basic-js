const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let countDepth = arr.reduce((acc, el) => {
      const depth = Array.isArray(el) ? this.calculateDepth(el) : 0;
      return depth > acc ? depth : acc;
    }, 0);
     
      return 1 + countDepth;
  }
}

module.exports = {
  DepthCalculator
};
