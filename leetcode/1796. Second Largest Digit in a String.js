/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  const set = new Set();
  for (const c of s) {
    const n = Number(c);
    if (!isNaN(n)) set.add(n);
  }

  return [...set].sort((a, b) => b - a)[1] ?? -1;
};

const s = "dfa12321afd";
console.log(secondHighest(s));