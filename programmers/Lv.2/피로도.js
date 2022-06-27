function solution(k, dungeons) {
  let result = 0;
  const visitedIndex = new Set();
  function getMaxDungeonCount(remain, count = 0) {
    result = Math.max(result, count);
    for (let i = 0; i < dungeons.length; i++) {
      const [min, take] = dungeons[i];
      if (visitedIndex.has(i)) continue;
      if (remain < min) continue;

      visitedIndex.add(i);
      getMaxDungeonCount(remain - take, count + 1);
      visitedIndex.delete(i);
    }
  }
  getMaxDungeonCount(k);

  return result;
}
