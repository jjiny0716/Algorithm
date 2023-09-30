function solution(fees, records) {
  const [basicTime, basicFee, unitTime, unitFee] = fees;
  const inTimeMap = new Map();
  const outTimeMap = new Map();
  for (const record of records) {
    const [time, number, inOut] = record.split(" ");
    if (inOut === "IN") {
      if (!inTimeMap.has(number)) inTimeMap.set(number, []);
      inTimeMap.get(number).push(time);
    } else {
      if (!outTimeMap.has(number)) outTimeMap.set(number, []);
      outTimeMap.get(number).push(time);
    }
  }

  const timeToMinute = (time) => {
    const [hour, minute] = time.split(":");
    return hour * 60 + minute * 1;
  };
  const timeMap = new Map();
  for (const carNumber of inTimeMap.keys()) {
    const inTimes = inTimeMap.get(carNumber);
    const outTimes = outTimeMap.get(carNumber);
    for (let i = 0; i < inTimes.length; i++) {
      const inTime = inTimes[i];
      const outTime = outTimes?.[i] ?? "23:59";
      const duration = timeToMinute(outTime) - timeToMinute(inTime);
      timeMap.set(carNumber, (timeMap.get(carNumber) || 0) + duration);
    }
  }

  return [...timeMap.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(
      ([_, duration]) =>
        basicFee +
        Math.ceil(Math.max(duration - basicTime, 0) / unitTime) * unitFee
    );
}
