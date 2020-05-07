//-------- exercise 1 ----------
var a = 10;

var x = --a + a++;
console.log(x);

// Nhấn Run để chạy code.
// Giải thích vì sao kết quả là 18.

// x = 9 + a++
// x = 9 + 9 = 18
//Vì --a trả về giá trị sau khi thay đổi = 10 - 1 = 9
// a++ trả về giá trị trước khi thay đổi = 9
//-------- exercise 2 ----------
var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;
// 10 + b++ - ++b - ++a // a = 9
// 10 + 18 - ++b - ++a // b = 19
// 10 + 18 - 20 - ++a // b = 20
// 10 + 18 - 20 - 10 // a = 10
// x = -2
console.log(x);
// Nhấn Run để chạy code
// Thêm cách dấu cách vào dòng 4 để code dễ đọc hơn
// Giải thích tại sao kết quả lại như vậy. Gợi ý: Viết ra từng dòng để giải thích
//-------- finish ----------
