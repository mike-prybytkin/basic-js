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
    let counter = 1;
  
    function recursion (array) {
      let interimArr = array.flat();
      counter++;
  
      for (let i = 0; i < interimArr.length; i++) {
        if(Array.isArray(interimArr[i])) {
        console.log(interimArr);
        recursion(interimArr);
        }
      }
      return;
    }
    recursion (arr);
    
    return counter;
  }
}

module.exports = {
  DepthCalculator
};
