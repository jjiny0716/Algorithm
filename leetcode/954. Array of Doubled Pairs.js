/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
  const map = {};
  
  for (let num of arr.sort((a, b) => a - b)) {
    if (num < 0) {
      if (map[num * 2]) map[num * 2]--;
      else map[num] = (map[num] || 0) + 1;
    }
    else {
      if (map[num / 2]) map[num / 2]--;
      else map[num] = (map[num] || 0) + 1;
    }
  }

  return Object.values(map).reduce((prev, cur) => prev += cur, 0) ? false : true;
};

const arr = [4,-2,2,-4];
console.log(canReorderDoubled(arr));