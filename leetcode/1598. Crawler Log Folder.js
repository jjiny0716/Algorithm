/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let depth = 0;
  for (let log of logs) {
    if (log === "./");
    else if (log === "../") depth && depth--;
    else depth++
  }

  return depth;
};

const logs = ["d1/","d2/","../","d21/","./"];
console.log(minOperations(logs));