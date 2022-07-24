/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
  const possibleChars = ['a', 'b', 'c'];

  const happyStrings = [];
  function makeAllHappyString(n, result = []) {
    if (result.length === n) {
      happyStrings.push([...result]);
      return; 
    }

    for (let c of possibleChars) {
      if (c === result.at(-1)) {
        continue;
      }
      else {
        result.push(c);
        makeAllHappyString(n, result);
        result.pop();
      }
    }
  }
  makeAllHappyString(n);

  return happyStrings[k - 1] ? happyStrings[k - 1].join('') : "";
};

const n = 3, k = 9;
console.log(getHappyString(n, k));