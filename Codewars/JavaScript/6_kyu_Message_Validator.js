function isAValidMessage(message) {
  if (!message) return true;
  if (!(message[0].charCodeAt(0) >= '0'.charCodeAt(0) && message[0].charCodeAt(0) <= '9'.charCodeAt(0))) return false;

  let numbers = "";
  let messages = "";
  for (const c of message) {
    if (c.charCodeAt(0) >= '0'.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0)) {
      numbers += c;
      messages += ' ';
    }
    else {
      messages += c;
      numbers += ' ';
    }
  }

  numbers = numbers.split(' ').filter((number) => number);
  messages = messages.split(' ').filter((message) => message);

  return numbers.length === messages.length && numbers.every((number, i) => Number(number) === messages[i].length);
}

const message = "4code13hellocodewars";
console.log(isAValidMessage(message));
