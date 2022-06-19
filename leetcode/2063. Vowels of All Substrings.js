/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function(word) {
  const vowel = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true,
  }
  let result = 0;
  for (let i = 0 ; i < word.length ; i++) {
    if (vowel[word[i]]) result += (i + 1) * (word.length - i);
  }
  
  return result;
};

const word = "abaa";
console.log(countVowels(word));

// aba
// vowel 한개 -> 몇개의 substring에 포함될까.
// 3 + 3 = 6

// abaa
// 4 + 6 + 4 = 14
// 특정 vowel을 포함하는 모든 substring의 갯수를 어떻게 구할 까?
// vowel을 포함한 왼쪽에서 시작, 오른쪽에서 끝나므로, 이 둘을 선택하는 경우의 수를 구하자. 