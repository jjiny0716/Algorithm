/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
  const numStr = num.toString();
  return numStr.length === 1 || numStr.at(-1) !== 0; 
};