/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
  const visited = new Set();

  const oddIndexAdd = (str) => {
    return str
      .split("")
      .map((char, index) => (index % 2 === 0 ? char : (Number(char) + a) % 10))
      .join("");
  };

  const rotate = (str, i) => {
    return str.slice(i, str.length) + str.slice(0, i);
  };

  const dfs = (str) => {
    if (visited.has(str)) return;
    visited.add(str);

    dfs(oddIndexAdd(str));
    dfs(rotate(str, b));
  };
  dfs(s);

  return [...visited].sort()[0];
};

const s = "5525",
  a = 9,
  b = 2;
console.log(findLexSmallestString(s, a, b));
