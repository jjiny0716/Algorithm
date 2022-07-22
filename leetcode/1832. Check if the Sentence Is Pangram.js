/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  const set = new Set();
  for (const c of sentence) set.add(c);

  return set.size === 26;
};

const sentence = "thequickbrownfoxjumpsoverthelazydog";
console.log(checkIfPangram(sentence));