function solution(n, build_frame) {
  const StructureType = {
    PILLAR: 0,
    BEAM: 1,
  };
  const BuildType = {
    DELETE: 0,
    ADD: 1,
  };
  const building = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => {
      return { pillar: false, beam: false };
    })
  );

  const isValidForPillarPlacement = (x, y) =>
    y === 0 ||
    (x > 0 && building[y][x - 1].beam) ||
    building[y][x].beam ||
    building[y - 1][x].pillar;

  const isValidForBeamPlacement = (x, y) =>
    y > 0 &&
    (building[y - 1][x].pillar ||
      (x < n && building[y - 1][x + 1].pillar) ||
      (x > 0 && x < n && building[y][x - 1].beam && building[y][x + 1].beam));

  for (const [x, y, structureType, buildType] of build_frame) {
    if (structureType === StructureType.PILLAR) {
      if (buildType === BuildType.ADD && isValidForPillarPlacement(x, y)) {
        building[y][x].pillar = true;
      } else if (buildType === BuildType.DELETE) {
        building[y][x].pillar = false;
        if (
          (y < n && building[y + 1][x].pillar && !isValidForPillarPlacement(x, y + 1)) ||
          (y < n && x > 0 && building[y + 1][x - 1].beam && !isValidForBeamPlacement(x - 1, y + 1)) ||
            (y < n && building[y + 1][x].beam && !isValidForBeamPlacement(x, y + 1))
        )
          building[y][x].pillar = true;
      }
    } else if (structureType === StructureType.BEAM) {
      if (buildType === BuildType.ADD && isValidForBeamPlacement(x, y)) {
        building[y][x].beam = true;
      } else if (buildType === BuildType.DELETE) {
        building[y][x].beam = false;
        if (
          (building[y][x].pillar && !isValidForPillarPlacement(x, y)) ||
          (x < n && building[y][x + 1].pillar && !isValidForPillarPlacement(x + 1, y)) ||
          (x > 0 && building[y][x - 1].beam && !isValidForBeamPlacement(x - 1, y)) ||
          (x < n && building[y][x + 1].beam && !isValidForBeamPlacement(x + 1, y))
        )
          building[y][x].beam = true;
      }
    }
  }

  const ans = [];
  for (let x = 0; x <= n; x++) {
    for (let y = 0; y <= n; y++) {
      if (building[y][x].pillar) ans.push([x, y, 0]);
      if (building[y][x].beam) ans.push([x, y, 1]);
    }
  }

  return ans;
}

const n = 1,
  build_frame = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 0],
  ];
console.log(solution(n, build_frame));
