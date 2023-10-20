function solution(alp, cop, problems) {
  const timeStatMaps = [new Map()];
  timeStatMaps[0].set(alp, cop);
  problems = problems.filter(([alp_req, cop_req, alp_rwd, cop_rwd, cost]) => alp_rwd + cop_rwd >= cost)
  const [maxAlp, maxCop] = problems.reduce(
    ([maxAlp, maxCop], [alp_req, cop_req]) => [
      Math.max(maxAlp, alp_req),
      Math.max(maxCop, cop_req),
    ],
    [0, 0]
  );
  const maxTime = Math.max(maxAlp - alp, 0) + Math.max(maxCop - cop, 0);
  if (!problems.length) return maxTime;

  for (let t = 1; t <= maxTime ; t++) {
    const nextStatMap = new Map();
    timeStatMaps.push(nextStatMap);
    for (const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
      if (t - cost < 0) continue;
      for (const [lastAlp, lastCop] of timeStatMaps[t - cost].entries()) {
        if (lastAlp < alp_req || lastCop < cop_req) continue;
        if (lastAlp + alp_rwd >= maxAlp && lastCop + cop_rwd >= maxCop) return t;
        nextStatMap.set(lastAlp + alp_rwd, Math.max((nextStatMap.get(lastAlp + alp_rwd) || 0), lastCop + cop_rwd));
      }
    }

    for (const [lastAlp, lastCop] of timeStatMaps[t - 1].entries()) {
      if ((lastAlp + 1 >= maxAlp && lastCop >= maxCop) || (lastAlp >= maxAlp && lastCop + 1 >= maxCop)) return t;
      nextStatMap.set(lastAlp + 1, Math.max((nextStatMap.get(lastAlp + 1) || 0), lastCop));
      nextStatMap.set(lastAlp, Math.max((nextStatMap.get(lastAlp) || 0), lastCop + 1));
    }
  }

  return 0;
}

const alp = 0,
  cop = 0,
  problems = [
    [0, 0, 1, 1, 1],
    [150, 150, 1, 1, 1],
  ];
  console.time("6");

for (let i = 0 ; i < 98 ; i++) {
  problems.push([0, 0, 3, Math.floor(i  /3), i]);
}
console.log(solution(alp, cop, problems));
console.timeEnd("6");
// 5, 1 -> 1
// 5, 5 -> 5
