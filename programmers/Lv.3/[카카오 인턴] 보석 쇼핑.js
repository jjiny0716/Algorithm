function solution(gems) {
  const gemCount = new Set(gems).size;

  const map = new Map();
  let l = 0;
  let ans = [0, 1000000];
  for (let r = 0 ; r < gems.length ; r++) {
    map.set(gems[r], (map.get(gems[r]) || 0) + 1);
    while (map.size === gemCount) {
      map.set(gems[l], map.get(gems[l]) - 1);
      if (map.get(gems[l]) === 0) map.delete(gems[l]);
      l++;

      if (ans[1] - ans[0] > r - l + 1) ans = [l, r + 1];
    }
  }

  return ans;
}

const gems = ["a", "a", "a"];
console.log(solution(gems));