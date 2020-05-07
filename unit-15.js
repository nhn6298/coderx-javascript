//-------- exercise 1 ----------
/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
  // your code here!
  for (var i = 0; i < n; i++ ){
      arr.pop();
  }
  return arr;
}
//-------- exercise 2 ----------
/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */
 /** [1] array.concat()
 * Phương thức concat () được sử dụng để hợp nhất hai hoặc nhiều mảng. Phương pháp này không thay đổi các mảng hiện có mà thay vào đó trả về một mảng mới.
*/
var a = [1,2,3,4];
var b = [5,6,7];
b.concat(a);
/** [2] array.pop()
 * Phương thức pop () loại bỏ phần tử cuối cùng khỏi một mảng và trả về phần tử đó. Phương pháp này thay đổi độ dài của mảng.
*/
var a = [1,2,3,4];
a.pop();
/** [3] array.push()
 * Phương thức push () thêm một hoặc nhiều phần tử vào cuối một mảng và trả về độ dài mới của mảng.
*/
var animals = ['pigs', 'goats', 'sheep'];
animals.push('chickens', 'cats', 'dogs');
console.log(animals);
/** [4] array.shift()
 * Phương thức shift () loại bỏ phần tử đầu tiên khỏi một mảng và trả về phần tử bị loại bỏ đó. Phương pháp này thay đổi độ dài của mảng.
*/
var array1 = [1, 2, 3];
var firstElement = array1.shift();
console.log(array1);
console.log(firstElement);
// console.log(array1);
// console.log(firstElement);
/** [5] array.unshift(phần tử cần chèn)
 * Phương thức unshift () thêm một hoặc nhiều phần tử vào đầu một mảng và trả về độ dài mới của mảng.
*/
console.log('========>method 5')
var array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
console.log(array1);
/** [5] array.splice(vị trí thay thế/chèn, số phần tử muốn xóa, phần tử chèn)
 * let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
 * Phương thức splice () thay đổi nội dung của một mảng bằng cách loại bỏ hoặc thay thế các phần tử hiện có và / hoặc thêm các phần tử mới vào vị trí.
*/
console.log('========>method 6')
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
months.splice(4, 1, 'May');
console.log(months);
//-------- exercise 3 ----------
/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
*/

function first(arr, n) {
  // your code here...
  return arr.splice(0,n);
}

// console.log(first([1, 2, 3], 2)); // expect [1, 2]
//----------  finish  ----------
