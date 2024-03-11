/**
 * @param {string[]} arr
 * @return {string[]}
 */
var shortestSubstrings = function(arr) {
  const n = arr.length;
  const strCount = new Map();
  
  for (const str of arr) {
    for (let i = 0 ; i < str.length;  i++) {
      for (let j = i + 1 ; j < str.length + 1 ; j++) {
        const substr = str.slice(i, j);
        strCount.set(substr, (strCount.get(substr) || 0) + 1);
      }
    }
  }
  
  const result = [];
  for (const str of arr) {
    let flag = false;
    for (let size = 1 ; size <= str.length ; size++) {
      const substrCount = new Map();
      for (let s = 0 ; s < str.length ; s++) {
        const substr = str.slice(s, s + size);
        substrCount.set(substr, (substrCount.get(substr) || 0) + 1);
      }
      
      const uncommonSubstrs = [];
      for (const [substr, count] of substrCount.entries()) {
        if (strCount.get(substr) === count) uncommonSubstrs.push(substr);
      }
      
      if (uncommonSubstrs.length) {
        uncommonSubstrs.sort();
        result.push(uncommonSubstrs[0]);
        flag = true;
        break;
      }
    }
    
    if (!flag) result.push("");
  }
  
  return result;
};

const arr = ["cab","ad","bad","c"];
console.log(shortestSubstrings(arr));