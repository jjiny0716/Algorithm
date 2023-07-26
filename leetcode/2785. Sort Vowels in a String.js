/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
  const vowelSet = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
  const vowels = [];
  for (const c of s) {
    if (vowelSet.has(c)) vowels.push(c);
  }
  vowels.sort();

  const resultStrArr = [];
  let vowelIndex = 0;
  for (const c of s) {
    if (vowelSet.has(c)) {
      resultStrArr.push(vowels[vowelIndex++]);
    }
    else {
      resultStrArr.push(c);
    }
  }

  return resultStrArr.join('');
};

s = "lEetcOde"
console.log(sortVowels(s));
