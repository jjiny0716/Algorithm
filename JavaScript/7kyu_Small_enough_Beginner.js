function smallEnough(a, limit){
  return a.filter((value) => value > limit).length === 0;
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));

// others
function smallEnough2(a, limit){
  return Math.max(...a) <= limit
}
smallEnough3 = (a, l) => a.every(e => e <= l)