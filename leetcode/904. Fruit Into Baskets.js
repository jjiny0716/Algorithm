/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let result = 0;
  const map = {};
  for (let i = 0 ;i < fruits.length ; i++) {
    const fruit = fruits[i];
    if (Object.keys(map).length < 2) {
      map[fruit] = (map[fruit] || 0) + 1;
    }
    else if (map[fruit]) {
      map[fruit]++;
    }
    else {
      for (let j = i - 2 ; j >= 0 ; j--) {
        if (fruits[j] !== fruits[i - 1]) {
          delete map[fruits[j]];
          map[fruits[i - 1]] = i - j - 1;
          break;
        }
      }
      map[fruit] = 1;
    }
    result = Math.max(result, Object.values(map).reduce((prev, cur) => prev + cur, 0));
  }

  return result;
};

const fruits = [1,0,1,4,1,4,1,2,3];
console.log(totalFruit(fruits));