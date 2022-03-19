/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 잘못된 알고리즘!!!!!!! p의 length가 3 * 10^4까지 들어오는데 anagram을 brutforce로 하나씩 만들고있으면 시간제한 걸림.
// var findAnagrams = function (s, p) {
//   if (s.length < p.length) return [];
//   const set = new Set();
//   function makeAnagrams(arr, resultArr, targetSet) {
//     if (resultArr.length === arr.length) {
//       targetSet.add(resultArr.join(''));
//       return;
//     }
//     for (let i = 0 ; i < arr.length ; i++) {
//       if (arr[i] === '') continue;
//       resultArr.push(arr[i]);
//       const originalChar = arr[i];
//       arr[i] = '';
//       makeAnagrams(arr, resultArr, targetSet);
//       resultArr.pop();
//       arr[i] = originalChar;
//     }
//   }
//   makeAnagrams(p.split(''), [], set);
  
//   const result = [];
//   for (let i = 0 ; i <= s.length - p.length ; i++) {
//     if (set.has(s.slice(i, i + p.length))) result.push(i);
//   }

//   return result;
// };


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pCharMap = {}, substrCharMap = {}, result = [];
  for (let char of p) pCharMap[char] ? pCharMap[char]++ : pCharMap[char] = 1;
  for (let i = 0 ; i < p.length ; i++) substrCharMap[s[i]] ? substrCharMap[s[i]]++ : substrCharMap[s[i]] = 1;
  for (let i = p.length ; i <= s.length ; i++) {
    if (isSameMap(pCharMap, substrCharMap)) result.push(i - p.length);
    substrCharMap[s[i - p.length]] === 1 ? delete substrCharMap[s[i - p.length]] : substrCharMap[s[i - p.length]]--;
    substrCharMap[s[i]] ? substrCharMap[s[i]]++ : substrCharMap[s[i]] = 1;
  }

  function isSameMap(m1, m2) {
    if (Object.keys(m1).length !== Object.keys(m2).length) return false;
    return [...Object.keys(m1)].every(key => m1[key] === m2[key]);
  }

  return result;
};

const s = "cbaebabacd", p = "abc";
console.log(findAnagrams(s, p));


