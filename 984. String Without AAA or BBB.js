/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function (a, b) {
  const [major, minor] = a >= b ? ["a", "b"] : ["b", "a"];
  let [majorCount, minorCount] = a >= b ? [a, b] : [b, a];
  let result = "";
  while (majorCount !== minorCount && minorCount !== 0) {
    for (let i = 0 ; i < 2 ; i++) {
      if (majorCount === 0) break;
      result += major;
      majorCount--;
    }
    for (let i = 0 ; i < 1 ; i++) {
      if (minorCount === 0) break;
      result += minor;
      minorCount--;
    }
  } 
  
  if (minorCount === 0) {
    while (majorCount > 0) {
      result += major;
      majorCount--;
    }
  }
  else {
    while (majorCount > 0) {
      result += major;
      result += minor;
      majorCount--;
      minorCount--;
    }
  }

  return result
};

const a = 10, b = 4;
console.log(strWithout3a3b(a, b));


// other
// 파이썬 코드이지만, 내가 작성한 코드보다 훨씬 간결함.
// 하나의 while문에 모든 로직을 담은게 인상적임.
// def strWithout3a3b(self, a: int, b: int) -> str:
//     ans = []
//     while a + b > 0:
//         if ans[-2 :] == ['a', 'a']:
//             b -= 1
//             ans.append('b')
//         elif ans[-2 :] == ['b', 'b']:
//             a -= 1
//             ans.append('a')    
//         elif a >= b:
//             a -= 1
//             ans.append('a')
//         else:
//             b -= 1
//             ans.append('b')
//     return ''.join(ans)