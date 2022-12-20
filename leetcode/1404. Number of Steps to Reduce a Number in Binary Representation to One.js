/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
  const bitArr = s.split('');
  let count = 0;

  const divide = () => {
    bitArr.pop();
  }

  const add1 = () => {
    for (let i = bitArr.length - 1 ; i >= 0 ; i--) {
      bitArr[i] = bitArr[i] === '0' ? '1' : '0';
      if (bitArr[i] === '1') return;
    }

    bitArr.unshift('1');
  }

  while (bitArr.length > 1) {
    count++;
    if (bitArr.at(-1) === '0') divide();
    else add1();
  }

  return count;
};

const s = "10";
console.log(numSteps(s));