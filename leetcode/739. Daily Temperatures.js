/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const waiting = [0];
  const result = Array.from({ length: temperatures.length }, () => 0);

  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i - 1] < temperatures[i]) {
      for (let j = waiting.length - 1; j >= 0; j--) {
        if (temperatures[waiting[j]] < temperatures[i]) {
          result[waiting[j]] = i - waiting[j];
          waiting.splice(j, 1);
        }
      }
    }
    waiting.push(i);
  }

  return result;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));

// 개선 (스택을 이용한 풀이)
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures2 = function (temperatures) {
  const waiting = [0];
  const result = Array.from({ length: temperatures.length }, () => 0);

  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i - 1] < temperatures[i]) {
      while (waiting.length !== 0) {
        const day = waiting[waiting.length - 1];
        if (temperatures[day] < temperatures[i]) {
          result[day] = i - day;
          waiting.pop();
        }
        else break;
      }
    }
    waiting.push(i);
  }

  return result;
};

console.log(dailyTemperatures2(temperatures));