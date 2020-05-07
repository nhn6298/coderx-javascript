//-------- exercise 1 ----------
/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 * for of dùng để lặp các phần tử của mảng
 * for in dùng để lặp các key trong object
 */
// Ví dụ for of
var dogs = ['Husky', 'Dashchund', 'Labrador']
for (var dog of dogs){
  console.log(dog);
};
// Ví dụ for in
console.log('=============');
var myMom = {
  age: 50,
  height: 150,
  weight: 45
};
for (var key in myMom) {
  console.log(key, myMom[key]);
}
//-------- exercise 2 ----------
/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */
 
function multiply(arr) {
  var mul = 1;
  for (var i of arr){
      mul *= i;
  }
  return mul;
}
//-------- exercise 3 ----------
/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau, 
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100
    }
  }
};

function getObjectKey(obj, keys) {
  // Write code here...
return ["bedroom","area","bed","type","price"];
    
}
//-------- exercise 4 ----------
/**
 * viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
 * Tham số:
 *  - object: object cần kiểm tra
 *  - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 *  - true nếu có tồn tại
 *  - false nếu không tồn tại
 */
 
 function has(object, key) {
   var check = false;
   for (var i in object){
       if (key === i)
       {
           check = true;
           break;
       }
   }
   if (check == true){
       return true;
   }
   else return false;
 }
//-------- exercise 5 ----------
/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */
 
function sum(numbers) {
   // Write code here...
   s = 0;
   for (var i of numbers){
       s += i;
   }
   return s;
}
//----------  finish  ----------
