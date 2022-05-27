/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const result = [];
  const palindromMap = {};
  function makeAllPartition(lastIndex, partition) {
    if (lastIndex === s.length - 1) {
      result.push([...partition]);
      return;
    }

    for (let i = lastIndex + 1 ; i < s.length ; i++) {
      const slice = s.slice(lastIndex + 1, i + 1);
      if (!isPalindrom(slice)) continue;
      partition.push(slice);
      makeAllPartition(i, partition);
      partition.pop();
    }
  }

  function isPalindrom(str) {
    if (palindromMap[str]) return true;
    const result = str === str.split('').reverse().join('');
    palindromMap[str] = result;
    return result;
  }

  makeAllPartition(-1, []);
  return result;
};

const s = "aab";
console.log(partition(s));