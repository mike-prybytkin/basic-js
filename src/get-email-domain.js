const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const at = '@';
  let result = '';

  for(let i = 0; i < email.length; i++){
    if(email[i - 1] === at) {
      result = email.slice(i);
    }
  };

  return result;
}

module.exports = {
  getEmailDomain
};
