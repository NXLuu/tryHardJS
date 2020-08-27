/* 
    Có 1 kiểu dữ liệu là Primitive(nguyên thuỷ) - bởi vì giá trị của chúng chỉ là 1 thứ đơn lẻ
    - Trái ngược objects dùng để lưu đa dạng các loại dữ liệu và các thực thể phức tạp hơn. Dưới dạng các thuộc tính của objects, đó là một cặp key:value. key là một string(property name) và value là bất cứ thứ gì
*/
    let user = new Object(); // "object constructor" syntax
    let user = {};  // "object literal" syntax
// Object literal là cách tạo object bằng một cặp dấu ngoặc nhọn
    let user = {     // an object
        name: "John",  // by key "name" store value "John"
        age: 30,        // by key "age" store value 30
        "likes birds": true  // multiword property name must be quoted
    };
// Giá trị của thuộc tính có thể truy cập dược bằng kí hiệu dấu chấm
    // get property values of the object:
    alert( user.name ); // John
    alert( user.age ); // 30

// Xoá 
    delete user.age;

/* 
    Dấu ngoặc vuông
    - Dùng để truy cập giá trị với một thuộc tính nhiều chữ 
*/
    let user = {};

    // set
    user["likes birds"] = true;

    // get
    alert(user["likes birds"]); // true

    // delete
    delete user["likes birds"];

/* 
    Các thuộc tính toán 
    Chúng ta có thể sử dụng dấu ngoặc vuống trong khai báo thuộc tính

*/
    let fruit = prompt("Which fruit to buy?", "apple");

    let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
    };

    alert( bag.apple ); // 5 if fruit="apple"

/* 
    Kiểm tra sự tồn tại của thuộc tính
    - Có thể truy cập bất kì thuộc tính nào kể cả nó không tồn tại -> trả lại undefined
    - Cũng có thể kiểm tra bằng cách "key" in object
*/
    let user = { name: "John", age: 30 };

    alert( "age" in user ); // true, user.age exists
    alert( "blabla" in user ); // false, user.blabla doesn't exist

/* 
    Vòng lặp for...in
    for (key in object) {
    // executes the body for each key among object properties
    }
*/

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

/* 
    Thứ tự trong vòng for
    - Nếu thuộc tính là kiểu integer thì nó sắp xếp từ nhỏ đến lớn
    - 

*/

