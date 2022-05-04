function solution(str1, str2) {
  function makeSet(str) {
    const set = [];

    for (let i = 0 ; i < str.length - 1 ; i++) {
      const slice = str.slice(i, i + 2);
      if (/[a-z]{2,2}/.test(slice)) set.push(slice);
    }

    return set;
  }

  const set1 = makeSet(str1.toLowerCase());
  const set2 = makeSet(str2.toLowerCase());

  function buildHashMapFromSet(set) {
    return set.reduce((map, element) => {
      map[element] = (map[element] || 0) + 1;
      return map;
    }, {});
  }

  function getJaccardSimilarity(set1, set2) {
    if (set1.length === 0 && set2.length === 0) return 1;
    const map1 = buildHashMapFromSet(set1);
    const map2 = buildHashMapFromSet(set2);

    const intersectionCount = Object.entries(map1).reduce((total, [element, count]) => {
      return total += Math.min(count, map2[element] || 0);
    }, 0);

    const keySet = new Set([...set1, ...set2]);
    const unionCount = [...keySet].reduce((total, key) => {
      return total += Math.max(map1[key] || 0, map2[key] || 0);
    }, 0);

    return intersectionCount / unionCount;
  }

  return Math.floor(getJaccardSimilarity(set1, set2) * 65536);
}

const str1 = "FRANCE";
const str2 = "french";

console.log(solution(str1, str2));
