const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const ears = '^^';
  let arrFlat = matrix.flat();
  let counter = 0;

  arrFlat.forEach((el) => {
    if(el === ears) {
      counter++;
    }
  });

  return counter;
}

module.exports = {
  countCats
};
