/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
  const isWordMatching = (word, pattern) => {
    let patternIndex = 0;
    for (const char of word) {
      if (char === pattern[patternIndex]) {
        patternIndex++;
      }
      else {
        if (isUpperCase(char)) return false;
      }
    }

    return patternIndex === pattern.length;
  }

  const isUpperCase = (char) => {
    return char === char.toUpperCase();
  }

  return queries.map((query) => isWordMatching(query, pattern));
};

const queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB";
console.log(camelMatch(queries, pattern));