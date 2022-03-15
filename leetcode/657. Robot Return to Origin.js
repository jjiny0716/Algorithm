/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  const map = {};
  for (let move of moves) map[move] ? map[move]++ : map[move] = 1;

  return map['U'] === map['D'] && map["L"] === map["R"];
};

const moves = "LL";
console.log(judgeCircle(moves));

// 변수 2개 쓰기
// switch문도 가능!
var judgeCircle2 = function (moves) {
  let y = 0, x = 0;
  const yMovement = {
    'U': 1,
    'D': -1
  }
  const xMovement = {
    'R': 1,
    'L': -1
  }
  for (let move of moves) yMovement[move] ? y += yMovement[move] : x += xMovement[move];

  return y === 0 && x === 0;
};
console.log(judgeCircle2(moves));