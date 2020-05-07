//-------- exercise 1 ----------
/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.

  Output: 
    student1.average() = 7
    student2.average() = 8
*/
function Student(diemToan, diemLy, diemHoa) {
  // Viết code ở đây
  this.diemToan = diemToan;
  this.diemLy = diemLy;
  this.diemHoa = diemHoa;
}
Student.prototype.average = function(a, b, c) {
  // Viết code ở đây
  return Math.round((this.diemToan + this.diemLy + this.diemHoa) / 3);
}
var student1 = new Student(6, 7, 7);
var student2 = new Student(8, 9, 6);
//-------- exercise 2 ----------
/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.

  Output: 
    student1.average() = 7
    student2.average() = 8
*/
function Student(diemToan, diemLy, diemHoa) {
  // Viết code ở đây
  this.diemToan = diemToan;
  this.diemLy = diemLy;
  this.diemHoa = diemHoa;
}
Student.prototype.average = function(a, b, c) {
  // Viết code ở đây
  return Math.round((this.diemToan + this.diemLy + this.diemHoa) / 3);
}
var student1 = new Student(6, 7, 7);
var student2 = new Student(8, 9, 6);
//-------- exercise 3 ----------
/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/DroopyPaltryKeygenerator
 */

function answer() {
  return `
  // Ghi câu trả lời ở đây
  Vì cả 2 đều trỏ về 1 prototype của object Person, nghĩa là cùng trỏ về 1 nơi trong bộ nhớ.
  2 đối tượng sử dụng phép === ra true khi 2 đối tượng đc lưu trong cùng 1 nơi trong bộ nhớ
  `
}

function Person(name, age) {
  this.type = "person";
  this.name = name;
  this.age = age;
}

Person.prototype.sing = function() {
  console.log(`Là lá la...`);
};

const mrThinh = new Person("Pham Thinh", 33);
const mrDung = new Person("The Dung", 19);

mrThinh.sing === mrDung.sing
//-------- exercise 4 ----------
/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/FarflungIdioticExabyte
 */
function answer() {
  return `
  // Ghi câu trả lời ở đây
  Vì mrThinh.sing là thuộc tính của object mrThinh, còn mrDung.sing là thuộc tính của object mrDung,
  2 object được lưu ở 2 nơi khác nhau trong bộ nhớ nên phép tham chiếu ra false
  `
}

function Person(name, age) {
  this.type = "person";
  this.name = name;
  this.age = age;

  this.sing = function() {
    console.log(`Là lá la...`);
  };

}

const mrThinh = new Person("Pham Thinh", 33);
const mrDung = new Person("The Dung", 19);

mrThinh.sing === mrDung.sing
//----------  finish  ----------
