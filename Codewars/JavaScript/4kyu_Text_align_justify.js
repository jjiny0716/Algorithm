function justify(text, width) {
  const lines = [];
  let words = [];
  let lineLength = 0;
  for (let word of text.split(' ')) {
    if (lineLength + word.length > width) {
      lines.push([...words]);
      words = [];
      lineLength = 0;
    } 
    words.push(word);
    lineLength += word.length + 1;
  }
  lines.push([...words]);

  for (let i = 0 ; i < lines.length - 1 ; i++) {
    const whiteSpaceCount = lines[i].length - 1;
    const additionalSpaceCount = width - lines[i].join(' ').length;
    const a = Math.floor(additionalSpaceCount / whiteSpaceCount); // all count
    const b = additionalSpaceCount % whiteSpaceCount; // some front whitespce count
    const counts = Array.from({length: whiteSpaceCount}, (v, i) => a + (i < b ? 1 : 0));

    for (let j = 0 ; j < counts.length ; j++) {
      lines[i][j] += " ".repeat(counts[j]);
    }
  }

  return lines.map(line => line.join(' ')).join('\n');
}

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';
console.log(justify(text, 30));


// other
function justify2(str, len) {
  var words = str.split(' ');
  var lines = [];
  var lastLine = words.reduce(function(line, word) {
    if (line) {
      if (line.length + word.length + 1 <= len)
        return line + ' ' + word;
      lines.push(line);
    }
    return word;
  });
  lines = lines.map(function(line) {
    if (line.indexOf(' ') >= 0)
      for (var lineLen = line.length; lineLen < len; )
        line = line.replace(/ +/g, function(spaces) {
          return spaces + (lineLen++ < len ? ' ' : '');
        });
    return line;
  });
  lastLine && lines.push(lastLine);
  return lines.join('\n');
}
