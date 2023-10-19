function solution(topping) {
  const map1 = topping.reduce((map, cur) => {
    map.set(cur, (map.get(cur) || 0) + 1);
    return map;
  }, new Map());
  const map2 = new Map();

  let ans = 0;
  for (const t of topping) {
    map2.set(t, (map2.get(t) || 0) + 1);
    map1.set(t, map1.get(t) - 1);
    if (!map1.get(t)) map1.delete(t);
    if (map1.size === map2.size) ans++;
    else if (map1.size < map2.size) break;
  }

  return ans;
}
