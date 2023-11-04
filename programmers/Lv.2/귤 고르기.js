function solution(k, tangerine) {
  const map = new Map();
  for (const t of tangerine) {
    map.set(t, (map.get(t) || 0) + 1);
  }

  const sortedEntries = [...map.entries()].sort((a, b) => b[1] - a[1]);
  let i = 0;
  while (k > 0) {
    k -= sortedEntries[i][1];
    i++
  }

  return i;
}