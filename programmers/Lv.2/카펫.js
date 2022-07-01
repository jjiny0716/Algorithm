function solution(brown, yellow) {
  const size = brown + yellow;
  for (let h = 1; h <= Math.sqrt(size); h++) {
    if (size / h !== Math.floor(size / h)) continue;
    const w = size / h;
    if (2 * w + 2 * h - 4 === brown) return [w, h];
  }

  return [];
}
