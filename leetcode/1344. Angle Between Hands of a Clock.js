/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
  const minuteAngle = minutes * 6;
  const hourAngle = ((hour - 1) * 30 + 30 + minutes * 0.5) % 360;

  return Math.min(Math.abs(hourAngle - minuteAngle), 360 - Math.abs(hourAngle - minuteAngle));
};

const hour = 3, minutes = 15;
console.log(angleClock(hour, minutes));