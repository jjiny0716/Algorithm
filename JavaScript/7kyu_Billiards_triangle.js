function pyramid(balls) {
  let result = 0;
  for (let i = 1 ; i < balls; i++) {
    result += i
    balls -= i;
  }
  return result;
}