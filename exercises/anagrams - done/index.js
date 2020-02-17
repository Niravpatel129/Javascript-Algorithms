// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let wordMapA = {};
  let wordMapB = {};

  let trimmedString1 = stringA.replace(/[^\w]/g, "").toLowerCase();
  let trimmedString2 = stringB.replace(/[^\w]/g, "").toLowerCase();

  for (let i of trimmedString1) {
    if (wordMapA[i]) {
      wordMapA[i]++;
    } else {
      wordMapA[i] = 1;
    }
  }

  for (let i of trimmedString2) {
    if (wordMapB[i]) {
      wordMapB[i]++;
    } else {
      wordMapB[i] = 1;
    }
  }

  if (Object.keys(wordMapA).length !== Object.keys(wordMapB).length)
    return false;

  let isAnagram = false;
  for (let obj in wordMapA) {
    if (wordMapA[obj] === wordMapB[obj]) {
      isAnagram = true;
    } else {
      isAnagram = false;
    }
  }

  for (let obj in wordMapB) {
    if (wordMapA[obj] === wordMapB[obj]) {
      isAnagram = true;
    } else {
      isAnagram = false;
    }
  }

  return isAnagram;
}

let x = anagrams("One one", "One one");

console.log(x);

module.exports = anagrams;
