function solution(clothes) {
  return [...clothes.reduce((map, [name, category]) => {
    map.set(category, (map.get(category) || 0) + 1);
    return map;
  }, new Map()).values()].reduce((prev, cur) => prev * (cur + 1), 1) - 1;
}