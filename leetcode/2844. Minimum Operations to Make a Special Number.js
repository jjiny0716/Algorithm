/**
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function(num) {
  // 00, 25, 50, 75
  const cases = [false, false, false, false];
  for (let i = num.length ; i >= 0 ; i--) {
    if (num[i] === '0') {
      if (!cases[0]) cases[0] = true;
      else return num.length - i - 2;

      cases[2] = true;
    }
    else if (num[i] === '5') {
      if (cases[2]) return num.length - i - 2;
      cases[1] = true;
      cases[3] = true;
    }
    else if (num[i] === '2') {
      if (cases[1]) return num.length - i - 2;
    }
    else if (num[i] === '7') {
      if (cases[3]) return num.length - i - 2;
    }
  }

  return Math.max(num.length - (cases[0] ? 1 : 0), 1);
};

const num = "2908305";
console.log(minimumOperations(num));