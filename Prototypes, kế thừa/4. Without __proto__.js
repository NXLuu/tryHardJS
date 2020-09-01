/*
    __proto__ được xem là lỗi thời, giơ người ta dùng các khác để setup a prototype
    - Object.create(proto, [descriptors]) – tạo một empty obj và những thuộc tính trong  descriptors
    - Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
    - Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

*/


// Ví dụ
let animal = {
  eats: true
};
// create a new object with animal as a prototype
let rabbit = Object.create(animal);
alert(rabbit.eats); // true
alert(Object.getPrototypeOf(rabbit) === animal); // true
Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

let rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});


/* 
    Tại sao __proto__ lại cùi và bị thay thế:

*/