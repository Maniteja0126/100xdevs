/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

  if(str1.length != str2.length) return false;
  let sort1= cleanStr1.split('').sort().join('')
  let sort2 = cleanStr2.split('').sort().join('')

  return sort1 === sort2
}

module.exports = isAnagram;
