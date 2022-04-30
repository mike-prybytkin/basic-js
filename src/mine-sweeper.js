const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    result = [];
    for (let i = 0; i < matrix.length; i++) {
      result.push([]);
      for (let j = 0; j < matrix[i].length; j++) {
        result[i][j] = 0;
        // up
        if (matrix[i][j - 1] === true) {
          result[i][j]++;
        }
        // down
        if (matrix[i][j + 1] !== undefined) {
          if (matrix[i][j + 1] === true) {
            result[i][j]++;
          }
        }
        // left
        if (matrix[i - 1] !== undefined) {
          if (matrix[i - 1][j] === true) {
            result[i][j]++;
          }
        }
        //right
        if (matrix[i + 1] !== undefined) {
          if (matrix[i + 1][j] === true) {
            result[i][j]++;
          }
        }
        //top left
        if (matrix[i - 1] !== undefined) {
          if (matrix[i - 1][j - 1] === true) {
            result[i][j]++;
          }
        }
        //top right
        if (matrix[i - 1] !== undefined) {
          if (matrix[i - 1][j + 1] === true) {
            result[i][j]++;
          }
        }
        //down left
        if (matrix[i + 1] !== undefined) {
          if (matrix[i + 1][j - 1] === true) {
            result[i][j]++;
          }
        }
        //down right
        if (matrix[i + 1] !== undefined) {
          if (matrix[i + 1][j + 1] === true) {
            result[i][j]++;
          }
        }
      }
    }
    return result;
  }


module.exports = {
  minesweeper
};
