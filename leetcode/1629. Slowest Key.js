/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
  let maxDuration = 0, maxKey;
  for (let i = 0 ; i < releaseTimes.length ; i++) {
    const duration = releaseTimes[i] - (releaseTimes[i - 1] || 0);
    if (duration > maxDuration) {
      maxDuration = duration;
      maxKey = keysPressed[i];
    }
    else if (duration === maxDuration && maxKey < keysPressed[i]) maxKey = keysPressed[i];
  }

  return maxKey;
};

const  releaseTimes = [9,29,49,50], keysPressed = "cbcd";
console.log(slowestKey(releaseTimes, keysPressed));