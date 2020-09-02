/* 
    Global object cung cấp các biến, các hàm ở bất kì đâu. Cái mà là những built trong ngôn ngữ hoặc môi trường
    - Trong browser là window
    - Trong Node.js là global
    - Gần đây globalThis được thêm vào ngôn ngữ
*/
alert("Hello");
// is the same as
window.alert("Hello");
var gVar = 5;

alert(window.gVar); // 5 (became a property of the global object)

let gLet = 5;

alert(window.gLet); // undefined (doesn't become a property of the global object)

window.currentUser = {
  name: "John"
};

/* 
    Nó dùng đẻ làm gì:
    Để kiểm thử các tính năng của ngôn ngữ có được hỗ trọ hay không

*/

if (!window.Promise) {
  alert("Your browser is really old!");
}