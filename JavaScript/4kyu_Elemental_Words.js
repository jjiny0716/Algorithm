function makeWord(word, i, elementList, result) {
  if (i === word.length) {
    result.push([...elementList]);
    return;
  }
  
  for (let size = 1 ; size < 4 ; size++) {
    if (i + size > word.length) return;
    const symbol = word.slice(i, i + size).split('').map((c, idx) => idx === 0 ? c.toUpperCase() : c.toLowerCase()).join('');
    const element = ELEMENTS[symbol];
    if (element) {
      elementList.push(`${element} (${symbol})`);
      makeWord(word, i + size, elementList, result);
      elementList.pop();
    }
  }
}

function elementalForms(word) {
  if (!word) return [];
  const result = [];
  makeWord(word, 0, [], result);

  return result;
}

//console.log(elementalForms("hELLo"));
//const str = "hEEL";
//console.log();