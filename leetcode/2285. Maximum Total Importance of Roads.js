/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
  const adjCount = roads.reduce((arr, [s, e]) => {
    arr[s]++;
    arr[e]++;
    return arr;
  }, new Array(n).fill(0));

  adjCount.sort((a, b) => a - b);
  return adjCount.reduce((total, count, i) => total + count * (i + 1), 0);
};
