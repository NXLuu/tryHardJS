/* 
    Khi chương trình của chúng ta phình ra, chúng ta muốn chia nó thành nhiều file, Mỗi file gọi là modules
    - Một modules có thể chứa một class, một thư viện hàm, hay một mục đích đặc biệt
    - Một modules là tột file, một script cũng là một modules
    - Modules có thể load lẫn nhau sử dung chỉ thị export và import
     1. export: keyword cho phép truy cập các biến, các hàm từ bên ngoài
     2. import: cho phép truy cập các file khác
*/
<script type="module"></script>
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// 📁 main.js
import {sayHi} from './sayHi.js';
alert(sayHi); // function...
sayHi('John'); // Hello, John!

/* 
    - Các tính năng của module:
     1. Luông luôn sử dụng "use strict"
*/