function solution(msg) {
  const dictionary = Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));

  const ans = [];
  let maxSubstrLen = 1;
  for (let i = 0 ; i < msg.length ; i++) {
    let substrLen = maxSubstrLen;
    while (true) {
      const substr = msg.slice(i, i + substrLen);
      const index = dictionary.findIndex((w) => w === substr);
      if (index === -1) {
        substrLen--;
        continue;
      }

      ans.push(index + 1);
      dictionary.push(substr + msg[i + substrLen]);
      maxSubstrLen = Math.max(maxSubstrLen, substrLen + 1);
      i += substrLen - 1;
      break;
    }
  }

  return ans;
}

const msg = "TOBEORNOTTOBEORTOBEORNOT";
console.log(solution(msg));
