/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  const teamCount = votes[0].length;
  const rankMaps = Array.from({length: teamCount}, () => {return {}});
  for (let vote of votes) {
    for (let i = 0 ; i < teamCount ; i++) {
      rankMaps[i][vote[i]] = (rankMaps[i][vote[i]] || 0) + 1;
    }
  }
  function compareTwoTeam(a, b) {
    for (let i = 0 ; i < teamCount ; i++) {
      if ((rankMaps[i][a] || 0) < (rankMaps[i][b] || 0)) return 1;
      else if ((rankMaps[i][a] || 0) > (rankMaps[i][b] || 0)) return -1;
    }
    return a.charCodeAt(0) - b.charCodeAt(0);
  }
  return votes[0].split('').sort((a, b) => compareTwoTeam(a, b)).join('');
};

const votes = ["ZMNAGUEDSJYLBOPHRQICWFXTVK"];
console.log(rankTeams(votes));
// console.log(['a','b','c','d','e'].sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)));