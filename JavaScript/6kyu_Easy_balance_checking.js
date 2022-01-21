function balance(book) {
  const lines = book.split("\n").map((line) => cleanLine(line)).filter((line) => line);
  let total = lines.splice(0, 1);
  const head = `Original Balance: ${Number.parseFloat(total).toFixed(2)}\r\n`;

  let totalExpense = 0;

  const article = lines.reduce((prev, cur) => {
    const info = [...cur.split(" "), "Balance"];
    info[2] = Number(info[2]).toFixed(2);
    total -= Number(info[2]);
    info.push(total.toFixed(2));
    totalExpense += Number(info[2]);
    return (prev += info.join(" ") + "\r\n");
  }, "");

  const totalStr = `Total expense  ${totalExpense.toFixed(2)}\r\n`;
  const averageStr = `Average expense  ${(totalExpense / lines.length).toFixed(2)}`;

  return head + article + totalStr + averageStr;
}

function cleanLine(line) {
  const newLine = line.replace(/[^a-zA-Z0-9.\s]/g, "");
  return newLine;
}
const test = `1000.00
125 Market 125.45#%-
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10`;

console.log(balance(test));
