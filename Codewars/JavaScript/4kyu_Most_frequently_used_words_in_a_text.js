function topThreeWords(text) {
  const map = new Map();
  text
    .toLowerCase()
    .split(" ")
    .map((word) => word.replace(/[^a-z']/gi, ""))
    .forEach((word) => {
      if (map.has(word)) map.set(word, map.get(word) + 1); // dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);로 압축 가능
      else map.set(word, 1);
    });
  console.log(map);
  map.delete('');
  map.delete('\'');

  console.log([...map].sort((a, b) => b[1] - a[1]));

  const sorted = [...map].sort((a, b) => b[1] - a[1])
  return [...sorted.slice(0, 3).map(value => value[0])];
}

console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`));

// others
let topThreeWords2 = text => {
  let dict = new Map();
  text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
      let word = match.toLowerCase();
      dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
  });
  dict.delete("'");
  return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
};

function topThreeWords3(text) {
  let words = {}
  text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, match => {
    let c = words[match] || 0
    words[match] = ++c
  })
  return Object
          .keys(words)
          .sort(function(a,b){return words[b]-words[a]})
          .slice(0,3)
}
