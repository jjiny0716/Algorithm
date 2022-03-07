/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  function dfs(open, close, arr) {
    if (open > close) return;
    console.log(open, close);
    if (open > 0) {
      arr.push("(");
      dfs(open - 1, close, arr);
      arr.pop();
    }
    if (close > 0) {
      arr.push(")");
      dfs(open, close - 1, arr);
      arr.pop();
    }
    if (open === 0 && close === 0) {
      result.push(arr.join(""));
    }
  }

  dfs(n, n, []);
  return result;
};

// 개선
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  function dfs(open, close, str) {
    if (open > close) return;
    if (open > 0) dfs(open - 1, close, str + "(");
    if (close > 0) dfs(open, close - 1, str + ")");
    if (open === 0 && close === 0) result.push(str);
  }

  dfs(n, n, "");
  return result;
};
