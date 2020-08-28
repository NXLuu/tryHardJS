let id = Symbol("id");
id.description // id

/* 
    Các key trong Obj của js có thể là string hoặc có thể là kiểu kí tự
    - Thế Symbol type là gì
    - "Symbol" đại diện cho một một nhận dạng duy nhất
    - Giá trị của loại này có thể được tạo bởi Symbol()
    - Chúng ta có thể gửi vào symbol description hay còn gọi là symbol name 
    - Symbol được bảo đảm là độc nhất
*/
// id is a new symbol
let id = Symbol();
// id is a symbol with the description "id"
let id = Symbol("id");

// Độc nhất
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

/* 
    Lợi ích của symbol 
    Symbol cho phép chúng ta tạo một thuộc tính ẩn của obj mà không phần nào có thể vô tình truy cập vào hoặc ghi đè lên
    - Để tránh xung đột với code của bên thứ ba
    - Symbol bị skip bởi for...in
*/

/* 
    Nếu chúng ta muốn sử dụng symbols trong object literal, ta càn dấu []
*/
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not "id": 123
};

/* 
    Global Symbols
    Thông thường tất cả symbol là khác nhau nhưng nếu muốn chúng giống nhau hãy sử dụng for

*/
// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true