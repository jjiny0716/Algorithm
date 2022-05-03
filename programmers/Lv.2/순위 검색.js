function solution(info, query) {
  function addScoreToAllPossibleCategory(categories, i, currentCategories, score, map) {
    if (i === categories.length) {
      const str = currentCategories.join(" ");
      if (!map[str]) map[str] = [];
      map[str].push(Number(score));
      return;
    }

    addScoreToAllPossibleCategory(categories, i + 1, [...currentCategories, categories[i]], score, map);
    addScoreToAllPossibleCategory(categories, i + 1, [...currentCategories, "-"], score, map);
  }

  const scoreMap = {};
  for (let i of info) {
    const [lang, field, career, soulFood, score] = i.split(" ");
    addScoreToAllPossibleCategory([lang, field, career, soulFood], 0, [], score, scoreMap);
  }

  for (let scoreArr of Object.values(scoreMap)) {
    scoreArr.sort((a, b) => a - b);
  }

  function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) left = mid + 1;
      else if (arr[mid] >= target) right = mid - 1;
    }

    return left;
  }

  const result = [];
  for (let q of query) {
    const [lang, field, career, soulFood, minScore] = q.split(" ").filter((value) => value !== "and");
    const str = `${lang} ${field} ${career} ${soulFood}`;

    result.push(scoreMap[str] ? scoreMap[str].length - binarySearch(scoreMap[str], Number(minScore)) : 0);
  }

  return result;
}

const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 150",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 150",
  "java backend junior chicken 150",
  "python backend senior chicken 150",
];
const query = [
  "java and frontend and junior and pizza 1",
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

console.log(solution(info, query));

// 1.object 깊이가 깊어질 때 의심하기.
// 2. binary search가 arr에 중복된 요소가 있을 때 어떻게 동작할 지 고려하기.
