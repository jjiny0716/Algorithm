/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const m = new Map();
  for (let str of strs) {
    const sorted = str.split('').sort().join('');
    if (!m.get(sorted)) m.set(sorted, []);
    m.get(sorted).push(str);
  }
  console.log(m);

  return Array.from(m.values());
};

const m1 = new Map();
m1.set(2, []);
m1.get(2).push(1);
// m1.set(2, m1.get(2).push(1));

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(m1);
