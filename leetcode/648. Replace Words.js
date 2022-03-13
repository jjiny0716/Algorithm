/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  // 굳이 해시맵 쓸 필요 없었음.
  const rootMap = {};
  let result = "";
  for (let root of dictionary) rootMap[root] = true;
  for (let word of sentence.split(" ")) {
    let size = 1;
    for (size = 1; size < word.length; size++) {
      const sliced = word.slice(0, size);
      if (rootMap[sliced]) {
        result += " " + sliced;
        break;
      }
    }
    if (size === word.length) result += " " + word;
  }

  return result.slice(1);
};

(dictionary = ["a", "b", "c"]), (sentence = "aadsfasf absbs bbab cadsfafs");
console.log(replaceWords(dictionary, sentence));

// Trie라는 자료구조를 이용해 최적화 가능