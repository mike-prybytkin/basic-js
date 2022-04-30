const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = 0;
    let toStr = n.toString();

    for (let i = 0; i < toStr.length; i++) {
        let interimStr = `${toStr.slice(0, i)}${toStr.slice(i + 1)}`;
        result = Math.max(result, Number(interimStr));
    }
    return result;
}

module.exports = {
  deleteDigit
};
