function solution(rectangle, characterX, characterY, itemX, itemY) {
  const visited = new Set();
  const isBlocked = (y, x) => {
    for (const [left, bottom, right, top] of rectangle) {
      if (y > bottom && y < top && x > left && x < right) return true;
    }

    for (const [left, bottom, right, top] of rectangle) {
      if (y >= bottom && y <= top && x >= left && x <= right) return false;
    }

    return true;
  }

  const findShortestPath = (y, x) => {
    if (y === itemY && x === itemX) return 0;
    if (visited.has(`${y} ${x}`)) return 999;

    visited.add(`${y} ${x}`);

    let cost = 999;
    if (!isBlocked(y + 0.5, x)) cost = Math.min(cost, findShortestPath(y + 1, x));
    if (!isBlocked(y - 0.5, x)) cost = Math.min(cost, findShortestPath(y - 1, x));
    if (!isBlocked(y, x + 0.5)) cost = Math.min(cost, findShortestPath(y, x + 1));
    if (!isBlocked(y, x - 0.5)) cost = Math.min(cost, findShortestPath(y, x - 1));

    return cost + 1;  
  }
  return findShortestPath(characterY, characterX);
}

const rectangle = [
    [1, 1, 7, 4],
    [3, 2, 5, 5],
    [4, 3, 6, 9],
    [2, 6, 8, 8],
  ],
  characterX = 1,
  characterY = 3,
  itemX = 7,
  itemY = 8;
console.log(solution(rectangle, characterX, characterY, itemX, itemY));

[
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 2, 2, 2, 9, 9, 9, 9],
  [9, 9, 2, 2, 2, 1, 2, 2, 2, 9, 9],
  [9, 9, 2, 0, 1, 0, 1, 0, 2, 9, 9],
  [9, 9, 2, 2, 1, 1, 2, 2, 2, 9, 9],
  [9, 9, 9, 2, 1, 1, 2, 9, 9, 9, 9],
  [9, 2, 2, 2, 1, 1, 2, 2, 9, 9, 9],
  [9, 2, 0, 1, 1, 1, 1, 2, 9, 9, 9],
  [9, 2, 0, 1, 1, 1, 0, 2, 9, 9, 9],
  [9, 2, 2, 2, 2, 2, 2, 2, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
];
