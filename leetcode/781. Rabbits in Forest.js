/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  const m = {};
  for (let answer of answers) {
    m[answer] ? m[answer]++ : m[answer] = 1;
  }

  return [...Object.entries(m)].map(entry => Math.ceil(entry[1] / (Number(entry[0]) + 1)) * (Number(entry[0]) + 1)).reduce((sum, value) => sum += value, 0);
};

const answers = [1,1,2];
console.log(numRabbits(answers));