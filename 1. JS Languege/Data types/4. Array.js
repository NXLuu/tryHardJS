let arr = new Array();
let arr = [];
let fruits = ["Apple", "Orange", "Plum"];
fruits.pop();
fruits.push("Pear");
fruits.shift();
fruits.unshift('Apple');
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

/*  
    - Mảng là một loại đặc biệt của obj
    arr[0] thực chất là obj[key]



    Methods pop/push, shift/unshift 
    push: thêm một phần tử vào cuối 
    pop: lấy một phần tử từ cuối -> trả về nó
    shift: lấy một phần tử ở đâu -> trả vè nó
    unshift: thêm một phần tử ở đầu
*/


/* 
    Vòng lặp
    for..of

*/
for (let fruit of fruits) {
  alert( fruit );
}
for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}
