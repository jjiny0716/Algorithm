/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
  const map = new Map();
  for (const [value, weight] of items1) map.set(value, (map.get(value) || 0) + weight);
  for (const [value, weight] of items2) map.set(value, (map.get(value) || 0) + weight);

  return [...map.entries()].sort(([a], [b]) => a - b);
};

const items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]];
console.log(mergeSimilarItems(items1, items2));