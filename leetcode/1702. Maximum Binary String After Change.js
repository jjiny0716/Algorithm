/**
 * @param {string} binary
 * @return {string}
 */
var maximumBinaryString = function(binary) {
  let zeroCount = 0;
  let initialZeroIndex;
  for (let i = 0 ; i < binary.length ; i++) {
    if (binary[i] === '0') {
      zeroCount++;
      if (initialZeroIndex === undefined) initialZeroIndex = i; 
    }
  }
  if (zeroCount < 2) return binary;

  const result = new Array(binary.length - initialZeroIndex).fill('1');
  result[zeroCount - 1] = '0';
  return '1'.repeat(initialZeroIndex) + result.join('');
};

const binary = "000110";
console.log(maximumBinaryString(binary));