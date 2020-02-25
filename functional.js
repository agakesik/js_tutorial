let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

//Return a URL-friendly version of a string.
//Example North Dakota -> north-dakota
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrl(elements) {
  return elements.map(element => urlify(element));
}
function fullUrl(elements) {
  return elements.map(element => "https://example.com/" + element);
}
console.log(functionalUrl(states));
console.log(fullUrl(functionalUrl(states)));

// singles: Imperative
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(state) {
    if (state.split(/\s+/).length === 1) {
      singles.push(state);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional
function functionalSingles(elements) {
  return elements.filter(state => state.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

//finding dakota
function includeDakota (array) {
  return array.filter(state => state.includes("Dakota"));
}
console.log(includeDakota(states));

function regexDakota(array) {
  return array.filter(state => state.split(/\s+/).length === 2);
}
console.log(regexDakota(states));

 let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imprerative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function (n) {
    total += n;
  })
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => {return total += n});
}
console.log(functionalSum(numbers));

//lenght: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

lenght: Functional solution
function functionalLength(elements) {  return elements.reduce((lengths, element) => {    lengths[element] = element.length;    return lengths;  }, {});}
console.log(functionalLength(states));

// mnozenie
function multiply(array) {
  return array.reduce((total, n) => {return total*=n});
}
console.log(multiply(numbers));
