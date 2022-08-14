/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
  properties.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
  const stack = [];
  let result = 0;
  for (const property of properties) {
    while (stack.length && stack.at(-1)[0] < property[0] && stack.at(-1)[1] < property[1]) {
      stack.pop();
      result++;
    }

    stack.push(property);
  }

  return result;
};

const properties = [[1,5],[10,4],[4,3]];
console.log(numberOfWeakCharacters(properties));