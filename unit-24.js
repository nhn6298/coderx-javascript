//-------- exercise 1 ----------
// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
  // your code here!
  var result = [];
  for (var i = 0; i <arr.length; i++){
      if (arr[i] % 2 === 0){
        result.push(Math.pow(arr[i],2));
      }
      else {
        result.push(arr[i]);
      }
  }
  return result;
}
//-------- exercise 2 ----------
/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
*/

function average(arr) {
  // your code here!
  var result = 0;
  for(var i = 0; i< arr.length; i++){
      result += arr[i];
  }
  return Math.round(result/arr.length);
}

//-------- exercise 3 ----------
/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
  // your code here
  var result = [];
  for (var i = 0; i< arr.length; i++){
      if (arr[i]<0) {
          result.push(Math.abs(arr[i]))
      }
      else {
          result.push(arr[i])
      }
  }
  return result;
}

//-------- exercise 4 ----------
// Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100

function random() {
  // your code here!
  return Math.random() * 100
}
//-------- exercise 5 ----------
/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

function rightTriangle(a, b, c) {
  // your code here
  if (a!== 0) {
  return a*a + b*b + c*c - Math.pow(Math.max(a,b,c),2) === Math.pow(Math.max(a,b,c),2)}
  else {return false}
}
//-------- exercise 6 ----------
/** 
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn 
 * khi biết bán kính
 * Với PI = 3.14  
*/

function circumferenceOfCircle(r) {
  // your code here!
  return r*2*3.14;
}
function acreageOfCircle(r) {
  //your code here!
  return r*r*3.14;
}
//-------- exercise 7 ----------
/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
*/

function trigonim(number) {
  // your code here
  var result = [];
  result.push(Math.sin(number).toFixed(3))
  result.push(Math.cos(number).toFixed(3))
  result.push(Math.tan(number).toFixed(3))
  return result;
}
//----------  finish  ----------
