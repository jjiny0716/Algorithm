/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
  const n = stones.length;
  const xMap = new Map();
  const yMap = new Map();

  for (let i = 0 ; i < n ; i++) {
    const [x, y] = stones[i];

    if (!xMap.has(x)) xMap.set(x, []);
    xMap.get(x).push(i);

    if (!yMap.has(y)) yMap.set(y, []);
    yMap.get(y).push(i);
  }

  const adj = new Map();
  for (let i = 0 ; i < n ; i++) {
    const [x, y] = stones[i];
    adj.set(i, new Set([...xMap.get(x), ...yMap.get(y)]));
  }

  const visited = new Set();
  const dfs = (here) => {
    if (visited.has(here)) return 0;
    visited.add(here);

    let result = 1;
    for (const there of adj.get(here)) {
      result += dfs(there);
    }

    return result;
  }

  let result = 0;
  for (let i = 0 ; i < n; i++) {
    if (visited.has(i)) continue;
    result += dfs(i) - 1;
  }

  return result;
};

const stones = [[3,2],[3,1],[4,4],[1,1],[0,2],[4,0]];
console.log(removeStones(stones));



// x x x x 5
// x 3 x 1 x
// 4 x x 0 x
// x x x x x
// x x x x 2