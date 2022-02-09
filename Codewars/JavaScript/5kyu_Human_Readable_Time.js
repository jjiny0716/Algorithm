function humanReadable (seconds) {
  return Math.floor(seconds / 3600).toString().padStart(2,'0') + ":" + Math.floor(seconds % 3600 / 60).toString().padStart(2,'0') + ":" + (seconds % 3600 % 60).toString().padStart(2,'0');
}

console.log(humanReadable(45296));