/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const map = {};
  for (let i = 0 ; i < order.length ; i++) map[order[i]] = i;
  
  const nonOrderChars = [];
  return s.split('').filter(char => {
    if (map[char] === undefined) {
      nonOrderChars.push(char);
      return false;
    }
    return true;
  }).sort((a, b) => map[a] - map[b]).join('') + nonOrderChars.join('');
};

const order = 
"exv", s = "xwvee";
console.log(customSortString(order, s));

