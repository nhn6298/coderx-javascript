//-------- exercise 1 ----------
var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
// Vì array sẽ được so sánh qua tham chiếu. Nghĩa là kiểm tra xem các đối tượng có được tham chiếu đến cùng một vị trí trong bộ nhớ hay không.
// Trong trường hợp này 2 arrays ở 2 vị trí khác nhau trong bộ nhớ
//-------- exercise 2 ----------
var a = {
  foo: 'bar'
};

var b = {
  foo: 'bar'
};

console.log(a === b);

// console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 object có vẻ giống nhau. Viết câu trả lời ở dưới đây.
// Vì object thuần sẽ được so sánh qua tham chiếu. Nghĩa là kiểm tra xem các đối tượng có được tham chiếu đến cùng một vị trí trong bộ nhớ hay không.
// Trong trường hợp này 2 objects ở 2 vị trí khác nhau trong bộ nhớ
//-------- exercise 3 ----------
var a = '1000';
var b = '200';

console.log(a > b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù 1000 trông có vẻ lớn hơn 200. Viết câu trả lời ở dưới đây.
// Vì a và b là 2 biến kiểu string. string a !== string b
//----------  finish  ----------
