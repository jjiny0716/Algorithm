/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function(edges) {
  const edgeScores = new Array(edges.length).fill(0);
  let max = 0, maxIndex = 0;
  for (let i = 0 ; i < edges.length ; i++) {
    edgeScores[edges[i]] += i;
    if (edgeScores[edges[i]] > max || (edgeScores[edges[i]] === max && edges[i] < maxIndex)) {
      max = edgeScores[edges[i]];
      maxIndex = edges[i];
    } 
  }

  return maxIndex;
};

const edges = [3,3,3,0];
console.log(edgeScore(edges));