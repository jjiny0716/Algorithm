function solution(array, commands) {
  const result = [];
  for (let command of commands) {
    const [i, j, k] = command;
    result.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }

  return result;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = 	[[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(array, commands));