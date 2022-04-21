/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
  const currentSounds = {
    r: [],
    o: [],
    a: [],
    k: [],
  }
  const next = {
    c: 'r',
    r: 'o',
    o: 'a',
    a: 'k',
  }

  let frogCount = 0;
  let result = 0;
  for (let i = 0 ; i < croakOfFrogs.length ; i++) {
    const sound = croakOfFrogs[i];
    if (sound === 'c') {
      currentSounds[next[sound]].push(i);
      frogCount++;
    }
    else {
      if (currentSounds[sound].length === 0) return -1;
      currentSounds[sound].shift();
      if (next[sound]) currentSounds[next[sound]].push(i);
      else frogCount--;
    }
    result = Math.max(result, frogCount);
  }

  if (Object.values(currentSounds).some((soundArr) => soundArr.length !== 0)) return -1;
  return result;
};

const croakOfFrogs = "croakcrook";
console.log(minNumberOfFrogs(croakOfFrogs));