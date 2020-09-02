/* 
    Cách sử dụng export:
        1. Trước khi khai báo 
        2. Bên ngoài các khai báo
    export default: chỉ export được 1 thứ và không cần {}

*/
// export an array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}

// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {sayHi, sayBye}; // a list of exported variables

/* 
    Import:
    - Nếu có quá nhiều import chúng ta có thể import mọi thứ như 1obj sử dụng import * as <obj> from 

*/
// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');


// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!