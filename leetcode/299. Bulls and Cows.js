/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const sm = new Map();
  const gm = new Map();
  let a = 0, b = 0;
  for (let i = 0 ; i < secret.length ; i++) {
    if (secret[i] === guess[i]) a++ 
    else {
      sm.set(secret[i], (sm.get(secret[i]) || 0) + 1);
      gm.set(guess[i], (gm.get(guess[i]) || 0) + 1);
    }
  }

  for (let key of [...sm.keys()]) {
    b += Math.min(sm.get(key), gm.get(key) || 0);
  }
  
  return `${a}A${b}B`;
};

secret = "1123", guess = "0111"
console.log(getHint(secret, guess));