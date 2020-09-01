/* 
    Obj cũng có thể tạo bởi constructor func new F
    Nếu F.prototype là một obj thì obj mới cũng có prototype
    - F.prototype là thuộc tính bình thường có tên là prototype của hàm F.
*/

// Ví dụ ---------------
let animal = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
alert( rabbit.eats ); // true

/* 
    Default F.prototype, constructor property
    - Mọi hàm đều có thuộc tính prototype và mặc định của thuộc tính này một obj chỉ có duy nhất một property là constructor
    - constructor lại chỉ về chính hàm F
*/
function Rabbit() {}
/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }
let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}
alert(rabbit.constructor == Rabbit); // true (from prototype)