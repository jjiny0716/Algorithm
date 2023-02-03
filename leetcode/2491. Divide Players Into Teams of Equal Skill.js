/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
  const skillOfTeam = skill.reduce((prev, cur) => prev + cur) / (skill.length / 2);

  const map = new Map();
  let result = 0;
  for (const s of skill) {
    if (!map.get(skillOfTeam - s)) map.set(s, (map.get(s) || 0) + 1);
    else {
      map.set(skillOfTeam - s, (map.get(skillOfTeam - s) || 0) - 1);
      result += (skillOfTeam - s) * s;
    }
  }

  if ([...map.values()].some(value => value !== 0)) return -1;
  return result || -1;
};

const skill = [10,14,16,15,9,4,4,4];
console.log(dividePlayers(skill));