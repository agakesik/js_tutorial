(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("aga-palindrome");

function palindromeTester() {
  let string = prompt(" enter a string for palindrome:")
  let phrase = new Phrase(string);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome :D`;
  } else {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is not a palindrome. :C`;
  }
}
document.addEventListener("DOMContentLoaded", function(){
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click", palindromeTester);
});

},{"aga-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Adds 'reverse' to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a phrase object
function Phrase(content) {
  this.content = content;

  // // process to Lower case
  // this.processor = function(string) {
  //   return string.toLowerCase();
  // }


  // Returns content processed for palindrome testing (letters only & lower case)
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Return only letters of the content
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

}

// Defines a TranslatedPhrase object
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // use transaltion instead od content for palindrome
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}
// TranslatedPhrase.prototype = new Phrase();

},{}]},{},[1]);
