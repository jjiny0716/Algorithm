/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  let result = "";
  for (let word of dictionary) {
    let i = 0;
    for (let j = 0 ; j < s.length ; j++) {
      if (word[i] === s[j]) {
        i++;
        if (i === word.length) break;
      }
    }
    if (i === word.length) {
      if (word.length > result.length) result = word;
      else if (word.length === result.length && word.localeCompare(result) === -1) result = word;
    }
  }

  return result;
};

console.log(findLongestWord("abpcplea", ["ale","apple","monkey","plea"]));
// "ale","apple","monkey","plea"

// console.log("".localeCompare(undefined));

// word의 result와의 길이, 사전순 비교를 연산 후가 아닌 전에 하면, 조금더 효율적일듯.
// if (i === word.length) {
//   if (word.length > result.length) result = word;
//   else if (word.length === result.length && word.localeCompare(result) === -1) result = word;
// } 
// 