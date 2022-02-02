function encodeRailFenceCipher(string, numberRails) {
  const rails = Array.from({length: numberRails}, () => []);

  let direction = -1;
  let railIndex = 0;
  for (let char of string) {
    rails[railIndex].push(char);
    if (railIndex === 0 || railIndex === numberRails - 1) direction *= -1;
    railIndex += direction;
  }

  return rails.map(rail => rail.join('')).join('');
}

function decodeRailFenceCipher(string, numberRails) {
  const ratio = Array.from({length: numberRails}, (v, index) => (index === 0 || index === numberRails - 1) ? 1 : 2);
  const ratioSum = 2 + (numberRails - 2) * 2
  const railLengths = ratio.map((r) => r * Math.floor(string.length / ratioSum));
  let remain = string.length % ratioSum;
  let direction = -1;
  let railIndex = 0;
  while (remain) {
    railLengths[railIndex]++;
    remain--;
    if (railIndex === 0 || railIndex === numberRails - 1) direction *= -1;
    railIndex += direction;
  }

  const rails = [];
  let lastIndex = 0;
  for (let length of railLengths) {
    rails.push(string.substring(lastIndex, lastIndex + length).split('').reverse());
    lastIndex += length;
  }

  const result = [];
  direction = -1;
  railIndex = 0;
  while (rails[railIndex].length) {
    result.push(rails[railIndex].pop());
    if (railIndex === 0 || railIndex === numberRails - 1) direction *= -1;
    railIndex += direction;
  }

  return result.join('');
}

const str = "ioliu ejtpexePtecaieiti stne iad nfcqdstreotdii mermu  vtl p  un  fer irii umntn,usipad!arngtuosstro,o mts stanee ! rtiosaiAiaiia miun emcrmasei aetnenDuqtVrekrrafe !e pimaast epepc  oc eraio ve.dov a traifsmoiube   ouee isir   uli iusxeu si e ";
const cipher = "iuieo nAa rl  iicaip aioiu fsa o leo    etrimcvejv tipe t irue.ip r npdseui! eo xmi e vuer emt ePeuecsaxtmmnra se namatucittamriainssia id, epiietusi fliost esuteima!m irp e o  taotei ssd,nfurtd!oeabinqarnresecrtDr i fnsuk  ingsqe ea totroeduVu";

console.log(encodeRailFenceCipher(str, 32));
console.log(cipher);

console.log(decodeRailFenceCipher(cipher, 32));
console.log(str);
