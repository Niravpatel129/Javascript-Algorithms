// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};

  for (s of str.split("")) {
    if (charMap[s]) {
      charMap[s]++;
    } else {
      charMap[s] = 1;
    }
  }

  let max = 0;
  let maxChar;
  for (char in charMap) {
    if (max < charMap[char]) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChar("abcccccccd"));
module.exports = maxChar;
