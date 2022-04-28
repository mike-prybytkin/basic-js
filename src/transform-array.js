const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  let resultArr = [];

  if(!(arr instanceof Array)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  
  if (arr.includes(discardNext) || 
      arr.includes(discardPrev) ||
      arr.includes(doubleNext) ||
      arr.includes(doublePrev)) {

      for(let i = 0; i < arr.length; i++){
        if(arr[i] === discardNext){
            i += 2;
        } else if (arr[i] === discardPrev) {
           resultArr.pop();
        } else if (arr[i] === doubleNext) {
           resultArr.push(arr[i + 1])
        } else if (arr[i] === doublePrev) {
           resultArr.push(arr[i - 1])
        }
        
        if(typeof (arr[i]) === 'number') {
           resultArr.push(arr[i])
        }
      }
      return resultArr;

  } else {
    return arr;
  }
};

module.exports = {
  transform
};
