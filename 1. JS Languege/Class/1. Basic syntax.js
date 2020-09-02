/* 
    Trong lập trình hướng đối tượng, một class là một trương trình code mở rộng trong việc tạo obj, cung cấp những giá trị khởi tạo
    Thực tế chúng ta cần tạo nhiều obj có cũng một loại và có thể dùng constructor function. Tuy nhiên trong js hiện đại có cấu trúc class xịn hơn
*/

/* 
    The  "class" syntax
    class MyClass {
        // class methods
        constructor() { ... }
        method1() { ... }
        method2() { ... }
        method3() { ... }
    ...
    }
    - Class là gì?
        NÓ thực chất cũng chỉ là một hàm, Khi class User {}
            1. Tạo một hàm tên là User, code của hàm được lấy từ constructor method
            2. Lưu các class method trong User.prototype
        Vậy thì class có cái gì khác so với constructor function:
            1. Nó sẽ thêm một thuộc tính mới [[FunctionKind]]:"classConstructor" - bắt buộc gọi class bằng new
            2. Class method là non-enumerable
            3. Class luôn luôn sử dụng "use strict"
*/
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }

}
// Usage:
let user = new User("John");
user.sayHi();

/* 
    Class Expression:
    Giống như NFE. Class expression cũng có tên

*/
let User = class {
  sayHi() {
    alert("Hello");
  }
};

let User = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass name is visible only inside the class
  }
};
new User().sayHi(); // works, shows MyClass definition
alert(MyClass); // error, MyClass name isn't visible outside of the class

/* 
    Getter/setter


*/

class MyClass {
  prop = value; // property

  constructor(...) { // constructor
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter method
  set something(...) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}