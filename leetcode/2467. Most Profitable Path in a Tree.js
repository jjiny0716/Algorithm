/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function(edges, bob, amount) {
  const adj = new Map();
  for (const [s, e] of edges) {
    if (!adj.has(s)) adj.set(s, []);
    if (!adj.has(e)) adj.set(e, []);
    adj.get(s).push(e);
    adj.get(e).push(s);
  }

  let bobNodeSecondMap = null;
  const findBobPath = (here, second = 0, map = new Map()) => {
    if (map.has(here)) return;
    if (here === 0) {
      bobNodeSecondMap = new Map(map);
      bobNodeSecondMap.set(0, second);
      return;
    }
    if (bobNodeSecondMap) return;

    map.set(here, second);

    for (const there of adj.get(here)) {
      findBobPath(there, second + 1, map);
    }

    map.delete(here);
  }
  findBobPath(bob);

  let maximumIncome = -Infinity;
  const findAliceMaximumIncome = (here = 0, second = 0, income = 0, visited = new Set()) => {
    if (visited.has(here)) return;

    visited.add(here);
    if (!bobNodeSecondMap.has(here) || second < bobNodeSecondMap.get(here)) income += amount[here];
    else if (second === bobNodeSecondMap.get(here)) income += amount[here] / 2;

    if (adj.get(here).every((there) => visited.has(there))) {
      maximumIncome = Math.max(income, maximumIncome);
      return;
    }

    for (const there of adj.get(here)) {
      findAliceMaximumIncome(there, second + 1, income, visited);
    }
  }
  findAliceMaximumIncome();

  return maximumIncome;
};

const edges = [[0,2],[0,4],[1,3],[1,2]], bob = 1, amount = [3958,-9854,-8334,-9388,3410];
console.log(mostProfitablePath(edges, bob, amount));