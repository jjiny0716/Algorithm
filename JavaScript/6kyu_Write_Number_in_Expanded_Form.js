function expandedForm(num) {
  return num.toString().split('').reduce((prev, cur, index, arr) => prev += cur !== "0" ? cur * 10 ** (arr.length - index - 1) + " + ": "", "").slice(0, -3);
}

console.log(expandedForm(70503));

// others
function expandedForm2(num) {
  return String(num)
          .split("")
          .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
          .filter((num) => Number(num) != 0)
          .join(" + ")
}