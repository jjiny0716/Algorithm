/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  for (let i = 0, j = 0 ; i < name.length || j < typed.length ; i++, j++) {
    let c1 = 0, c2 = 0;
    if (!name[i] || !typed[i]) return false;

    while (name[i] === name[i + 1]) {
      i++;
      c1++;
    }
    while (typed[j] === typed[j + 1]) {
      j++;
      c2++;
    }
    if (name[i] !== typed[j] || c1 > c2) return false;
  }

  return true;
};

const  name = "alex", typed = "aaleexa";
console.log(isLongPressedName(name, typed));