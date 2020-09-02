/* 
    Trì hoãn việc gọi hàm: scheduling a call
    - setTimeout: Cho phép chúng ta chạy một hàm sau một khoảng thời gian
    - setInterval: Cho phép chúng ta chạy một hàm lặp đi lặp lại
*/

/* 
    setTimeout:
    let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
    - func|code: 1 hàm hoặc một đoạn code 
    - delay: Giá trị delay trước khi chạy (mili giây) 1000ms = 1 giây
    - arg1, arg2: Tham số cho hàm

    - setTimeout trả về một timer identifier.
    - Chúng ta có thể huỷ việc chạy bàn clearTimeout(timerId)
*/
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
setTimeout("alert('Hello')", 1000);

let timerId = setTimeout(...);
clearTimeout(timerId);

/* 
    setInterval
    let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
*/
// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

/* 
    setTimeout lồng nhau

*/