/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  for (let asteroid of asteroids) {
    if (stack.length === 0 || stack[stack.length - 1] * asteroid > 0 || (stack[stack.length - 1] < 0 && asteroid > 0)) stack.push(asteroid);
    else {
      let destroyed = false;
      while (stack.length !== 0 && stack[stack.length - 1] > 0) {
        const size1 = Math.abs(stack[stack.length - 1]);
        const size2 = Math.abs(asteroid);
        if (size1 > size2) {
          // destroy current asteroid
          destroyed = true;
          break;
        }
        else if (size1 < size2) {
          // destroy asteroid from stack
          stack.pop();
        }
        else {
          // destroy both
          stack.pop();
          destroyed = true;
          break;
        }
      }
      if (!destroyed) stack.push(asteroid);
    }
  }

  return stack;
};

const asteroids = [-2,-1,1,2]
console.log(asteroidCollision(asteroids));

// 왼쪽에 있는 운석이 오른쪽으로 가는 경우와, 오른쪽에 있는 운석이 왼쪽으로 가는 경우만 해결해주면 된다. 나머지 3개의 경우 운석이 충돌하지 않음