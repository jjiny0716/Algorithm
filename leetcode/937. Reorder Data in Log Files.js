/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  return logs
    .map((log) => {
      const words = log.split(" ");
      return {
        identifier: words[0],
        content: words.slice(1).join(" "),
        isLetterLog: !!words[1][0].match(/[a-z]/i),
      };
    })
    .sort((a, b) => {
      if (!a.isLetterLog && !b.isLetterLog) return 0;
      else if (a.isLetterLog && !b.isLetterLog) return -1;
      else if (!a.isLetterLog && b.isLetterLog) return 1;

      return a.content.localeCompare(b.content) === 0
        ? a.identifier.localeCompare(b.identifier)
        : a.content.localeCompare(b.content);
    })
    .map(({ identifier, content }) => `${identifier} ${content}`);
};

const logs = [
  "dig1 8 1 5 1",
  "let1 art can",
  "dig2 3 6",
  "let2 own kit dig",
  "let3 art zero",
];
console.log(reorderLogFiles(logs));
