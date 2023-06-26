/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  arr1.sort((a, b) => a.id - b.id);
  arr2.sort((a, b) => a.id - b.id);

  const joinedArray = [];
  let i = 0, j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (i !== arr1.length && (j === arr2.length || arr1[i].id < arr2[j].id)) {
      joinedArray.push(arr1[i++]);
    }
    else if (j !== arr2.length && (i === arr1.length || arr1[i].id > arr2[j].id)) {
      joinedArray.push(arr2[j++]);
    }
    else {
      joinedArray.push({ ...arr1[i++], ...arr2[j++] });
    }
  }

  return joinedArray;
};