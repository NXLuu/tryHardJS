/* 
    instanceof: kiểm tra xem một obj có thuộc 1 class hay kế thừ từ class hay không - nó hoạt động cả với function

*/
class Rabbit {}
let rabbit = new Rabbit();
// is it an object of Rabbit class?
alert( rabbit instanceof Rabbit ); // true

let arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true

// instead of class
function Rabbit() {}
alert( new Rabbit() instanceof Rabbit ); // true