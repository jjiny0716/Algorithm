/**
 * hashset version
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
  const senderWordMap = new Map();
  let largestCount = 0, largestName;
  for (let i = 0 ; i < messages.length ; i++) {
    const [message, sender] = [messages[i], senders[i]];
    if (!senderWordMap.has(sender)) senderWordMap.set(sender, new Set());

    const senderWordSet = senderWordMap.get(sender);

    for (const word of message.split(' ')) {
      senderWordSet.add(word);
    }

    if (senderWordSet.size > largestCount) {
      largestCount = senderWordSet.size;
      largestName = sender;
    }
    else if (senderWordSet.size === largestCount) {
      largestName = sender > largestName ? sender : largestName;
    }
  }

  return largestName;
};

const messages = ["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"], senders = ["Alice","userTwo","userThree","Alice"];
console.log(largestWordCount(messages, senders));

/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
  const senderWordMap = {};
  let largestCount = 0, largestName;
  for (let i = 0 ; i < messages.length ; i++) {
    const [message, sender] = [messages[i], senders[i]];
    senderWordMap[sender] = (senderWordMap[sender] || 0) + message.split(' ').length;

    if (senderWordMap[sender] > largestCount) {
      largestCount = senderWordMap[sender];
      largestName = sender;
    }
    else if (senderWordMap[sender] === largestCount) {
      largestName = sender > largestName ? sender : largestName;
    }
  }

  return largestName;
};
