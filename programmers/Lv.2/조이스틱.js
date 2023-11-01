function solution(name) {
  const n = name.length;
  let ans = 0;
  const indexes = [];
  for (let i = 0; i < n; i++) {
    ans += Math.min(
      name.charCodeAt(i) - "A".charCodeAt(0),
      26 + "A".charCodeAt(0) - name.charCodeAt(i)
    );
    if (name[i] !== "A") indexes.push(i);
  }

  if (indexes.length === 1) return ans + indexes[0];

  let minDist = Infinity;
  for (let i = 0; i < indexes.length - 1; i++) {
    minDist = Math.min(
      minDist,
      indexes[i] * 2 + n - indexes[(i + 1) % n],
      (n - indexes[(i + 1) % n]) * 2 + indexes[i]
    );
  }

  minDist = Math.min(minDist, indexes.at(-1));
  ans += minDist || 0;
  return ans;
} 

const name = "ABABAAAAABA";
console.log(solution(name));

// 1001000010
