/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function (k, rowConditions, colConditions) {
  const getOrder = (condition) => {
    const kSet = new Set(Array.from({ length: k }, (v, k) => k + 1));
    const before = Array.from({ length: k + 1 }, () => []);
    for (const [first, second] of condition) {
      before[second].push(first);
      kSet.delete(first);
    }

    const topologicalSort = (adj, start) => {
      const result = [];
      const visited = new Set();
      const dfs = (here) => {
        if (visited.has(here)) return;

        result.push(here);
        visited.add(here);

        for (const there of adj[here]) {
          dfs(there);
        }
      };
      dfs(start);

      return result.reverse();
    };

    const resultSet = new Set();
    for (const start of [...kSet.values()]) {
      for (const i of topologicalSort(before, start)) {
        resultSet.add(i);
      }
      console.log("sep");
    }

    return [...resultSet];
  };


  try {
    const rowOrderIndex = getOrder(rowConditions).reduce((prev, cur, index) => {
      prev[cur] = index;
      return prev;
    }, {});
    const colOrderIndex = getOrder(colConditions).reduce((prev, cur, index) => {
      prev[cur] = index;
      return prev;
    }, {});

    const matrix = Array.from({ length: k }, () => new Array(k).fill(0));
    for (let i = 1; i <= k; i++) {
      matrix[rowOrderIndex[i]][colOrderIndex[i]] = i;
    }

    return matrix;
  } catch (error) {
    return [];
  }
};

const k = 8,
  rowConditions = [
    [1, 2],
    [7, 3],
    [4, 3],
    [5, 8],
    [7, 8],
    [8, 2],
    [5, 8],
    [3, 2],
    [1, 3],
    [7, 6],
    [4, 3],
    [7, 4],
    [4, 8],
    [7, 3],
    [7, 5],
  ],
  colConditions = [
    [5, 7],
    [2, 7],
    [4, 3],
    [6, 7],
    [4, 3],
    [2, 3],
    [6, 2],
  ];
console.log(buildMatrix(k, rowConditions, colConditions));
