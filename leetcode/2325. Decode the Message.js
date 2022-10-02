/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
  const keySet = new Set(key);
  const keyMap = [...keySet].filter((key) => key !== ' ').reduce((obj, key, i) => {
    obj[key] = String.fromCharCode('a'.charCodeAt(0) + i);
    return obj;
  }, { ' ': ' ' });

  return message.split('').map((char) => keyMap[char]).join('');
};

const key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv";
console.log(decodeMessage(key, message));