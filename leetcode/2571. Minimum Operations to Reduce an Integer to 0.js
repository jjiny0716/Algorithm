/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
  const binaryString = n.toString(2);
  let result = 0;
  let oneStringLength = 0;
  
  for (let i = 0 ; i < binaryString.length ; i++) {
    if (binaryString[i] === '1') {
      oneStringLength++;
    } 
    else {
      if (binaryString[i + 1] === '1' && oneStringLength > 1) {
        result++;
        oneStringLength++;
      }
      else {
        result += Math.min(2, oneStringLength);
        oneStringLength = 0;
      }
    }
  }

  return result + Math.min(2, oneStringLength);
};

const n = 39;
console.log(minOperations(n));


// 0 한칸: 101이 아닌 이상 무조건 메꾸는게 이득
// 0 두칸 이상: 냅둬도 손해 안봄



11111111111

5 