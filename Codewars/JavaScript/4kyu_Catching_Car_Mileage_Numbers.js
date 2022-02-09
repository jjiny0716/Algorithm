function isFollowedByAllZeros(n) {
  return n.toString().split('').every((digit, i) => i === 0 || digit == "0");
}

function isAllSameNumber(n) {
  return n.toString().split('').every(digit => digit === n[0]);
}

function isLoop(n) {
  return (n.includes(1) && n.includes(9) && n.includes(0));
}

function isIncrementing(n) {
  n = n.toString().split('').map(c => Number(c));
  for (let i = 0 ; i < n.length - 1; i++) {
    if (!((n[i] === 9 && n[i + 1] === 0) || n[i] + 1 === n[i + 1])) return false;
  }
   if (isLoop(n)) return false;
  return true;
}

function isDecrementing(n) {
  n = n.toString().split('').map(c => Number(c));
  for (let i = 0 ; i < n.length - 1; i++) {
    if (!((n[i] === 0 && n[i + 1] === 9) || n[i] - 1 === n[i + 1])) return false;
  }
  if (isLoop(n)) return false;
  return true;
}

function isPalindrome(n) {
  return n.toString().split('').reverse().join('') === n.toString();
}

function isAwesomePhrases(n, aps) {
  return aps.some(ap => n === ap);
}

function isInteresting(number, awesomePhrases) {
  for (let n = number ; n <= number + 2 ; n++) {  
    if (n < 100) continue;
    if (isFollowedByAllZeros(n) || isAllSameNumber(n) || isIncrementing(n) || isDecrementing(n) || isPalindrome(n) || isAwesomePhrases(n, awesomePhrases)) {
      if (n === number) return 2;
      else return 1;
    }
  }
  return 0;
}
const arr = [];

console.log(isInteresting(1336, [1337, 256]));