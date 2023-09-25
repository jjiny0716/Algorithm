function solution(cap, n, deliveries, pickups) {
  let ans = 0;
  let del = 0, pick = 0;

  for (let i = n - 1 ; i >= 0 ; i--) {
    del += deliveries[i];
    pick += pickups[i];

    while (del > 0 || pick > 0) {
      del -= cap;
      pick -= cap;
      ans += i * 2;
    }
  }

  return ans;
}