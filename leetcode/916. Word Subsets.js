/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  function getCharMap(str) {
    const map = {};
    for (let char of str) map[char] = (map[char] || 0) + 1;
    return map;
  }

  const words2Map = {};
  for (let word of words2) {
    const map = getCharMap(word);
    for (let key of Object.keys(map)) {
      words2Map[key] = Math.max(words2Map[key] || 0, map[key]);
    }
  }

  const result = [];
  const keys = Object.keys(words2Map);
  for (let word of words1) {
    let isUniversal = true;
    const wordMap = getCharMap(word);
    for (let key of keys) {
      if ((wordMap[key] || 0) < words2Map[key]) {
        isUniversal = false;
        break;
      }
    }

    if (isUniversal) result.push(word);
  }

  return result;
};

const words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"];
console.log(wordSubsets(words1, words2));

// 개선과정
// 1. 해시맵
// 2. Object.keys를 반복문 밖으로 빼내기

// 다른 답을을 보니까, 해시맵말고 배열쓰면 더 빠른 것 같다. 범위가 알파벳으로 정해져있으니 가능한 방법인듯.