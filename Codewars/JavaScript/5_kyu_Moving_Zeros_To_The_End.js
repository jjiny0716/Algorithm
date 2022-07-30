function moveZeros(arr) {
  const zeros = [];
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] === 0) zeros.push(...arr.splice(i--, 1));
  }

  return [...arr, ...zeros];
}

const arr = [false,1,0,1,2,0,1,3,"a"];
console.log(moveZeros(arr));