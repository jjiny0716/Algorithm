/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  num = num.toString().split("");
  const firstSixIndex = num.findIndex((digit) => digit === "6");
  if (firstSixIndex !== -1) num[firstSixIndex] = "9";

  return num.join("");
};

console.log(maximum69Number(9669));
