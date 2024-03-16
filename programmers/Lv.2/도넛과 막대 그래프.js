function solution(edges) {
  const inCount = [];
  const adj = [];
  for (const [s, e] of edges) {
    if (!adj[s]) adj[s] = [];
    adj[s].push(e);
    if (!inCount[e]) inCount[e] = 0;
    inCount[e]++;
  }

  let randomVertex = -1;
  for (let i = 1 ; i < adj.length ; i++) {
    if (!adj[i]) adj[i] = [];
    if (adj[i].length >= 2 && !inCount[i]) {
      randomVertex = i;
      break;
    } 
  }

  const getGraphCategory = (start) => {
    let first = true;
    for (let v = start ; ; v = adj[v][0]) {
      if (!adj[v]) return 2;
      if (adj[v].length === 2) return 3;
      
      if (v === start && !first) return 1;
      first = false;
    }
  }
  
  const result = [randomVertex, 0, 0, 0];
  for (const v of adj[randomVertex]) {
    result[getGraphCategory(v)]++;
  }
  
  return result;
}

const edges = [[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]];
console.log(solution(edges));
