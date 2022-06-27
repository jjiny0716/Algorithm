function solution(s) {
  const tupleSets = s
    .slice(1, s.length - 1)
    .split("}")
    .map((token, i) => {
      if (token[0] === ",") token = token.slice(1, token.length);
      return token.replace("{", "").split(",");
    });
  tupleSets.pop();
  tupleSets.sort((a, b) => a.length - b.length);

  const resultSet = new Set();
  for (let tupleSet of tupleSets) {
    for (let num of tupleSet) {
      if (!resultSet.has(num)) {
        resultSet.add(num);
        break;
      }
    }
  }

  return [...resultSet].map((c) => Number(c));
}
