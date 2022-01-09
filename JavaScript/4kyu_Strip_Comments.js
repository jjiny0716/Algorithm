function findIndexOfMarkersInString(str, markers) {
  let markerPosition = -2;
  for (let marker of markers) markerPosition = Math.max(markerPosition, str.indexOf(marker));
  return markerPosition != -1 ? markerPosition : str.length;
}

function solution(input, markers) {
  return input.split('\n').map((str) => str.slice(0, findIndexOfMarkersInString(str, markers)).trim()).join('\n');
};

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));

// others
function solution2(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}