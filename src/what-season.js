const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  
  if (!(date instanceof Date ) || 
      date.hasOwnProperty('toString') ||
      date.hasOwnProperty('getMonth')) {
    throw new Error('Invalid date!');
  };
  
  let mounth = date.getMonth();
  
  if (mounth >= 2 && mounth <= 4) {
    return 'spring';
  } else if (mounth >= 5 && mounth <= 7) {
    return 'summer';
  } else if (mounth >= 8 && mounth <= 10) {
    return 'autumn';
  } else {
    return 'winter'
  }
}

module.exports = {
  getSeason
};
