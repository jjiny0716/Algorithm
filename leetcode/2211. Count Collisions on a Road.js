/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
  const stack = [];
  let result = 0;
  for (let d of directions) {
    if (!stack.length) {
      stack.push(d);
      continue;
    }

    if (d === 'L') {
      if (stack.at(-1) === 'R') {
        result += 2;
        stack.pop();
        while (stack.at(-1) === 'R') {
          result++;
          stack.pop();
        }
        stack.push('S');
      }
      else if (stack.at(-1) === 'S') {
        result++;
      }
      else stack.push('L');
    }
    else if (d === 'S') {
      while (stack.at(-1) === 'R') {
        result++;
        stack.pop();
      }
      stack.push('S');
    }
    else {
      stack.push('R');
    }
  }

  return result;
};

const directions = 
"SSRSSRLLRSLLRSRSSRLRRRRLLRRLSSRR";
console.log(countCollisions(directions));