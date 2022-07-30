var orderedCount = function (text) {
  return [...text.split('').reduce((map, char) => {
    map.set(char, (map.get(char) || 0) + 1);
    return map;
  }, new Map()).entries()];
}
const text = "abracadabra";
console.log(orderedCount(text));
