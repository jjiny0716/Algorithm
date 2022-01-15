function snail(arr) {
  if (!arr[0].length) return [];
  const result = [];
  const directions = [[0, 1],[1, 0],[0, -1],[-1, 0]];
  
  for (let y = 0, x = 0, d = 0, c = 0; c < arr.length * arr.length ; y += directions[d][0], x += directions[d][1], c++) {
    result.push(arr[y][x]);
    arr[y][x] = true;
    if (y + directions[d][0] < 0 || x + directions[d][1] < 0 || y + directions[d][0] >= arr.length || x + directions[d][1] >= arr.length || arr[y + directions[d][0]][x + directions[d][1]] === true) 
      d = (d + 1) % 4;
  }

  return result;
}

const testArr = [[1,2,3],
[8,9,4],
[7,6,5]];
console.log(snail(testArr));

// others
snail2 = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}

