function solution(bridge_length, weight, truck_weights) {
  const timeWeightMap = {};
  let t,
    curWeight = 0,
    truckIndex = 0;
  for (t = 0; ; t++) {
    curWeight -= timeWeightMap[t] || 0;
    if (curWeight + truck_weights[truckIndex] <= weight) {
      curWeight += truck_weights[truckIndex];
      timeWeightMap[t + bridge_length] = (timeWeightMap[t + bridge_length] || 0) + truck_weights[truckIndex];
      truckIndex++;
    }
    if (curWeight === 0 && truckIndex === truck_weights.length) break;
  }

  return t + 1;
}
