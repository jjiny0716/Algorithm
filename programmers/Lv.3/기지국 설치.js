function solution(n, stations, w) {
  let lastCoverage = 0;
  let ans = 0;
  for (const station of stations) {
    if (lastCoverage + 1 < station - w) {
      ans += Math.ceil(((station - w - 1) - (lastCoverage + 1) + 1) / (w * 2 + 1));
    }
    lastCoverage = station + w;
  }
  
  if (lastCoverage < n) {
    ans += Math.ceil(((n) - (lastCoverage + 1) + 1) / (w * 2 + 1));
  }
  
  return ans;
}

const n = 11, stations = [4, 11], w = 1;
console.log(solution(n, stations, w));