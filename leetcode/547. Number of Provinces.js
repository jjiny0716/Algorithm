/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const visited = new Set();

  let result = 0;
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      visitAllConnected(i);
      result++;
    }
  }

  function visitAllConnected(here) {
    if (visited.has(here)) return;
    visited.add(here);

    for (let there = 0; there < n; there++) {
      if (isConnected[here][there]) visitAllConnected(there);
    }
  }

  return result;
};

const isConnected = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
console.log(findCircleNum(isConnected));
