const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = {};
  let revertDomain = [];
  for (let i = 0; i < domains.length; i++) {
      let revert = '';
      
      for (let j = 0, k = 0; j < domains[i].length; j++) {
          if (domains[i][j]  === '.') {
              revert = `${domains[i].slice(k, j)}` + `.${revert}` ;
              k = j;
          }

          if ( j === domains[i].length - 1) {
              if (revert[0] === '.') {
                  revert = `${domains[i].slice(k, domains[i].length)}`  + `${revert}`;
              } else {
                  revert = `${domains[i].slice(k, domains[i].length)}.`  + `${revert}`;
              }
          }
      }
      revertDomain.push(revert);    
  }

  for (let i = 0; i < revertDomain.length; i++) {

      for (let j = 0, k = 0; j < revertDomain[i].length; j++) {
          let curr = '';
          if (revertDomain[i][j]  === '.') {
              curr = `${revertDomain[i].slice(k, j)}`;

              if (curr in result) {
                  result[curr] ++;
              } else {
                  result[curr] = 1;
              }

          }
      }
  }
  delete result[''];
  return result;
}



module.exports = {
  getDNSStats
};
