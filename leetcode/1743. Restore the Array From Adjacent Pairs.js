/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
  const map = new Map();
  const singleNumSet = new Set();
  for (const [n1, n2] of adjacentPairs) {
    // init
    if (!map.get(n1)) map.set(n1, []);
    if (!map.get(n2)) map.set(n2, []);

    // make adj pairs;
    map.get(n1).push(n2);
    map.get(n2).push(n1);

    // find two single number(at array edge)
    if (singleNumSet.has(n1)) singleNumSet.delete(n1); 
    else singleNumSet.add(n1);
    if (singleNumSet.has(n2)) singleNumSet.delete(n2); 
    else singleNumSet.add(n2);
  }

  let n = [...singleNumSet][0];
  const resultSet = new Set([n]);
  while (true) {
    const [n1, n2] = map.get(n);
    if (resultSet.size !== 1 && n2 === undefined) break;
    const target = resultSet.has(n1) ? n2 : n1;
    resultSet.add(target);
    n = target;
  }

  return [...resultSet];
};

const adjacentPairs = [[4,-2],[1,4],[-3,1]];
console.log(restoreArray(adjacentPairs));