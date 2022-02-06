function recoverSecret(triplets) {
  const set = new Set();
  triplets.forEach(triplet => {
    triplet.forEach(char => set.add(char));
  })

  const chars = Array.from(set);

  let changeCount;
  while (changeCount !== 0) {
    changeCount = 0;
    for (let triplet of triplets) {
      for (let i = 0 ; i < 2 ; i++) {
        const i1 = chars.indexOf(triplet[i]);
        const i2 = chars.indexOf(triplet[i + 1]);
        if (i1 > i2) {
          [chars[i1], chars[i2]] = [chars[i2], chars[i1]];
          changeCount++;
        }
      }
    }
  }

  return chars.join('');
}

const triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]
console.log(recoverSecret(triplets1));


// others
var recoverSecret2 = function(triplets) {
  console.log(triplets);
  // 첫번째만 찾고, triplets에서 첫번째에 해당하는 문자를 전부 제거하고, 재귀함.
  for(var [first] of triplets)
  {
    if (triplets.every(tuple => tuple.indexOf(first) <= 0))
    {
      triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
      return first + recoverSecret2(triplets.filter(tuple => tuple.length > 0));
    }
  }
  return '';
}

console.log(triplets1);
console.log(recoverSecret2(triplets1));