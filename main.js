let Phrase = require("aga-palindrome");

function palindromeTester() {
  let string = prompt(" enter a string for palindrome:")
  let phrase = new Phrase(string);

  if (phrase.palindrome()) {
    alert(`"${phrase.content}" is a palindrome :D`);
  } else {
    alert(`${phrase.content} is not a palindrome. :C`);
  }
}
document.addEventListener("DOMContentLoaded", function(){
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click", palindromeTester);
});
