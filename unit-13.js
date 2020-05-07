//-------- exercise 1 ----------
/**
 * Dùng vòng lặp for kiểm tra số nguyên tố.
 * @param {number} x Số cần kiểm tra
 * @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
 */
// condition: n>2, n % (n-1) !== 0
/**
 * gán i = x, i -- chạy từ x đến 1
 */
function isPrimeNumber(x) {
  // viết code ở đây.
  var flag = true;
  if (x < 2) {
    flag = false;
  } else {
    for (var i = 2; i < x ; i++) {
      if (x % i == 0) {
        flag = false;
        break;
      }
    }
  }
  if (flag == true) {
    return true;
  } else {
    return false;
  }
};
//-------- exercise 2 ----------
/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */
 
 function fromCharCode() {
  // viết code ở đây.
  var result = []
  for (var i = 97; i <=122; i++){
   result += (String.fromCharCode(i))
  }
  return result;
}
//-------- exercise 3 ----------
/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */

function sum(array) {
  // viết code ở đây.
  var s = 0;
  for (var i = 0; i < array.length; i++){
      s += array[i];
  }
  return s;
}
//-------- exercise 4 ----------
// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */
function sumMultiplyArray(a, b) {
  // viết code ở đây.
  var sa = 0;
  var sb = 0;
  for (var i = 0; i < a.length; i++) {
    sa += a[i];
  }
  for (var j = 0; j < b.length; j++) {
    sb += b[j];
  }
  return sa * sb;
}
//-------- exercise 5 ----------
/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
function calculate(start, end) {
  // viết code ở đây.
  var mul = 1;
  for (i = start; i < end; i++) {
    mul *= i;
  }
  return mul;
}
calculate(3, 8);
//-------- exercise 6 ----------
/**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại

*/
function has(array, value) {
  // viết code ở đây
  
  var result = true;
  for (var i = 0; i < array.length; i++){
      result = value === array[i];
  }
  if(result == true){
      return true;
  }
  else {
      return false;
  }
}
//-------- exercise 7 ----------
function factorials(number) {
  s = 1;
  for (var i = 1; i <= number; i++){
      s *= i;
  }
  return s;
}
//----------  finish  ----------
