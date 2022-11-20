/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
  if (!roads.length) return 0;

  const adj = new Map();
  for (const [s, e] of roads) {
    if (!adj.has(s)) adj.set(s, []);
    if (!adj.has(e)) adj.set(e, []);
    adj.get(s).push(e);
    adj.get(e).push(s);
  }

  let result = 0;
  const visited = new Set();
  visited.add(0);

  const calculateFuel = (here) => {
    if (visited.has(here)) return 0;
    visited.add(here);

    let representativeCount = 1;
    for (const there of adj.get(here)) {
      representativeCount += calculateFuel(there);
    }

    result += Math.ceil(representativeCount / seats);
    
    return representativeCount;
  } 

  for (const city of adj.get(0)) {
    calculateFuel(city);
  }

  return result;
};

const roads = [[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]], seats = 2;
console.log(minimumFuelCost(roads, seats));