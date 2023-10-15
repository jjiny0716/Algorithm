function solution(n, t, m, timetable) {
  const timeToMinute = (time) => {
    const [hour, minute] = time.split(":");
    return hour * 60 + minute * 1;
  };
  const minuteToTime = (minute) =>
    `${Math.floor(minute / 60)
      .toString()
      .padStart(2, "0")}:${(minute % 60).toString().padStart(2, "0")}`;
  timetable = timetable.map(timeToMinute).sort((a, b) => a - b);

  let crewIndex = 0,
    time = 540;
  for (let i = 0; i < n; i++) {
    let remainSeat = m;
    while (
      remainSeat &&
      crewIndex < timetable.length &&
      time >= timetable[crewIndex]
    ) {
      remainSeat--;
      crewIndex++;
    }

    if (i === n - 1) {
      if (remainSeat) {
        return minuteToTime(time);
      } else {
        return minuteToTime(timetable[crewIndex - 1] - 1);
      }
    }

    time += t;
  }

  return null;
}

const n = 2,
  t = 10,
  m = 2,
  timetable = ["09:10", "09:10", "08:00"];
console.log(solution(n, t, m, timetable));
