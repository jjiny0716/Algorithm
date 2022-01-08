function narcissistic(value) {
  return value.toString().split('').reduce((prev, cur, index, arr) => prev += cur ** arr.length, 0) === value;
}

console.log(narcissistic(153));