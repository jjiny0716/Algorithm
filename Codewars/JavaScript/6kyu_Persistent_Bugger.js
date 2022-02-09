function persistence(num) {
  let count = 0;
  while (num / 10 >= 1) {
    num = num.toString().split('').reduce((prev, cur) => prev *= cur, 1);
    console.log(num);
    count++;
  }

  return count;
}

console.log(persistence(999));

// reduce((prev, cur) => prev *= cur, 1) vs reduce((a, b) => a * b)?