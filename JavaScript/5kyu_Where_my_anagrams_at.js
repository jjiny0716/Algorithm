function wordToAlphabetCounts(word) {
  const result = {};
  for (let char of word) {
    if (result[char] === undefined) result[char] = 0;
    result[char]++;
  } 

  return result;
}

function isEqual(ac1, ac2) {
  if (Object.keys(ac1).length !== Object.keys(ac2).length) return false;
  for (let key of Object.keys(ac1)) {
    if (ac1[key] !== ac2[key]) return false;
  }
  return true;
}

function anagrams(word, words) {
  const ac = wordToAlphabetCounts(word);
  
  return words.filter(w => isEqual(ac, wordToAlphabetCounts(w)));
}
const arr = "ASD";
arr.localeCompare
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada', 'aabbc']));


