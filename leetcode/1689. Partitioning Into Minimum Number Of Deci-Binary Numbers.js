/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
  return Math.max(...n.split(''));
};

console.log(minPartitions("27346209830709182346"));