/* 
    Rest parameters
    - Sử dụng để một hàm có thể gọi bao nhiêu tham số tuỳ thích
    ... args: args sẽ là một mảng các tham số
    ... args: phải đứng cuối trong các tham só
*/

function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}
alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6


/* 
    The "arguments" variable:
    - Có một obj đặc biệt giống với mảng tên là arguments
    - arguments: chứa tất cả các tham số của hàm
    - arguments không phải là mảng, Nó không có array methods
    - arrow funciton thì không có arguments giống như với this
*/
function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );
  // it's iterable
  // for(let arg of arguments) alert(arg);
}
// shows: 2, Julius, Caesar
showName("Julius", "Caesar");
// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

/* 
    Spread syntax:
    - Cú pháp truyền vào hàm từng phần tử của 1 mảng:
    let arr= [1,2,3];
    Math.max(...arr);
    - Cũng có thể sử dụng spread syntax đẻ hợp nhất các mảng:
        let merged = [0, ...arr, 2, ...arr2];


*/
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max(...arr1, ...arr2) ); // 8

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max(1, ...arr1, 2, ...arr2, 25) );

let str = "Hello";
alert( [...str] ); // H,e,l,l,o// 25