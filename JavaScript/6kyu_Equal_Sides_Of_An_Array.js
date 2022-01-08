function findEvenIndex(arr)
{
  let left = 0, right = arr.reduce((prev, cur) => prev += cur, 0);
  for (let i = 0 ; i < arr.length ; i++){
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }

  return -1;
}

console.log(findEvenIndex([1,100,50,-51,1,1]));