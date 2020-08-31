/* 
    Function cũng là các object (action objects)
    - Nó cũng có các thuộc tính
        1. The "name" property
        2. The "length" property
*/
// name
function f(sayHi = function() {}) {
  alert(sayHi.name); // sayHi (works!)
}

f();

// Length
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}
alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2

/* 
  Custom properties
  - Chúng ta cũng có thể các thuộc tính cho hàm được
  - Một thuộc tính không phải là một biến
 */
function sayHi() {
  alert("Hi");

  // let's count how many times we run
  sayHi.counter++;
}
sayHi.counter = 0; // initial value
sayHi(); // Hi
sayHi(); // Hi
alert( `Called ${sayHi.counter} times` ); // Called 2 times


/* 
  Named Function Expression
  - NFE: là một thuật ngữ chỉ các biểu thức hàm có tên
  - Mục đích của nó là gì:
    1. NÓ cho phép hàm tham chiếu đến chính bản thân nó bên trong hàm
    2. Nó Không thể được sử dụng bên ngoài hàm
*/

let sayHi = function func(who) {
  alert(`Hello, ${who}`);
};

let sayHi = function(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi("Guest"); // Error: sayHi is not a function
  }
};
let welcome = sayHi;
sayHi = null;
welcome(); // Error, the nested sayHi call doesn't work any more!