function solve(arr) {
  for (let i = arr.length - 1 ; i >= 0 ; i--){
    for (let j = i - 1 ; j >= 0 ; j--){
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        i--;
      }
    }
  }
  return arr;
}

console.log(solve([1,2,1,2,1,2,3]));

// others
arr = [2,6,23,5,64,36,6,3,4,2,5,3,1];
const solve2 = arr => [...new Set(arr.reverse())].reverse();
console.log(solve2(arr));