// /**
//  * @param {string} s
//  * @return {number}
//  */
// // timeout
// var numberOfWays = function(s) {
//   const dp = {};
//   const helper = (index = 0, selected = []) => {
//     if (index > s.length) return 0;
//     if (selected.length === 3) return 1;

//     const paramsToStr = () => index + "|" + selected.join('');
//     if (dp[paramsToStr()] !== undefined) return dp[paramsToStr()];

//     let result = 0;
//     result += helper(index + 1, selected);
    
//     if (selected.length === 0 || selected.at(-1) !== s[index]) {
//       selected.push(s[index]);
//       result += helper(index + 1, selected);
//       selected.pop();
//     }

//     return dp[paramsToStr()] = result;
//   }

//   return helper();
// };

/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function(s) {
  const map = {
    "0": 0,
    "1": 0,
    "01": 0,
    "10": 0,
    "010": 0,
    "101": 0,
  }

  for (const c of s) {
    if (c === '0') {
      map["0"]++;
      map["10"] += map["1"];
      map["010"] += map["01"];
    }
    else {
      map["1"]++;
      map["01"] += map["0"];
      map["101"] += map["10"];
    }
  }

  return (map["101"] || 0) + (map["010"] || 0);
};

const s = "001101";
console.log(numberOfWays(s));