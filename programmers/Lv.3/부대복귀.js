function solution(n, roads, sources, destination) {
  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [s, e] of roads) {
    adj[s].push(e);
    adj[e].push(s);
  }
  
  const findMinimumCostToPaths = (source) => {
    const costs = new Array(n + 1).fill(-1);
    const visited = new Set();
    visited.add(source);
    let queue = [source], cost = 0;
    while (queue.length) {
      const nextQueue = [];
      for (const here of queue) {
        costs[here] = cost;
        
        for (const there of adj[here]) {
          if (visited.has(there)) continue;
          visited.add(there);
          nextQueue.push(there);
        }
        
        queue = nextQueue;
      }
      cost++;
    }
    
    return costs;
  }

  const allCosts = findMinimumCostToPaths(destination);
  return sources.map((source) => allCosts[source]);
}

const n = 5,
  roads = [
    [1, 2],
    [1, 4],
    [2, 4],
    [2, 5],
    [4, 5],
  ],
  sources = [1, 3, 5],
  destination = 5;
console.log(solution(n, roads, sources, destination));
