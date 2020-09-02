/* 
    .then: gọi return ở trong then nó sẽ  trả về kết quả cho promise ban đầu và dùng để gọi các  then tiếp theo
    .then(handler) - có thể sử dụng để tạo và trả về một promise

*/
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});