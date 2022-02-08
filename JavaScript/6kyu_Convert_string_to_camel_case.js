function toCamelCase(str) {
  return str.split('').map((char, i) => "-_".includes(str[i - 1]) ? char.toUpperCase() : char).join('').replace(/[-_]/g, "");
}

console.log(toCamelCase("the_stealth_warrior"));

// other
function toCamelCase2(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}