/* 
    Var thì không có block scope
    Var có thể khai báo cùng 1 biến nhiều lần
    Var có thể khai báo sau khi đã sử dụng
*/
for (var i = 0; i < 10; i++) {
  // ...
}
alert(i); // 10, "i" is visible after loop, it's a global variable