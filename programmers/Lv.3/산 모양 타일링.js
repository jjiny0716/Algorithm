function solutionRecursive(n, tops) {
  const width = n * 2 + 1
  const dp = new Array(width);
  dp[width - 1] = 1;
  dp[width - 2] = tops.at(-1) === 0 ? 2 : 3;
  const count = (i) => {
    if (dp[i]) return dp[i]
    
    return dp[i] = (count(i + 1) * (tops[(i - 1) / 2] ? 2 : 1) + count(i + 2)) % 10007;
  }
  
  count(0);
  
  return count(0)
}

function solution(n, tops) {
  const width = n * 2 + 1
  const dp = new Array(width);
  dp[0] = 1;
  dp[1] = tops[0] === 0 ? 2 : 3;
  for (let i = 2 ; i < width ; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1] * (tops[(i - 1) / 2] ? 2 : 1)) % 10007;
  }

  return dp.at(-1);
}

const n = 2, tops = [0, 1];
console.log(solution(n, tops));