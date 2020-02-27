let Phrase = require("aga-palindrome");

// function palindromeTester() {
  let string = prompt("Please enter a string for palindrome:")
  let phrase = new Phrase(string);

  if (phrase.palindrome()) {
    alert(`"${phrase.content}" is a palindrome`);
  } else {
    alert(`${phrase.content} is not a palindrome.`);
  }
// }
