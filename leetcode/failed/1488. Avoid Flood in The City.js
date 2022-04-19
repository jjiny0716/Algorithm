/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
  const map = {};
  const rainSet = new Set();
  for (let rain of rains) {
    map[rain] = (map[rain] || 0) + 1;
  }
  
  const result = [];  
  for (let rain of rains) {
    if (rain === 0) {
      let dried = false;
      for (let day of rainSet.values()) {
        if (map[day] > 1) {
          map[day] -= 1;
          rainSet.delete(day);
          result.push(day);
          dried = true;
          break;
        } 
      }
      if (!dried) result.push(1);
    } 
    else {
      console.log(result);
      if (rainSet.has(rain)) return [];
      rainSet.add(rain);
      result.push(-1);
    }
  }
  
  return result;
};

const rains = [1,2,0,2,3,0,1];
console.log(avoidFlood(rains));
