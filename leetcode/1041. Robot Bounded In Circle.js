/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  const DIR_COUNT = 4;
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  instructions = instructions.repeat(4);
  let y = 0, x = 0, d = 0;
  for (let instruction of instructions) {
    switch(instruction) {
      case 'G': 
        [y, x] = [y + directions[d][0], x + directions[d][1]];
        break;
      case 'L':
        d = (d - 1 + DIR_COUNT) % DIR_COUNT;
        break;
      case 'R':
        d = (d + 1) % DIR_COUNT;
        break;
    }
  }
  return y === 0 && x === 0;
};

const instructions = "GGLLGG";
console.log(isRobotBounded(instructions));