function mix(s1, s2) {
  const charCountForS1 = Array.from({ length: 26 }, () => 0);
  const charCountForS2 = Array.from({ length: 26 }, () => 0);

  for (let char of s1)
    if (/[a-z]/.test(char)) charCountForS1[char.charCodeAt() - 96]++;
  for (let char of s2)
    if (/[a-z]/.test(char)) charCountForS2[char.charCodeAt() - 96]++;

  const pairs = [];
  for (let i = 0; i < 26; i++) {
    const c1 = charCountForS1[i];
    const c2 = charCountForS2[i];
    if ((c1 === 0 && c2 === 0) || Math.max(c1, c2) < 2) continue;

    let which = "?";
    if (c1 > c2) which = "1";
    else if (c1 < c2) which = "2";
    else which = "3";

    pairs.push({
      which: which,
      letters: String.fromCharCode(96 + i).repeat(Math.max(c1, c2)),
    });
  }

  pairs.sort((a, b) => {
    if (b.letters.length === a.letters.length) {
      if (a.which.localeCompare(b.which) === 0) {
        return a.letters.localeCompare(b.letters);
      }
      return a.which.localeCompare(b.which);
    }
    return b.letters.length - a.letters.length;
  });

  const groups = pairs.map((pair) => {
    if (pair.which == "3") pair.which = "=";
    return `${pair.which}:${pair.letters}`
  });

  return groups.join("/");
}

const s1 = "looping is fun but dangerous";
const s2 = "less dangerous than coding";
// console.log("a".localeCompare("a"));
console.log(mix(s1, s2));
