const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = function (arrayString) {
//   let mapArray = arrayString.map(function (sentence) {
    
//   let splitWord = sentence.split (" ")

//   let titleWord = splitWord.map(word => word[0].toUpperCase() + word.substr(1))

//   let joinWord = titleWord.join(" ")

//   return joinWord;
//   })
//   return mapArray;
// }
// console.log(titleCased(tutorials));

// const titleCased = function(tutorials) {
//   return tutorials.map((title) => {
//     return title.split(' ').map((word) => {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     })
//     .join(' ');
//   });
// } 
// titleCased;

let tCasedTitles = []
function titleCased() {
  let splitStr = tutorials.map(function(string) {
    return string.split(' ')
  })
  splitStr.map(function(array){
    let toAdd = array.map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return tCasedTitles.push(toAdd)
  })
  let titleCasedTitles = tCasedTitles.map(function(array){
    return array.join(' ')
  })
  return titleCasedTitles
}
console.log(titleCased)