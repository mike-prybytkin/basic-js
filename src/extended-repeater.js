const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(string, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str = string + '';
  let repeatTimes = 1;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 1;
  let additionSeparator = '|';
  
  if ('repeatTimes' in options) {
    repeatTimes = options['repeatTimes'];
  }
  if ('separator' in options) {
    separator = options['separator'];
  }
  if ('addition' in options) {
    addition = options['addition'] + '';
  }
  if ('additionRepeatTimes' in options) {
    additionRepeatTimes = options['additionRepeatTimes'];
  }
  if ('additionSeparator' in options) {
    additionSeparator = options['additionSeparator'];
  }

  let resultStr = '';
  let subStr = '';

  for (let i = 0; i < repeatTimes; i++) {
    
    for (let j = 0; j < additionRepeatTimes; j++) {
      subStr += `${addition}${additionSeparator}`;
    }
    resultStr += `${str}${subStr.slice(-subStr.length, -additionSeparator.length)}${separator}`
    subStr = '';
  }

  return resultStr.slice(-resultStr.length, -separator.length);
}

module.exports = {
  repeater
};
