const lock = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [undefined, 0, undefined],
];
const position = [
  [3, 1], [0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]
];
const directions = [
  [0, 0], [0, 1], [1, 0], [0, -1], [-1, 0]
];

function makePINs(observed, PIN, PINs) {
  if (PIN.length === observed.length) {
    PINs.push(PIN.join(""));
    return;
  }

  const index = PIN.length;
  const y = position[observed[index]][0];
  const x = position[observed[index]][1];
  for (let d of directions) {
    if (lock[y + d[0]] === undefined || lock[y + d[0]][x + d[1]] === undefined) continue;
    PIN.push(lock[y + d[0]][x + d[1]]);
    makePINs(observed, PIN, PINs);
    PIN.pop();
  }
}

function getPINs(observed) {
  const PINs = [];
  makePINs(observed, [], PINs);
  return PINs;
}

console.log(getPINs("369"));

//others
function getPINs2(observed) {
  var adjacent = [
    /* 0 */ [0, 8],
    /* 1 */ [1, 2, 4],
    /* 2 */ [1, 2, 3, 5],
    /* 3 */ [2, 3, 6],
    /* 4 */ [1, 4, 5, 7],
    /* 5 */ [2, 4, 5, 6, 8],
    /* 6 */ [3, 5, 6, 9],
    /* 7 */ [4, 7, 8],
    /* 8 */ [5, 7, 8, 9, 0],
    /* 9 */ [6, 8, 9]
  ];
  
  return observed
    .split('')
    .map(function(d) { return adjacent[d|0]; })
    .reduce(function(pa, da) {
      return da.reduce(function(pv, d) {
        return pv.concat(pa.map(function(p) {
          return '' + p + d;
        }));
      }, []);
    }, ['']);
}
