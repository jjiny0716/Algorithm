/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
  const inorderResult = [];
  const inorder = (arr) => {
    for (const elem of arr) {
      if (elem instanceof Array) {
        inorder(elem);
      }
      else inorderResult.push(elem);
    }
  }
  inorder();

  for (const elem of inorderResult) {
    yield elem;
  }
};

/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
  const stack = [{ array: arr, index: 0 }];
  while (stack.length) {
    const { array, index } = stack.pop();
    for (let i = index ; i < array.length ; i++) {
      if (array[i] instanceof Array) {
        stack.push({ array, index: i + 1 });
        stack.push({ array: array[i], index: 0 });
        break;
      }
      else {
        yield array[i];
      }
    }
  }
};

// yield* 