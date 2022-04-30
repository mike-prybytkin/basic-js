const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  
  const sampleActivityNum = Number(sampleActivity);

  if (isNaN(sampleActivityNum) ||
    sampleActivityNum <= 0) {
      return false;
  }

  const halfLifeReaction = Math.LN2 / HALF_LIFE_PERIOD;
  const dateObject = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNum) / halfLifeReaction);

  return dateObject > 0 ? dateObject : false;
}

module.exports = {
  dateSample
};
