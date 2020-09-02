/* 
    Chúng ta dùng constructor function và toán tử new để tạo cùng lúc nhiều obj 
    - Mục đính chính của constructor là tái sử dụng đoạn code tạo obj 
*/

/* 
    Constructor function
    - Nó là một hàm thông thường, có 2 quy ước như sau:
        1. Được đặt tên với chữ cái đầu viết hoa
        2. Chúng nên được thực hiện chỉ với một toán tử new
    - Khi một hàm được chạy với toán tử new nó sẽ thực hiện các bước sau: 
        1. Một obj trống được tạo và được gán với this
        2. Thân hàm đươc chạy và thông thường nó sẽ thay đổi this và thêm các thuộc tính mới cho nó.
        3. Hàm trả về giá trị của this
*/

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

/* 
    Trả về trong constructor function:
    - Thông thường constructor function không cần câu lệnh trả về;
    - Tuy nhiên nếu vẫn cố đấm ăn xôi sử dụng câu lệnh trẩ về thì ta có quy ước như sau:
        1. Nếu return trả về một obj thì obj sẽ được trả về thay vì this
        2. Nếu return một primitive thì sẽ bỏ qua return 
    
*/

/* 
    Methods trong constructor


*/
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/