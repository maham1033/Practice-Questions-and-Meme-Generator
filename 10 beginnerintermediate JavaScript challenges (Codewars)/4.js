// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity


function capitalize(s) {
    let evenCap = '';
    let oddCap = '';
    
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
        evenCap += s[i].toUpperCase();
        oddCap += s[i];
      } else {
        evenCap += s[i];
        oddCap += s[i].toUpperCase();
      }
    }
  
    return [evenCap, oddCap];
  }

  console.log(capitalize("hello"));