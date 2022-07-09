/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
  const map = {};
  for (let [key, value] of knowledge) {
    map[key] = value;
  }

  let st = 0, ed = 0;
  for (let i = 0 ; i < s.length ; i++) {
    if (s[i] === '(') st = i;
    else if (s[i] === ')') {
      ed = i;
      const target = s.slice(st, ed + 1);
      const value = map[s.slice(st + 1, ed)] ?? '?';
      s = s.replace(target, value);
      i -= target.length - value.length;
    }
  }
  
  return s;
};

const s = "(name)is(age)yearsold", knowledge = [["name","bob"],["age","two"]];
console.log(evaluate(s, knowledge));