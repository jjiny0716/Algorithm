/**
 * @param {number[]} tasks
 * @return {number}
 */
const minimumRounds = (tasks) =>
  [
    ...tasks.reduce((map, t) => map.set(t, (map.get(t) || 0) + 1), new Map()),
  ].reduce(
    (round, [_, count]) =>
      round === -1 || count === 1 ? -1 : round + Math.ceil(count / 3),
    0
  );

const tasks = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4];
console.log(minimumRounds(tasks));
