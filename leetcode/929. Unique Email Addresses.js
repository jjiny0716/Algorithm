/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const filteredEmails = new Set();

  for (let email of emails) {
    const [localName, domainName] = email.split('@');
    const filteredLocalName = localName.slice(0,email.indexOf("+") === -1 ? localName.length : email.indexOf("+")).replace(/[.]/g, "");
    filteredEmails.add(filteredLocalName + "@" + domainName);
  }

  return filteredEmails.size;
};

const emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"];
console.log(numUniqueEmails(emails));
