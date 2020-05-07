//-------- exercise 1 ----------
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
  // your code here
  var fiveGreat = arr.filter(function(x){
      return x >= 5;
  })
  return fiveGreat;
}
//-------- exercise 2 ----------
// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
  // your code here!
  return arr.filter(function(x){
      return x % 2 === 0 ;
  })
}
//-------- exercise 3 ----------
/**
 * Give a list of students, filter out non-female 
 */
 
 var members = [
  	{ name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
  ];
function filterOutFemales(members) {
  // your code here!
  return members.filter(function(x){
      return x.gender !== 'female';
  })
}
//----------  finish  ----------
