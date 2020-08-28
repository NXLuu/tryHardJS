/* 
    Objects giống như các thực thể trong thể trong thế giới thực, nó có các thuộc tính cũng như có thể hành động
    - Hành động được biểu diễn trong JS băng các hàm trong thuộc tính 
*/
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi(); // Hello!

// Viết tắt
user = {
  sayHi() { // same as "sayHi: function()"
    alert("Hello");
  }
};
user = {
  sayHi: function() {
    alert("Hello");
  }
};

/* 
    this trong methods 
    - Thông thường các methods cần phải truy cập thông tin của obj.
    - Nó sẽ dùng từ this để đại diện cho obj đó
    - Từ this sẽ không bị ràng buộc như các ngôn ngữ khác, nó có thể sử dụng trong bất cứ các hàm nào
*/
let user = {
  name: "John",
  age: 30,
  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};
user.sayHi(); // John

// "this"  is not bound
function sayHi() {
  alert( this.name );
}

// Arrow function sẽ không có this của riêng nó, nếu nó cần tham chiếu đến this nó sẽ lấy bên ngoài của hàm