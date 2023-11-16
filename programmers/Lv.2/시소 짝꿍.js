function solution(weights) {
  const sizeMap = new Map();
  const ratios = [1, 1 / 2, 2 / 3, 3 / 4, 2, 3 / 2, 4 / 3];
  let ans = 0;
  for (const w of weights) {
    for (const r of ratios) ans += sizeMap.get(w * r) || 0;
    sizeMap.set(w, (sizeMap.get(w) || 0) + 1);
  }
  
  return ans;
}

const weights = [100,180,360,100,270];
console.log(solution(weights));
