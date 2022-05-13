/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const map = {};
  for (let account of accounts) {
    const name = account[0];
    const emails = account.slice(1, account.length);
    if (!map[name]) map[name] = [];
    map[name].push(new Set(emails));
  }
  
  const result = [];
  const names = Object.keys(map);
  for (let name of names) {
    const size = map[name].length;

    // build adj graph
    const adj = Array.from({ length: size }, () => []);
    for (let i = 0 ; i < size ; i++) {
      for (let j = i + 1 ; j < size ; j++) {
        for (let email of map[name][i]) {
          if (map[name][j].has(email)) {
            adj[i].push(j);
            adj[j].push(i);
            break;
          }
        }
      }
    }

    // dfs to merge
    const visited = {};
    for (let i = 0 ; i < size ; i++) {
      const mergedAccount = new Set();
      if (visited[i]) continue;
      mergeAccount(i, adj, map[name], visited, mergedAccount);
      result.push([name, ...[...mergedAccount].sort()])
    }
  }

  function mergeAccount(here, adj, accounts, visited, result) {
    if (visited[here]) return;

    visited[here] = true;
    for (let email of accounts[here]) result.add(email);

    for (let there of adj[here]) {
      mergeAccount(there, adj, accounts, visited, result);
    }
  }
  
  return result;
};

const accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
console.log(accountsMerge(accounts));

