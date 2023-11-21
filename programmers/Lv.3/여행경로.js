function solution(tickets) {
  const adj = new Map();
  for (const [s, e] of tickets) {
    if (!adj.has(s)) adj.set(s, []);
    adj.get(s).push(e);
  }
  
  for (const airports of adj.values()) airports.sort().reverse();

  const ans = ["ICN"];
  const dfs = (here) => {
    if (ans.length === tickets.length + 1) return true;
    if (!adj.get(here)) return false;
    
    for (let i = adj.get(here).length - 1 ; i >= 0 ; i--) {
      const there = adj.get(here).splice(i, 1)[0];
      ans.push(there);

      if (dfs(there)) return true;
      
      ans.pop();
      adj.get(here).push(there);
      adj.get(here).sort().reverse();
    }
    
    return false;
  }
  dfs("ICN");
  
  return ans;
}

const tickets = [["ICN", "AAA"], ["AAA", "BBB"], ["AAA", "CCC"], ["CCC", "AAA"]];
console.log(solution(tickets));

const arr = [];
