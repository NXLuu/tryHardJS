/* 
    Khai báo một hàm
*/
function sayHi() {
  alert( "Hello" );
}
/* 
    Khai báo biểu thức hàm
    - Hàm chỉ là một giá trị được lưu trong các biến
    - Tạo một hàm và đặt nó vào trong một biến
*/
let sayHi = function() {
  alert( "Hello" );
};

/* 
    callback funtion
    Truyền một hàm làm tham số của một hàm
*/

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

/* 
    Sự khác nhau giữa funtion expression và funtion declaration
    function declaration: một hàm được khai báo riêng biệt
    function expression: một hàm được tạo bên trong một biểu thức, hoặc phía bên phải của dấu "="
    - Sự khác biệt tinh tế hơn là bởi JS engine
    A function expression: chỉ được tạo khi thực hiên đến nó, và chỉ có thể được dùng trong khoảnh khắc đó
    A Function Declaration: Có thể được gọi trước cả khi nó được định nghĩa
*/
