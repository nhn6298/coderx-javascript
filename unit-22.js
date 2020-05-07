//-------- exercise 1 ----------
// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

function flatten(arr) {
  // viết code ở đây.
  return arr.reduce(function(x,y){
      return x.concat(y);
  },[])
}


//-------- exercise 2 ----------
/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/
function countOccurrences(arr) {
  return arr.reduce(function(current, item) {
    if (item in current) {
      current[item]++;
    } else {
      current[item] = 1;
    }
    return current;
  }, {})
}
//----------  finish  ----------
