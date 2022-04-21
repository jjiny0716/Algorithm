/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  const map = {};
  time.map((value) => value % 60).forEach((value) => {
    map[value] = (map[value] || 0) + 1;
  });

  const keys = Object.keys(map);
  let result = 0;
  for (let key of keys) {
    if (key > 30) break;
    if (key === "0" || key === "30") result += map[key] * (map[key] - 1) / 2;
    else result += map[key] * (map[60 - key] || 0);
  }

  return result;
};

const time = [60, 60, 60, 60, 30, 30, 30];
console.log(numPairsDivisibleBy60(time));