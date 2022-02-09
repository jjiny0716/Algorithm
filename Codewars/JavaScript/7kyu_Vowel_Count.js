function getCount(str) {
  return str.split('').reduce((count, char) => {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') return count += 1;
    return count;
  }, 0);
} 

console.log(getCount("asdiwd"));

// others
function getCount2(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

function getCount3(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}