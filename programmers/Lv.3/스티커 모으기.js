function solution(sticker) {
  if (sticker.length === 1) return sticker[0];
  const n = sticker.length;
  const dp = new Array(n);

  for (let i = 0 ; i < n - 1 ; i++) {
      dp[i] = Math.max(dp[i - 3] || 0, dp[i - 2] || 0) + sticker[i];
  }

  const dpMax1 = Math.max(dp[n - 3] || 0, dp[n - 2] || 0);

  for (let i = 0 ; i < n - 1 ; i++) {
      dp[i] = Math.max(dp[i - 3] || 0, dp[i - 2] || 0) + sticker[i + 1];
  }

  const dpMax2 = Math.max(dp[n - 3] || 0, dp[n - 2] || 0);

  return Math.max(dpMax1, dpMax2);
}