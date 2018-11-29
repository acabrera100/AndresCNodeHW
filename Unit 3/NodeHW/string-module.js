const firstLetter = string => string[0];
const reverseString = string =>
  string
    .split("")
    .reverse()
    .join("");
const capitalString = string => string.toUpperCase();
module.exports = {
  firstLetter,
  reverseString,
  capitalString
};
