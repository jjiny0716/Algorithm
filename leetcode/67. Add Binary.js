/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  a = a.split('').reverse();
  b = b.split('').reverse();
  const n = Math.max(a.length, b.length);
  let carry = 0;
  const result = [];

  for (let i = 0 ; i < n ; i++) {
    const sum = (Number(a[i]) || 0) + (Number(b[i]) || 0) + carry;
    result.push(sum % 2);
    carry = Math.floor(sum / 2);
  } 
  result.push(carry || "");

  return result.reverse().join('');
};

console.log(addBinary("1", "11"));

// BigInt를 이용한 방법
var addBinary2 = function(a, b) {
  const aBin = `0b${a}`
  const bBin = `0b${b}`
  const sum = BigInt(aBin) + BigInt(bBin)
  return sum.toString(2)
};
