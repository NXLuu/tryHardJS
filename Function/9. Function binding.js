/* 
    Function binding
    - Khi chuyền obj methods như một call back. thì vấn đề xảy ra là sẽ mất this
    - Vậy làm thế nào đề fix:
        1. Thêm một wrapper
        2. sử dụng method bind
    - let boundFunc = func.bind(context);
    Kết quả của func.bind(context) là một function đặc biẹt giống như  obj kì lạ. 
    Cho phép gọi hàm func với this=context
    - func.bind là một biến thể ràng buộc func với context
    - bindAll: Nếu obj có nhiều method 
    - Cấu trúc đầy đủ:
        let bound = func.bind(context, [arg1], [arg2], ...);
    - Nó cho phép rằng buộc cả các tham số đầu vào
*/
// wrapper----------------
setTimeout(function() {
  user.sayHi(); // Hello, John!
}, 1000);

//bind-----------------
let user = {
  firstName: "John",
  say(phrase) {
    alert(`${phrase}, ${this.firstName}!`);
  }
};
let say = user.say.bind(user)
say("Hello"); // Hello, John ("Hello" argument is passed to say)
say("Bye"); // Bye, John ("Bye" is passed to say)

//---------------
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10