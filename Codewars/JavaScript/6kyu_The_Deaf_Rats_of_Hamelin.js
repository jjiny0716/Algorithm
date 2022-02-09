function hasWrongDirection(rat, dest) {
  if (rat.position < dest && rat.direction.localeCompare("left") === 0) return true;
  else if (rat.position > dest && rat.direction.localeCompare("right") === 0) return true;
  else return false;
}

function isRat(str) {
  if (str.localeCompare("~O") === 0) return true;
  else if (str.localeCompare("O~") === 0) return true;
  else return false;
}

function countDeafRats(town) {
  const rats = [];
  for (let i = 0; i < town.length; i++) {
    const str = town.substring(i, i + 2);
    if (isRat(str)) {
      rats.push({
        position: i,
        direction: str[0] === "~" ? "right" : "left",
      });
      i++;
    }
  }

  const dest = town.indexOf("P");
  let result = 0;
  for (let rat of rats) {
    if (hasWrongDirection(rat, dest)) result++;
  }

  return result;
}

console.log(countDeafRats("~O~O~O~OP~O~OO~"));

// other
var countDeafRats2 = function (town) {
  let deafs = 0;
  let ident = "O";
  for (let i = 0; i < town.length; i++) {
    if (town[i] === "P") {
      ident = "~";
    }
    if (town[i] === ident) {
      deafs++;
    }
    if (town[i] === "~" || town[i] === "O") {
      i++;
    }
  }
  return deafs;
};
