const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let lengthArr = arr.length;
  let result = [];
  let arrForCompare = [];
  arr = arr.forEach((el, i) => {
    if(el === -1) {
      result[i] = el
    } else {
      arrForCompare.push(el);
    }
  })
  let sort = arrForCompare.sort((a, b) => a - b);

  for (let i = 0; i < lengthArr; i++) {
    if (result[i] !== -1) {
      result[i] = sort.shift();
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
