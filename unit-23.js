//-------- exercise 1 ----------
// Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (descending order)

function sortNumber(arr) {
  // Write code here...
  return arr.sort(function(a,b){
      return a - b;
  })
}
//-------- exercise 2 ----------
//Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)

function sortNumber(arr) {
  // Write code here...
  return arr.sort(function(a,b){
      return b - a;
  })
}
//-------- exercise 3 ----------
// Sort an array from shortest string to longest
function lengthSort(arr) {
  // Write code here...
  return arr.sort(function(a, b) {
    return a.length - b.length;
  })
}
// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length

//-------- exercise 4 ----------
// Sort an array alphabetically

function alphabetical(arr) {
  // Write code here...
  return arr.sort()
}
//-------- exercise 5 ----------
// Sort the objects in the array by age

var arr = [
  {
    name: "Quiet Samurai",
    age: 22
  },
  {
    name: "Arrogant Ambassador",
    age: 100
  },
  {
    name: "Misunderstood Observer",
    age: 2
  },
  {
    name: "Unlucky Swami",
    age: 77
  }
]

function byAge(arr){
  // Write code here...
  return arr.sort(function(a,b){
      return a.age - b.age;
  })
}
//-------- exercise 6 ----------
/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. 
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
 
var students = [
  { name: 'A', score: 100 },
  { name: 'B', score: 10 },
  { name: 'C', score: 101 },
  { name: 'D', score: 50 },
  { name: 'E', score: 75 }
];

function getTopStudents(students) {
  // Write code here...
  var arr = students.sort(function(a,b){
    return b.score - a.score;
  })
  var afterSlice = arr.slice(0,3);
  var result = []
  for (var i = 0; i<3; i++){
      result = result.concat(afterSlice[i].name)
  }
  return result
}
//----------  finish  ----------
