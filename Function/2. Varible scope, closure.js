/* 
    JS cũng là một ngôn ngữ function-oriented, nó cho phép chúng ta tự do. Một hàm có thể tạo bất cứ lúc nào, chuyền vào bất cứ thứ gì, và có thể gọi từ bất cứ đâu

*/

/* 
    Code blocks:
    - Nếu một biến được khai báo nên trong {} - nó chỉ có thể sử dụng trong {}
    - 

*/

/* 
    Nested functions
    - Một funciton được gọi là nested nếu nó được tạo bên trong một function khác

*/

function sayHiBye(firstName, lastName) {
  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }
  alert( "Hello, " + getFullName() );
  alert( "Bye, " + getFullName() );

}

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}
let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1, giá trị của biến count vẫn đcợc giữ mà không reset về 0
alert( counter() ); // 2

/* 
    Lexical Environment
    1. Varibles:
        - Môi khi chạy một hàm, code block {}, một obj ẩn có tên laf Lexical Environment
        - Nó bao gồm 2 phần Environment Record: một object lưu tất cả các biến local, như là các thuộc tính của nó
        - Và một tham chiếu đến các outer lexical environment bên ngoài
    2. Function Declarations
        - Một hàm cũng là một giá trị
        - Khi một hàm được khai báo nó sẽ ngay lập tức được khởi tạo và có thể được sử dụng luôn       
    3. Iner, outer Lexical environment
    4. Trả về một hàm:
*/

/* 
    closure:
    Là một hàm có thể truy cập tất cả các biến bên ngoài. Mọi hàm trong JS đều là closure
*/


/* 
    Garbege collection:
    Thông thường Lexical Environment bị loại bỏ khỏi bộ nhớ sau khi hàm kết thúc.

*/
function f() {
  let value = 123;

  return function() {
    alert(value);
  }
}

let g = f(); // g.[[Environment]] stores a reference to the Lexical Environment
// of the corresponding f() call

/* 
    Real-life optimizations
    

*/