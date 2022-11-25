/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
 var haveConflict = function (event1, event2) {
  const timeToMinute = (time) => {
    const [h, m] = time.split(":");
    return +h * 60 + +m;
  };
  event1 = event1.map(time => timeToMinute(time));
  event2 = event2.map(time => timeToMinute(time));

  return !(event1[1] < event2[0] || event2[1] < event1[0]);
};