/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const m = new Map();
  for (let i = 0; i < accounts.length; i++) {
    let [name, ...curEmails] = accounts[i];
    curEmails = [...new Set(curEmails)];
    const emailsList = m.get(name);
    if (!emailsList) m.set(name, [curEmails]);
    else {
      let isSamePersonFounded = false;
      for (let i = 0; i < emailsList.length; i++) {
        let emails = emailsList[i];
        const mergedEmailsSet = new Set([...curEmails, ...emails]);
        // console.log(mergedEmailsSet);
        if (mergedEmailsSet.size !== curEmails.length + emails.length) {
          // 중복 O
          // console.log([...mergedEmailsSet]);
          emailsList.splice(i, 1, [...mergedEmailsSet]);
          isSamePersonFounded = true;
          break;
        }
      }
      if (!isSamePersonFounded) {
        emailsList.push(curEmails);
      }
    }
  }
  const result = [];
  // console.log(m.entries);
  for (let entry of m.entries()) {
    for (let emails of entry[1]) {
      result.push([entry[0], ...emails.sort()]);
    }
  }

  return result;
};

const accounts = [
  ["David", "David0@m.co", "David1@m.co"],
  ["David", "David3@m.co", "David4@m.co"],
  ["David", "David4@m.co", "David5@m.co"],
  ["David", "David2@m.co", "David3@m.co"],
  ["David", "David1@m.co", "David2@m.co"],
];
console.log(accountsMerge(accounts));

[
  ["David", "David0@m.co", "David1@m.co", "David2@m.co"],
  ["David", "David2@m.co", "David3@m.co", "David4@m.co", "David5@m.co"],
];

[["David", "David0@m.co", "David1@m.co", "David2@m.co", "David3@m.co", "David4@m.co", "David5@m.co"]];
