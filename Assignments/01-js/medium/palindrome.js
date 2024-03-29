/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let rev = str1.split('').reverse().join('')
  if(str1 != rev) return false
  return true;
}

module.exports = isPalindrome;
