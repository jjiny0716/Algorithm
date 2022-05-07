function solution(routes) {
  routes = routes.sort((a, b) => a[1] - b[1]);

  let cameraCount = 0;
  let cameraCoverage = -30001;
  for (let [start, end] of routes) {
    if (cameraCoverage < start) {
      cameraCoverage = end;
      cameraCount++;
    }
  }

  return cameraCount;
}
