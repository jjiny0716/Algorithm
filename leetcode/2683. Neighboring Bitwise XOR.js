/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
  const original = [0];
  const not = (bit) => bit === 0 ? 1 : 0;

  for (let i = 0 ; i < derived.length - 1 ; i++) {
    const bit = derived[i];
    original.push(bit === 0 ? original.at(-1) : not(original.at(-1)));
  }

  return (derived.at(-1) === 0 && original[0] === original.at(-1)) || (derived.at(-1) === 1 && original[0] !== original.at(-1));
};

const derived = [1,1];
console.log(doesValidArrayExist(derived));