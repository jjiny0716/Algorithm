/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function(arr1, arr2) {
  arr1.reverse();
  arr2.reverse();
  const result = [];
  
  for (let i = 0 ; i < Math.max(arr1.length, arr2.length, result.length) ; i++) {
    if (result[i] >= 2 && result[i + 1] >= 1) {
      const nega = Math.min(Math.floor(result[i] / 2), result[i + 1]);
      result[i] -= nega * 2;
      result[i + 1] -= nega;
    }
    result[i] = (result[i] ?? 0) + (arr1[i] ?? 0) + (arr2[i] ?? 0);
    const next = Math.floor(result[i] / 2);

    if (next) {
      result[i + 1] = (result[i + 1] ?? 0) + next;
      result[i + 2] = (result[i + 2] ?? 0) + next;
    }
    
    result[i] = result[i] % 2;
  }

  while (result.length > 1 && result.at(-1) === 0) result.pop();
  return result.reverse();
};

const arr1 = [1], arr2 = [1,1];
console.log(addNegabinary(arr1, arr2));

// 1, 0, 1 
// 1, 1, 1, 1, 1

// 0 1 1
// 0 0 2 1
// 
